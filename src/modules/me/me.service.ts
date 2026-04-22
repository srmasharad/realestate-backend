import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';
import { UploadedImageFile } from 'src/common/types/uploaded-image-file.type';
import { PrismaService } from 'src/database/prisma.service';
import { MediaVisibility, PersonProfile, UserMediaType } from 'src/generated/prisma';

import { Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { UpsertMyProfileDto } from './dto/upsert-my-profile.dto';

@Injectable()
export class MeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

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

  async getMyMediaAccess(currentUser: AuthenticatedUser, mediaId: string) {
    const media = await this.prisma.userMedia.findFirst({
      where: {
        id: mediaId,
        userId: currentUser.id,
      },
      select: {
        id: true,
        mediaType: true,
        visibility: true,
        publicId: true,
        createdAt: true,
      },
    });

    if (!media) {
      throw new NotFoundException('Media not found');
    }

    const accessUrl =
      media.visibility === MediaVisibility.PROTECTED
        ? this.cloudinaryService.getProtectedImageUrl(media.publicId)
        : null;

    return {
      mediaId: media.id,
      mediaType: media.mediaType,
      visibility: media.visibility,
      accessUrl,
      createdAt: media.createdAt,
    };
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

    const profileImage = await this.prisma.userMedia.findFirst({
      where: {
        userId: currentUser.id,
        mediaType: UserMediaType.PROFILE_IMAGE,
        isPrimary: true,
      },
      select: {
        id: true,
        mediaType: true,
        visibility: true,
        isPrimary: true,
        createdAt: true,
      },
    });

    const isProfileComplete = this.isProfileComplete(profile);
    const isEligibleToApply = isProfileComplete;

    return {
      profile,
      profileImage,
      isProfileComplete,
      isEligibleToApply,
    };
  }

  async upsertMyProfile(currentUser: AuthenticatedUser, dto: UpsertMyProfileDto, profileImage?: UploadedImageFile) {
    let uploadedImage: { url: string; publicId: string } | null = null;

    if (profileImage) {
      uploadedImage = await this.cloudinaryService.uploadProtectedImage(
        profileImage.buffer,
        'realestate/users/profile-images',
      );
    }

    try {
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

      if (uploadedImage) {
        const existingProfileImage = await this.prisma.userMedia.findFirst({
          where: {
            userId: currentUser.id,
            mediaType: UserMediaType.PROFILE_IMAGE,
            isPrimary: true,
          },
          select: {
            id: true,
            publicId: true,
          },
        });

        if (existingProfileImage) {
          await this.cloudinaryService.deleteImage(existingProfileImage.publicId);

          await this.prisma.userMedia.delete({
            where: {
              id: existingProfileImage.id,
            },
          });
        }

        await this.prisma.userMedia.create({
          data: {
            userId: currentUser.id,
            mediaType: UserMediaType.PROFILE_IMAGE,
            visibility: MediaVisibility.PROTECTED,
            url: uploadedImage.url,
            publicId: uploadedImage.publicId,
            isPrimary: true,
          },
        });
      }

      const profileImageRecord = await this.prisma.userMedia.findFirst({
        where: {
          userId: currentUser.id,
          mediaType: UserMediaType.PROFILE_IMAGE,
          isPrimary: true,
        },
        select: {
          id: true,
          // url: true,
          // publicId: true,
          createdAt: true,
        },
      });

      return {
        ...profile,
        profileImage: profileImageRecord,
      };
    } catch (error) {
      if (uploadedImage) {
        await this.cloudinaryService.deleteImage(uploadedImage.publicId).catch(() => null);
      }
      throw error;
    }
  }

  async getMyApplications(
    currentUser: AuthenticatedUser,
    query: PaginationQueryDto,
  ): Promise<
    PaginatedResponse<{
      id: string;
      status: string;
      message: string | null;
      createdAt: Date;
      property: {
        id: string;
        title: string;
        listingType: string;
        propertyType: string;
        price: unknown;
        suburb: string;
        state: string;
        postcode: string;
        isPublished: boolean;
      };
    }>
  > {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const sortBy = query.sortBy ?? 'createdAt';
    const sortOrder = query.sortOrder ?? 'desc';

    const skip = (page - 1) * limit;

    const where = {
      applicantId: currentUser.id,
    };

    const [applications, total] = await this.prisma.$transaction([
      this.prisma.application.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          status: true,
          message: true,
          createdAt: true,
          property: {
            select: {
              id: true,
              title: true,
              listingType: true,
              propertyType: true,
              price: true,
              suburb: true,
              state: true,
              postcode: true,
              isPublished: true,
            },
          },
        },
      }),
      this.prisma.application.count({ where }),
    ]);

    return {
      items: applications,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
