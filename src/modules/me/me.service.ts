import { PrismaService } from 'src/database/prisma.service';
import { PersonProfile } from 'src/generated/prisma';

import { Injectable } from '@nestjs/common';

import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { UpsertMyProfileDto } from './dto/upsert-my-profile.dto';

@Injectable()
export class MeService {
  constructor(private readonly prisma: PrismaService) {}

  private isProfileComplete(profile: PersonProfile | null): boolean {
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

  async getMyProfile(currentUser: AuthenticatedUser) {
    const profile = await this.prisma.personProfile.findUnique({
      where: {
        userId: currentUser.id,
      },
      select: {
        id: true,
        userId: true,
        fullName: true,
        phone: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        employmentStatus: true,
        monthlyIncome: true,
        householdSize: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    const isProfileComplete = this.isProfileComplete(profile);
    const isEligibleToApply = isProfileComplete;

    return {
      profile,
      isProfileComplete,
      isEligibleToApply,
    };
  }

  async upsertMyProfile(currentUser: AuthenticatedUser, dto: UpsertMyProfileDto) {
    const profile = await this.prisma.personProfile.upsert({
      where: {
        userId: currentUser.id,
      },
      update: {
        fullName: dto.fullName,
        phone: dto.phone,
        addressLine1: dto.addressLine1,
        suburb: dto.suburb,
        state: dto.state,
        postcode: dto.postcode,
        employmentStatus: dto.employmentStatus,
        monthlyIncome: dto.monthlyIncome,
        householdSize: dto.householdSize,
      },
      create: {
        userId: currentUser.id,
        fullName: dto.fullName,
        phone: dto.phone,
        addressLine1: dto.addressLine1,
        suburb: dto.suburb,
        state: dto.state,
        postcode: dto.postcode,
        employmentStatus: dto.employmentStatus,
        monthlyIncome: dto.monthlyIncome,
        householdSize: dto.householdSize,
      },
      select: {
        id: true,
        userId: true,
        fullName: true,
        phone: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        employmentStatus: true,
        monthlyIncome: true,
        householdSize: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return profile;
  }
}
