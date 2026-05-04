import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import { ApplicationStatus } from 'src/generated/prisma';

import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  private isProfileComplete(
    profile: {
      fullName: string;
      phone: string;
      addressLine1: string;
      suburb: string;
      state: string;
      postcode: string;
      employmentStatus: string;
      monthlyIncome: unknown;
      householdSize: number;
    } | null,
  ): boolean {
    if (!profile) {
      return false;
    }

    return Boolean(
      profile.fullName &&
      profile.phone &&
      profile.addressLine1 &&
      profile.suburb &&
      profile.state &&
      profile.postcode &&
      profile.employmentStatus &&
      profile.monthlyIncome !== null &&
      profile.householdSize > 0,
    );
  }

  async create(dto: CreateApplicationDto, currentUser: AuthenticatedUser) {
    const profile = await this.prisma.personProfile.findUnique({
      where: {
        userId: currentUser.id,
      },
      select: {
        fullName: true,
        phone: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        employmentStatus: true,
        monthlyIncome: true,
        householdSize: true,
      },
    });

    const isEligibleToApply = this.isProfileComplete(profile);

    if (!isEligibleToApply) {
      throw new ForbiddenException('Complete your profile before applying for a property');
    }

    const property = await this.prisma.property.findFirst({
      where: {
        id: dto.propertyId,
        isPublished: true,
      },
      select: {
        id: true,
        isPublished: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const approvedApplication = await this.prisma.application.findFirst({
      where: {
        propertyId: dto.propertyId,
        status: ApplicationStatus.APPROVED,
      },
      select: {
        id: true,
      },
    });

    if (approvedApplication) {
      throw new BadRequestException('This property already has an approved applicant');
    }

    const existingApplication = await this.prisma.application.findUnique({
      where: {
        propertyId_applicantId: {
          propertyId: dto.propertyId,
          applicantId: currentUser.id,
        },
      },
      select: {
        id: true,
      },
    });

    if (existingApplication) {
      throw new BadRequestException('You have already applied for this property');
    }

    const application = await this.prisma.application.create({
      data: {
        propertyId: dto.propertyId,
        applicantId: currentUser.id,
        message: dto.message,
        status: ApplicationStatus.PENDING,
      },
      select: {
        id: true,
        propertyId: true,
        applicantId: true,
        status: true,
        message: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return application;
  }

  async updateStatus(applicationId: string, dto: UpdateApplicationStatusDto) {
    const application = await this.prisma.application.findUnique({
      where: {
        id: applicationId,
      },
      select: {
        id: true,
        status: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found');
    }

    const updatedApplication = await this.prisma.application.update({
      where: {
        id: applicationId,
      },
      data: {
        status: dto.status,
      },
      select: {
        id: true,
        propertyId: true,
        applicantId: true,
        status: true,
        message: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    try {
      await this.mailService.sendApplicationStatusEmail(
        application.applicant.email,
        application.applicant.fullName,
        application.property.title,
        dto.status,
      );
    } catch (error) {
      // Log the error but do not fail the entire operation if email sending fails
      console.error(`Failed to send application status email: ${error}`);
    }

    return {
      message: `Application ${dto.status.toLowerCase()} successfully`,
      application: updatedApplication,
    };
  }
}
