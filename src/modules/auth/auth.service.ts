import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';

import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

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

    await this.mailService.sendVerificationEmail(user.email, verification.token);

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

    await this.mailService.sendVerificationEmail(user.email, verification.token);

    return {
      message: 'Verification email has been re-issued',
      /****** ONLY FOR DEVELOPMENT MODE TO SEE TEST THE TOKEN *****/
      // verificationToken: verification.token,
      // verificationTokenExpiresAt: verification.expiresAt,
    };
  }
}
