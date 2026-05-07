import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { randomBytes } from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';

import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { GoogleAuthDto } from './dto/google-auth.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { AuthenticatedUser } from './types/authenticated-user.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  private async createEmailVerificationToken(userId: string) {
    const token = randomBytes(32).toString('hex'); // Generate a random token and remove slashes
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // Token expires in 24 hours

    const verificationToken = await this.prisma.emailVerificationToken.create({
      data: {
        userId,
        token,
        expiresAt,
      },
      select: {
        token: true,
        expiresAt: true,
      },
    });

    return verificationToken;
  }

  async register(registerDto: RegisterDto) {
    const { fullName, email, phone, password } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    if (phone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone },
      });

      if (existingPhone) {
        throw new BadRequestException('Phone number already in use');
      }
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        fullName,
        email,
        phone,
        passwordHash,
        isEmailVerified: false,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true,
      },
    });

    const verification = await this.createEmailVerificationToken(user.id);

    try {
      await this.mailService.sendVerificationEmail(user.email, user.fullName, verification.token);
    } catch (error) {
      console.error(`Failed to send verification email: ${error}`);
    }

    return {
      message: 'User registered successfully. Please verify your email.',
      user,
      /****** ONLY FOR DEVELOPMENT MODE TO SEE TEST THE TOKEN *****/
      // verificationToken: verification.token,
      // verificationTokenExpiresAt: verification.expiresAt,
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    };
  }

  async verifyEmail(token: string) {
    const verificationToken = await this.prisma.emailVerificationToken.findUnique({
      where: {
        token,
      },
      select: {
        id: true,
        userId: true,
        token: true,
        expiresAt: true,
        usedAt: true,
      },
    });

    if (!verificationToken) {
      throw new BadRequestException('Invalid Verification Token');
    }

    if (verificationToken.usedAt) {
      throw new BadRequestException('Verification token has already been used');
    }

    if (verificationToken.expiresAt < new Date()) {
      throw new BadRequestException('Verification token has expired');
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: verificationToken.userId },
        data: {
          isEmailVerified: true,
        },
      }),
      this.prisma.emailVerificationToken.update({
        where: { id: verificationToken.id },
        data: {
          usedAt: new Date(),
        },
      }),
    ]);

    return {
      message: 'Email verified successfully',
    };
  }

  async resendVerification(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        fullName: true,
        isEmailVerified: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.isEmailVerified) {
      throw new NotFoundException('Email is already verified');
    }

    const verification = await this.createEmailVerificationToken(user.id);

    await this.mailService.sendVerificationEmail(user.email, user.fullName, verification.token);

    return {
      message: 'Verification email has been re-issued',
      /****** ONLY FOR DEVELOPMENT MODE TO SEE TEST THE TOKEN *****/
      // verificationToken: verification.token,
      // verificationTokenExpiresAt: verification.expiresAt,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: {
        id: true,
        email: true,
        fullName: true,
        isActive: true,
      },
    });

    // Always return success (security: prevent email enumeration);
    if (!user || !user.isActive) {
      return {
        message: 'If the email exists, a password reset link has been sent',
      };
    }

    // Generate token
    const token = crypto.randomBytes(32).toString('hex');

    // Expiry (e.g., 1 hour)
    const expiresAt = new Date(Date.now() + 60 * 60 * 100);

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    try {
      await this.mailService.sendPasswordResetEmail(user.email, user.fullName, resetUrl);
    } catch (error) {
      console.error('Failed to send password reset email', error);
    }

    return {
      message: 'If the email exists, a password reset link has been sent',
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const resetToken = await this.prisma.passwordResetToken.findUnique({
      where: {
        token: dto.token,
      },
      select: {
        id: true,
        userId: true,
        expiresAt: true,
        usedAt: true,
      },
    });

    if (!resetToken) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    if (resetToken.usedAt) {
      throw new BadRequestException('Reset token has already been used');
    }

    if (resetToken.expiresAt < new Date()) {
      throw new BadRequestException('Reset token has expired');
    }

    const passwordHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: {
          id: resetToken.userId,
        },
        data: {
          passwordHash,
        },
      }),

      this.prisma.passwordResetToken.update({
        where: {
          id: resetToken.id,
        },
        data: {
          usedAt: new Date(),
        },
      }),
    ]);

    return {
      message: 'Password has been reset successfully',
    };
  }

  async changePassword(currentUser: AuthenticatedUser, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        id: true,
        passwordHash: true,
      },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid account');
    }

    const isCurrentPasswordValid = await bcrypt.compare(dto.currentPassword, user.passwordHash);

    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        passwordHash: newPasswordHash,
      },
    });

    return {
      message: 'Password changed successfully',
    };
  }

  async googleAuth(dto: GoogleAuthDto) {
    const googleClientId = process.env.GOOGLE_CLIENT_ID;

    if (!googleClientId) {
      throw new BadRequestException('Google login is not configured');
    }

    const client = new OAuth2Client(googleClientId);

    const ticket = await client.verifyIdToken({
      idToken: dto.idToken,
      audience: googleClientId,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email || !payload.sub) {
      throw new BadRequestException('Invalid Google token');
    }

    const googleId = payload.sub;
    const email = payload.email;
    const fullName = payload.name ?? email.split('@')[0];

    let user = await this.prisma.user.findUnique({
      where: { googleId },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
      },
    });

    if (!user) {
      const existingUserByEmail = await this.prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          fullName: true,
          role: true,
          isActive: true,
          isEmailVerified: true,
          googleId: true,
        },
      });

      if (existingUserByEmail) {
        user = await this.prisma.user.update({
          where: { id: existingUserByEmail.id },
          data: {
            googleId,
            isEmailVerified: true,
          },
          select: {
            id: true,
            email: true,
            fullName: true,
            role: true,
            isActive: true,
            isEmailVerified: true,
          },
        });
      } else {
        user = await this.prisma.user.create({
          data: {
            fullName,
            email,
            googleId,
            isEmailVerified: true,
            isActive: true,
          },
          select: {
            id: true,
            email: true,
            fullName: true,
            role: true,
            isActive: true,
            isEmailVerified: true,
          },
        });
      }
    }

    if (!user.isActive) {
      throw new BadRequestException('Account is inactive');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      user,
      accessToken,
    };
  }
}
