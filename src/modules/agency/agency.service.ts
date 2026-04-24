import * as bcrypt from 'bcrypt';
import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import { AgencyMemberRole, AgencyStatus } from 'src/generated/prisma';

import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateAgencyOnboardingDto } from './dto/create-agency-onboarding.dto';

@Injectable()
export class AgencyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async createOnboarding(dto: CreateAgencyOnboardingDto) {
    const existingAgencyBySlug = await this.prisma.agency.findUnique({
      where: { slug: dto.agencySlug },
      select: { id: true },
    });

    if (existingAgencyBySlug) {
      throw new BadRequestException('Agency slug already in use');
    }

    const existingAgencyByEmail = await this.prisma.agency.findUnique({
      where: { email: dto.agencyEmail },
      select: { id: true },
    });

    if (existingAgencyByEmail) {
      throw new BadRequestException('Agency email already in use');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.contactEmail },
      select: { id: true },
    });

    if (existingUser) {
      throw new BadRequestException('Contact email already in use');
    }

    if (dto.contactPhone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone: dto.contactPhone },
        select: { id: true },
      });

      if (existingPhone) {
        throw new BadRequestException('Contact phone number already in use');
      }
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          fullName: dto.contactFullName,
          email: dto.contactEmail,
          phone: dto.contactPhone,
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

      const agency = await tx.agency.create({
        data: {
          name: dto.agencyName,
          slug: dto.agencySlug,
          email: dto.agencyEmail,
          phone: dto.agencyPhone,
          addressLine1: dto.addressLine1,
          suburb: dto.suburb,
          state: dto.state,
          postcode: dto.postcode,
          status: AgencyStatus.PENDING,
        },
        select: {
          id: true,
          name: true,
          slug: true,
          email: true,
          phone: true,
          addressLine1: true,
          suburb: true,
          state: true,
          postcode: true,
          status: true,
          createdAt: true,
        },
      });

      const membership = await tx.agencyMember.create({
        data: {
          agencyId: agency.id,
          userId: user.id,
          role: AgencyMemberRole.AGENCY_OWNER,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });

      return {
        user,
        agency,
        membership,
      };
    });

    try {
      await this.mailService.sendAgencyOnboardingReceivedEmail(
        result.user.email,
        result.user.fullName,
        result.agency.name,
      );
    } catch (error) {
      console.error('Failed to send agency onboarding confirmation email', error);
    }

    try {
      await this.mailService.sendAdminAgencyOnboardingNotification(
        result.agency.name,
        result.user.fullName,
        result.user.email,
      );
    } catch (error) {
      console.error('Failed to send admin agency onboarding notification', error);
    }

    return {
      message: 'Agency onboarding submitted successfully. Your agency application is pending admin review.',
      ...result,
    };
  }
}
