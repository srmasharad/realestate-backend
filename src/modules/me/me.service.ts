import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';
import { UploadedImageFile } from 'src/common/types/uploaded-image-file.type';
import { PrismaService } from 'src/database/prisma.service';
import { MediaVisibility, OfferStatus, PersonProfile, UserMediaType } from 'src/generated/prisma';

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { RespondOfferDto } from './dto/respond-offer.dto';
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
      updatedAt: Date;
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
        primaryImage: {
          id: string;
          url: string;
          isPrimary: boolean;
        } | null;
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
          updatedAt: true,
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
              media: {
                where: {
                  isPrimary: true,
                  visibility: MediaVisibility.PUBLIC,
                },
                select: {
                  id: true,
                  url: true,
                  isPrimary: true,
                },
                take: 1,
              },
            },
          },
        },
      }),
      this.prisma.application.count({ where }),
    ]);

    return {
      items: applications.map((app) => ({
        id: app.id,
        status: app.status,
        message: app.message,
        createdAt: app.createdAt,
        updatedAt: app.updatedAt,
        property: {
          id: app.property.id,
          title: app.property.title,
          listingType: app.property.listingType,
          propertyType: app.property.propertyType,
          price: app.property.price,
          suburb: app.property.suburb,
          state: app.property.state,
          postcode: app.property.postcode,
          isPublished: app.property.isPublished,
          primaryImage: app.property.media[0] ?? null,
        },
      })),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getMyOffers(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [offers, total] = await this.prisma.$transaction([
      this.prisma.offer.findMany({
        where: {
          applicantId: currentUser.id,
        },
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          status: true,
          weeklyRent: true,
          bondAmount: true,
          advanceRent: true,
          leaseStartDate: true,
          leaseEndDate: true,
          leaseMonths: true,
          message: true,
          expiresAt: true,
          acceptedAt: true,
          declinedAt: true,
          createdAt: true,
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
              postcode: true,
              media: {
                where: {
                  isPrimary: true,
                },
                select: {
                  id: true,
                  url: true,
                },
                take: 1,
              },
            },
          },
          application: {
            select: {
              id: true,
              status: true,
            },
          },
        },
      }),
      this.prisma.offer.count({
        where: {
          applicantId: currentUser.id,
        },
      }),
    ]);

    return {
      items: offers,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async respondToOffer(currentUser: AuthenticatedUser, offerId: string, dto: RespondOfferDto) {
    const offer = await this.prisma.offer.findFirst({
      where: {
        id: offerId,
        applicantId: currentUser.id,
      },
      select: {
        id: true,
        status: true,
        expiresAt: true,
        propertyId: true,
        property: {
          select: {
            id: true,
            title: true,
            isLocked: true,
          },
        },
      },
    });

    if (!offer) {
      throw new NotFoundException('Offer not found');
    }

    if (offer.status !== OfferStatus.PENDING) {
      throw new BadRequestException('Only pending offers can be responded to');
    }

    if (offer.expiresAt && offer.expiresAt < new Date()) {
      await this.prisma.offer.update({
        where: { id: offer.id },
        data: { status: OfferStatus.EXPIRED },
      });

      throw new BadRequestException('Offer has expired');
    }

    if (dto.status === 'DECLINED') {
      const declinedOffer = await this.prisma.offer.update({
        where: { id: offer.id },
        data: {
          status: OfferStatus.DECLINED,
          declinedAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          declinedAt: true,
          property: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return {
        message: 'Offer declined successfully',
        offer: declinedOffer,
      };
    }

    const acceptedOffer = await this.prisma.$transaction(async (tx) => {
      const updatedOffer = await tx.offer.update({
        where: { id: offer.id },
        data: {
          status: OfferStatus.ACCEPTED,
          acceptedAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          acceptedAt: true,
          weeklyRent: true,
          bondAmount: true,
          advanceRent: true,
          leaseStartDate: true,
          leaseEndDate: true,
          leaseMonths: true,
          property: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      await tx.property.update({
        where: { id: offer.propertyId },
        data: {
          isLocked: true,
          isPublished: false,
        },
      });

      const totalAmount = Number(updatedOffer.bondAmount) + Number(updatedOffer.advanceRent);

      const paymentRequest = await tx.paymentRequest.create({
        data: {
          offerId: updatedOffer.id,
          propertyId: offer.propertyId,
          applicantId: currentUser.id,
          bondAmount: updatedOffer.bondAmount,
          advanceRent: updatedOffer.advanceRent,
          totalAmount,
          dueDate: updatedOffer.leaseStartDate,
        },
        select: {
          id: true,
          status: true,
          bondAmount: true,
          advanceRent: true,
          totalAmount: true,
          dueDate: true,
          createdAt: true,
        },
      });

      return {
        offer: updatedOffer,
        paymentRequest,
      };
    });

    return {
      message: 'Offer accepted successfully. Payment request has been created.',
      ...acceptedOffer,
    };
  }

  async getMyPaymentRequests(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.paymentRequest.findMany({
        where: {
          applicantId: currentUser.id,
        },
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          status: true,
          bondAmount: true,
          advanceRent: true,
          totalAmount: true,
          dueDate: true,
          paidAt: true,
          createdAt: true,
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
              postcode: true,
            },
          },
          offer: {
            select: {
              id: true,
              leaseStartDate: true,
              leaseEndDate: true,
              leaseMonths: true,
            },
          },
        },
      }),
      this.prisma.paymentRequest.count({
        where: {
          applicantId: currentUser.id,
        },
      }),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getMyLeaseAgreements(currentUser: AuthenticatedUser) {
    return this.prisma.leaseAgreement.findMany({
      where: { applicantId: currentUser.id },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getMyLeaseAgreementDetail(currentUser: AuthenticatedUser, leaseAgreementId: string) {
    const leaseAgreement = await this.prisma.leaseAgreement.findFirst({
      where: {
        id: leaseAgreementId,
        applicantId: currentUser.id,
      },
      select: {
        id: true,
        status: true,
        agreementUrl: true,
        externalProvider: true,
        externalReference: true,
        sentAt: true,
        signedAt: true,
        cancelledAt: true,
        leaseStartDate: true,
        leaseEndDate: true,
        leaseMonths: true,
        weeklyRent: true,
        bondAmount: true,
        advanceRent: true,
        createdAt: true,
        property: {
          select: {
            id: true,
            title: true,
            addressLine1: true,
            suburb: true,
            state: true,
            postcode: true,
          },
        },
        offer: {
          select: {
            id: true,
            status: true,
            acceptedAt: true,
          },
        },
      },
    });

    if (!leaseAgreement) {
      throw new NotFoundException('Lease agreement not found');
    }

    return leaseAgreement;
  }

  async getMyTenancies(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.tenancy.findMany({
        where: {
          tenantId: currentUser.id,
        },
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          status: true,
          startDate: true,
          endDate: true,
          weeklyRent: true,
          bondAmount: true,
          advanceRent: true,
          endedAt: true,
          cancelledAt: true,
          createdAt: true,
          property: {
            select: {
              id: true,
              title: true,
              addressLine1: true,
              suburb: true,
              state: true,
              postcode: true,
              media: {
                where: {
                  isPrimary: true,
                },
                take: 1,
                select: {
                  id: true,
                  url: true,
                },
              },
            },
          },
          leaseAgreement: {
            select: {
              id: true,
              status: true,
              agreementUrl: true,
              signedAt: true,
            },
          },
          agency: {
            select: {
              id: true,
              name: true,
              slug: true,
              email: true,
              phone: true,
            },
          },
        },
      }),

      this.prisma.tenancy.count({
        where: {
          tenantId: currentUser.id,
        },
      }),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getMyTenancyDetail(currentUser: AuthenticatedUser, tenancyId: string) {
    const tenancy = await this.prisma.tenancy.findFirst({
      where: {
        id: tenancyId,
        tenantId: currentUser.id,
      },
      select: {
        id: true,
        status: true,
        startDate: true,
        endDate: true,
        weeklyRent: true,
        bondAmount: true,
        advanceRent: true,
        endedAt: true,
        cancelledAt: true,
        createdAt: true,
        updatedAt: true,
        property: {
          select: {
            id: true,
            title: true,
            description: true,
            addressLine1: true,
            suburb: true,
            state: true,
            postcode: true,
            bedrooms: true,
            bathrooms: true,
            parkingSpaces: true,
            media: {
              orderBy: {
                createdAt: 'asc',
              },
              select: {
                id: true,
                url: true,
                isPrimary: true,
              },
            },
          },
        },
        leaseAgreement: {
          select: {
            id: true,
            status: true,
            agreementUrl: true,
            externalProvider: true,
            externalReference: true,
            sentAt: true,
            signedAt: true,
          },
        },
        agency: {
          select: {
            id: true,
            name: true,
            slug: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!tenancy) {
      throw new NotFoundException('Tenancy not found');
    }

    return tenancy;
  }
}
