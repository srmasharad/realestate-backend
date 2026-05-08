import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';
import {
  PropertyMediaItem,
  UploadedImageFile,
} from 'src/common/types/uploaded-image-file.type';

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import {
  AgencyMemberRole,
  AgencyStatus,
  MediaVisibility,
  PropertyMediaType,
  UserRole,
} from '../../generated/prisma';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyPublishDto } from './dto/update-property-publish.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { UploadPropertyMediaDto } from './dto/upload-property-media.dto';

type PropertyAnalyticsProperty = {
  id: string;
  title: string;
  agencyId: string | null;
  createdById: string;
  assignedAgentMemberId: string | null;
  isPublished: boolean;
  isArchived: boolean;
  isLocked: boolean;
};

@Injectable()
export class PropertiesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  private async ensureCanManageProperty(currentUser: AuthenticatedUser, propertyId: string) {
    // Get Property
    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
      select: {
        id: true,
        agencyId: true,
        createdById: true,
        isArchived: true,
        isLocked: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (property.isArchived) {
      throw new BadRequestException('Archived properties cannot be managed');
    }

    // ADMIN can do everything
    if (currentUser.role === UserRole.ADMIN) {
      return property;
    }

    // Find user's agency membership
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
        agency: {
          status: AgencyStatus.APPROVED,
        },
      },
      select: {
        agencyId: true,
        role: true,
      },
    });

    // Validate ownership
    if (!membership || property.agencyId !== membership.agencyId) {
      throw new ForbiddenException('Your are not allowed to manage this property');
    }

    return property;
  }

  async create(createPropertyDto: CreatePropertyDto, currentUser: AuthenticatedUser) {
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
        id: true,
        role: true,
        agencyId: true,
        agency: {
          select: {
            status: true,
          },
        },
      },
    });

    if (currentUser.role !== UserRole.ADMIN) {
      if (!membership) {
        throw new ForbiddenException('You must belong to an agency to create property');
      }

      if (membership.agency.status !== AgencyStatus.APPROVED) {
        throw new ForbiddenException('Agency must be approved');
      }
    }

    const property = await this.prisma.property.create({
      data: {
        ...createPropertyDto,
        agencyId: membership?.agencyId,
        assignedAgentMemberId: membership?.role === AgencyMemberRole.AGENT ? membership.id : null,
        createdById: currentUser.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        listingType: true,
        propertyType: true,
        price: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        bedrooms: true,
        bathrooms: true,
        parkingSpaces: true,
        isPublished: true,
        createdById: true,
        agencyId: true,
        assignedAgentMemberId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return property;
  }

  async update(propertyId: string, dto: UpdatePropertyDto, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        isArchived: false,
      },
      select: {
        id: true,
        agencyId: true,
        assignedAgentMemberId: true,
        createdById: true,
        isPublished: true,
        isLocked: true,
        tenancies: {
          where: {
            status: 'ACTIVE',
          },
          select: {
            id: true,
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (!property.agencyId) {
      throw new BadRequestException('Property is not linked to an agency');
    }

    if (property.isLocked && currentUser.role !== UserRole.ADMIN) {
      throw new BadRequestException('Locked properties cannot be modified');
    }

    // ADMIN override
    if (currentUser.role !== UserRole.ADMIN) {
      const membership = await this.prisma.agencyMember.findFirst({
        where: {
          userId: currentUser.id,
          agencyId: property.agencyId,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
        },
      });

      if (!membership) {
        throw new ForbiddenException('You do not belong to this agency');
      }

      const canManage =
        membership.role === AgencyMemberRole.AGENCY_OWNER ||
        membership.role === AgencyMemberRole.AGENCY_ADMIN ||
        property.assignedAgentMemberId === membership.id ||
        property.createdById === currentUser.id;

      if (!canManage) {
        throw new ForbiddenException('You are not allowed to update this property');
      }
    }

    const activeTenancies = property.tenancies as Array<{ id: string }>;

    // Prevent critical edits during active tenancy
    if (activeTenancies.length > 0) {
      if (dto.price || dto.addressLine1 || dto.suburb || dto.state || dto.postcode) {
        throw new BadRequestException('Critical property details cannot be changed while tenancy is active');
      }
    }

    const updatedProperty = await this.prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        ...dto,
      },
      select: {
        id: true,
        title: true,
        description: true,
        listingType: true,
        propertyType: true,
        price: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        bedrooms: true,
        bathrooms: true,
        parkingSpaces: true,
        isPublished: true,
        updatedAt: true,
      },
    });

    return {
      message: 'Property updated successfully',
      property: updatedProperty,
    };
  }

  async remove(propertyId: string, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        isArchived: false,
      },
      select: {
        id: true,
        agencyId: true,
        assignedAgentMemberId: true,
        createdById: true,
        tenancies: {
          where: {
            status: 'ACTIVE',
          },
          select: {
            id: true,
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (!property.agencyId) {
      throw new BadRequestException('Property is not linked to an agency');
    }

    if (currentUser.role !== UserRole.ADMIN) {
      const membership = await this.prisma.agencyMember.findFirst({
        where: {
          userId: currentUser.id,
          agencyId: property.agencyId,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
        },
      });

      if (!membership) {
        throw new ForbiddenException('You do not belong to this agency');
      }

      const canManage =
        membership.role === AgencyMemberRole.AGENCY_OWNER ||
        membership.role === AgencyMemberRole.AGENCY_ADMIN ||
        property.assignedAgentMemberId === membership.id ||
        property.createdById === currentUser.id;

      if (!canManage) {
        throw new ForbiddenException('You are not allowed to archive this property');
      }
    }

    const activeTenancies = property.tenancies as Array<{ id: string }>;

    if (activeTenancies.length > 0) {
      throw new BadRequestException('Property cannot be archived while it has an active tenancy');
    }

    await this.prisma.property.update({
      where: {
        id: property.id,
      },
      data: {
        isArchived: true,
        isPublished: false,
        deletedAt: new Date(),
      },
    });

    return;
  }

  async findPublicProperties(query: PaginationQueryDto): Promise<
    PaginatedResponse<{
      id: string;
      title: string;
      description: string;
      listingType: string;
      propertyType: string;
      price: unknown;
      suburb: string;
      state: string;
      postcode: string;
      bedrooms: number | null;
      bathrooms: number | null;
      parkingSpaces: number | null;
      createdAt: Date;
      primaryImage: {
        id: string;
        url: string;
        isPrimary: boolean;
      } | null;
    }>
  > {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const sortBy = query.sortBy ?? 'createdAt';
    const sortOrder = query.sortOrder ?? 'desc';

    const skip = (page - 1) * limit;

    const where = search
      ? {
          isPublished: true,
          isArchived: false,
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              addressLine1: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              suburb: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              state: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              postcode: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
          ],
        }
      : {
          isPublished: true,
          isArchived: false,
        };

    const [properties, total] = await this.prisma.$transaction([
      this.prisma.property.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          title: true,
          description: true,
          listingType: true,
          propertyType: true,
          price: true,
          addressLine1: true,
          suburb: true,
          state: true,
          postcode: true,
          bedrooms: true,
          bathrooms: true,
          parkingSpaces: true,
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
          createdAt: true,
        },
      }),
      this.prisma.property.count({ where }),
    ]);

    return {
      items: properties.map((property) => ({
        id: property.id,
        title: property.title,
        description: property.description,
        listingType: property.listingType,
        propertyType: property.propertyType,
        price: property.price,
        suburb: property.suburb,
        state: property.state,
        postcode: property.postcode,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        parkingSpaces: property.parkingSpaces,
        createdAt: property.createdAt,
        primaryImage: property.media[0] ?? null,
      })),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findPublicPropertyById(id: string) {
    const property = await this.prisma.property.findFirst({
      where: {
        id,
        isPublished: true,
        isArchived: false,
      },
      select: {
        id: true,
        title: true,
        description: true,
        listingType: true,
        propertyType: true,
        price: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        bedrooms: true,
        bathrooms: true,
        parkingSpaces: true,
        isPublished: true,
        createdAt: true,
        media: {
          where: {
            visibility: MediaVisibility.PUBLIC,
          },
          select: {
            id: true,
            url: true,
            isPrimary: true,
            sortOrder: true,
            createdAt: true,
          },
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    return property;
  }

  async uploadMedia(
    propertyId: string,
    files: UploadedImageFile[],
    dto: UploadPropertyMediaDto,
    currentUser: AuthenticatedUser,
  ) {
    await this.ensureCanManageProperty(currentUser, propertyId);

    if (!files || files.length === 0) {
      throw new BadRequestException('At least one image file is required');
    }

    const existingPrimary = await this.prisma.propertyMedia.findFirst({
      where: {
        propertyId,
        isPrimary: true,
      },
      select: { id: true },
    });

    const lastMedia = await this.prisma.propertyMedia.findFirst({
      where: { propertyId },
      orderBy: { sortOrder: 'desc' },
      select: { sortOrder: true },
    });

    let nextSortOrder = dto.sortOrderStart ?? (lastMedia ? lastMedia.sortOrder + 1 : 0);

    const uploadedMedia: PropertyMediaItem[] = [];

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];

      const uploadedImage = await this.cloudinaryService.uploadPublicImage(file.buffer, 'realestate/properties/images');

      const media = await this.prisma.propertyMedia.create({
        data: {
          propertyId,
          mediaType: PropertyMediaType.IMAGE,
          visibility: MediaVisibility.PUBLIC,
          url: uploadedImage.url,
          publicId: uploadedImage.publicId,
          isPrimary: existingPrimary === null && index === 0,
          sortOrder: nextSortOrder,
        },

        select: {
          id: true,
          propertyId: true,
          mediaType: true,
          visibility: true,
          url: true,
          publicId: true,
          isPrimary: true,
          sortOrder: true,
          createdAt: true,
        },
      });

      uploadedMedia.push(media);
      nextSortOrder += 1;
    }

    return {
      propertyId,
      uploadedCount: uploadedMedia.length,
      items: uploadedMedia,
    };
  }

  async setPrimaryImage(propertyId: string, mediaId: string, currentUser: AuthenticatedUser) {
    await this.ensureCanManageProperty(currentUser, propertyId);

    const media = await this.prisma.propertyMedia.findFirst({
      where: {
        id: mediaId,
        propertyId,
      },
    });

    if (!media) {
      throw new NotFoundException('Media not found for this property');
    }

    await this.prisma.propertyMedia.updateMany({
      where: {
        propertyId,
        isPrimary: true,
      },
      data: {
        isPrimary: false,
      },
    });

    const updated = await this.prisma.propertyMedia.update({
      where: { id: mediaId },
      data: {
        isPrimary: true,
      },
    });

    return {
      message: 'Primary image updated',
      media: updated,
    };
  }

  async deleteMedia(propertyId: string, mediaId: string, currentUser: AuthenticatedUser) {
    await this.ensureCanManageProperty(currentUser, propertyId);

    const media = await this.prisma.propertyMedia.findFirst({
      where: {
        id: mediaId,
        propertyId,
      },
    });

    if (!media) {
      throw new NotFoundException('Media not found');
    }

    // delete from cloudinary
    await this.cloudinaryService.deleteImage(media.publicId);

    // delete from DB
    await this.prisma.propertyMedia.delete({
      where: { id: mediaId },
    });

    const remainingMedia = await this.prisma.propertyMedia.findMany({
      where: { propertyId },
      orderBy: { sortOrder: 'asc' },
    });

    if (remainingMedia.length > 0) {
      await this.prisma.propertyMedia.update({
        where: { id: remainingMedia[0].id },
        data: { isPrimary: true },
      });
    }

    return {
      message: 'Media deleted successfully',
    };
  }

  async getApplicationsForProperty(propertyId: string, currentUser: AuthenticatedUser) {
    await this.ensureCanManageProperty(currentUser, propertyId);

    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
      select: {
        id: true,
        title: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const applications = await this.prisma.application.findMany({
      where: {
        propertyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        status: true,
        message: true,
        createdAt: true,
        applicant: {
          select: {
            id: true,
            email: true,
            fullName: true,
            phone: true,
            profile: {
              select: {
                fullName: true,
                phone: true,
                suburb: true,
                state: true,
                employmentStatus: true,
                monthlyIncome: true,
                householdSize: true,
              },
            },
          },
        },
      },
    });

    return {
      property,
      applications,
    };
  }

  async updatePublishStatus(propertyId: string, dto: UpdatePropertyPublishDto, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        propertyType: true,
        listingType: true,
        price: true,
        bedrooms: true,
        bathrooms: true,
        parkingSpaces: true,
        isPublished: true,
        isArchived: true,
        isLocked: true,
        agencyId: true,
        assignedAgentMemberId: true,
        createdById: true,
        media: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (property.isArchived) {
      throw new BadRequestException('Archived properties cannot be published');
    }

    // permission check
    if (currentUser.role !== UserRole.ADMIN) {
      const membership = await this.prisma.agencyMember.findFirst({
        where: {
          userId: currentUser.id,
          agencyId: property.agencyId as string,
          isActive: true,
        },

        select: {
          id: true,
          role: true,
        },
      });

      if (!membership) {
        throw new ForbiddenException('You do not belong to this agency');
      }

      const canManage =
        membership.role === AgencyMemberRole.AGENCY_OWNER ||
        membership.role === AgencyMemberRole.AGENCY_ADMIN ||
        property.assignedAgentMemberId === membership.id ||
        property.createdById === currentUser.id;

      if (!canManage) {
        throw new ForbiddenException('You are not allowed to manage this property');
      }
    }

    const mediaItems = property.media as Array<{ id: string }>;

    // only validate when publishing
    if (dto.isPublished) {
      if (
        !property.title ||
        !property.description ||
        !property.addressLine1 ||
        !property.suburb ||
        !property.state ||
        !property.postcode ||
        !property.propertyType ||
        !property.listingType ||
        !property.price
      ) {
        throw new BadRequestException('Property is missing required fields for publishing');
      }

      if (mediaItems.length === 0) {
        throw new BadRequestException('Property must have at least one image before publishing');
      }
    }

    const updatedProperty = await this.prisma.property.update({
      where: {
        id: propertyId,
      },

      data: {
        isPublished: dto.isPublished,
      },

      select: {
        id: true,
        title: true,
        isPublished: true,
        updatedAt: true,
      },
    });

    return {
      message: dto.isPublished ? 'Property published successfully' : 'Property unpublished successfully',

      property: updatedProperty,
    };
  }

  async restoreProperty(propertyId: string, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        createdById: currentUser.id,
      },
      select: {
        id: true,
        title: true,
        isArchived: true,
        isPublished: true,
        isLocked: true,
        updatedAt: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (!property.isArchived) {
      throw new BadRequestException('Property is not archived');
    }

    const restoredProperty = await this.prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        isArchived: false,
      },
      select: {
        id: true,
        title: true,
        isArchived: true,
        isPublished: true,
        isLocked: true,
        updatedAt: true,
      },
    });

    return {
      message: 'Property restored successfully',
      property: restoredProperty,
    };
  }

  async getManagementDetail(propertyId: string, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        listingType: true,
        propertyType: true,
        price: true,
        addressLine1: true,
        suburb: true,
        state: true,
        postcode: true,
        bedrooms: true,
        bathrooms: true,
        parkingSpaces: true,
        isPublished: true,
        isArchived: true,
        isLocked: true,
        createdAt: true,
        updatedAt: true,
        agencyId: true,
        createdById: true,
        assignedAgentMemberId: true,

        media: {
          orderBy: {
            sortOrder: 'asc',
          },
          select: {
            id: true,
            url: true,
            isPrimary: true,
            visibility: true,
            sortOrder: true,
            createdAt: true,
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

        assignedAgentMember: {
          select: {
            id: true,
            role: true,
            user: {
              select: {
                id: true,
                fullName: true,
                email: true,
                phone: true,
              },
            },
          },
        },

        createdBy: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },

        application: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
          select: {
            id: true,
            status: true,
            createdAt: true,
            applicant: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },

        offers: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
          select: {
            id: true,
            status: true,
            weeklyRent: true,
            bondAmount: true,
            advanceRent: true,
            createdAt: true,
            applicant: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },

        leaseAgreements: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
          select: {
            id: true,
            status: true,
            sentAt: true,
            signedAt: true,
            cancelledAt: true,
            createdAt: true,
          },
        },

        tenancies: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
          select: {
            id: true,
            status: true,
            startDate: true,
            endDate: true,
            createdAt: true,
            tenant: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        },

        paymentRequests: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5,
          select: {
            id: true,
            status: true,
            totalAmount: true,
            bondAmount: true,
            advanceRent: true,
            paidAt: true,
            createdAt: true,
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (!property.agencyId) {
      throw new BadRequestException('Property is not linked to an agency');
    }

    if (currentUser.role !== UserRole.ADMIN) {
      const membership = await this.prisma.agencyMember.findFirst({
        where: {
          userId: currentUser.id,
          agencyId: property.agencyId,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
        },
      });

      if (!membership) {
        throw new ForbiddenException('You do not belong to this agency');
      }

      const canManage =
        membership.role === AgencyMemberRole.AGENCY_OWNER ||
        membership.role === AgencyMemberRole.AGENCY_ADMIN ||
        property.assignedAgentMemberId === membership.id ||
        property.createdById === currentUser.id;

      if (!canManage) {
        throw new ForbiddenException('You are not allowed to view this property management detail');
      }
    }

    const [
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications,

      totalOffers,
      pendingOffers,
      acceptedOffers,
      declinedOffers,

      totalLeaseAgreements,
      sentLeaseAgreements,
      signedLeaseAgreements,
      cancelledLeaseAgreements,

      totalTenancies,
      activeTenancies,

      totalPayments,
      pendingPayments,
      paidPayments,
      paidAmount,
    ] = await this.prisma.$transaction([
      this.prisma.application.count({
        where: { propertyId },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'APPROVED' },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'REJECTED' },
      }),

      this.prisma.offer.count({
        where: { propertyId },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'ACCEPTED' },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'DECLINED' },
      }),

      this.prisma.leaseAgreement.count({
        where: { propertyId },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'SENT' },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'SIGNED' },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'CANCELLED' },
      }),

      this.prisma.tenancy.count({
        where: { propertyId },
      }),
      this.prisma.tenancy.count({
        where: { propertyId, status: 'ACTIVE' },
      }),

      this.prisma.paymentRequest.count({
        where: { propertyId },
      }),
      this.prisma.paymentRequest.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.paymentRequest.count({
        where: { propertyId, status: 'PAID' },
      }),
      this.prisma.paymentRequest.aggregate({
        where: {
          propertyId,
          status: 'PAID',
        },
        _sum: {
          totalAmount: true,
        },
      }),
    ]);

    return {
      property,
      summary: {
        applications: {
          total: totalApplications,
          pending: pendingApplications,
          approved: approvedApplications,
          rejected: rejectedApplications,
        },
        offers: {
          total: totalOffers,
          pending: pendingOffers,
          accepted: acceptedOffers,
          declined: declinedOffers,
        },
        leaseAgreements: {
          total: totalLeaseAgreements,
          sent: sentLeaseAgreements,
          signed: signedLeaseAgreements,
          cancelled: cancelledLeaseAgreements,
        },
        tenancies: {
          total: totalTenancies,
          active: activeTenancies,
        },
        payments: {
          total: totalPayments,
          pending: pendingPayments,
          paid: paidPayments,
          totalPaidAmount: paidAmount._sum.totalAmount ?? 0,
        },
      },
    };
  }

  async getPropertyAnalytics(propertyId: string, currentUser: AuthenticatedUser) {
    const property: PropertyAnalyticsProperty | null = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
      },
      select: {
        id: true,
        title: true,
        agencyId: true,
        createdById: true,
        assignedAgentMemberId: true,
        isPublished: true,
        isArchived: true,
        isLocked: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (!property.agencyId) {
      throw new BadRequestException('Property is not linked to an agency');
    }

    if (currentUser.role !== UserRole.ADMIN) {
      const membership = await this.prisma.agencyMember.findFirst({
        where: {
          userId: currentUser.id,
          agencyId: property.agencyId,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
        },
      });

      if (!membership) {
        throw new ForbiddenException('You do not belong to this agency');
      }

      const canManage =
        membership.role === AgencyMemberRole.AGENCY_OWNER ||
        membership.role === AgencyMemberRole.AGENCY_ADMIN ||
        property.assignedAgentMemberId === membership.id ||
        property.createdById === currentUser.id;

      if (!canManage) {
        throw new ForbiddenException('You are not allowed to view this property analytics');
      }
    }

    const [
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications,

      totalOffers,
      pendingOffers,
      acceptedOffers,
      declinedOffers,

      totalLeaseAgreements,
      draftLeaseAgreements,
      sentLeaseAgreements,
      signedLeaseAgreements,
      cancelledLeaseAgreements,

      totalTenancies,
      activeTenancies,
      endedTenancies,
      cancelledTenancies,

      totalPayments,
      pendingPayments,
      paidPayments,
      cancelledPayments,
      paidAmount,
      pendingAmount,
    ] = await this.prisma.$transaction([
      this.prisma.application.count({
        where: { propertyId },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'APPROVED' },
      }),
      this.prisma.application.count({
        where: { propertyId, status: 'REJECTED' },
      }),

      this.prisma.offer.count({
        where: { propertyId },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'ACCEPTED' },
      }),
      this.prisma.offer.count({
        where: { propertyId, status: 'DECLINED' },
      }),

      this.prisma.leaseAgreement.count({
        where: { propertyId },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'DRAFT' },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'SENT' },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'SIGNED' },
      }),
      this.prisma.leaseAgreement.count({
        where: { propertyId, status: 'CANCELLED' },
      }),

      this.prisma.tenancy.count({
        where: { propertyId },
      }),
      this.prisma.tenancy.count({
        where: { propertyId, status: 'ACTIVE' },
      }),
      this.prisma.tenancy.count({
        where: { propertyId, status: 'ENDED' },
      }),
      this.prisma.tenancy.count({
        where: { propertyId, status: 'CANCELLED' },
      }),

      this.prisma.paymentRequest.count({
        where: { propertyId },
      }),
      this.prisma.paymentRequest.count({
        where: { propertyId, status: 'PENDING' },
      }),
      this.prisma.paymentRequest.count({
        where: { propertyId, status: 'PAID' },
      }),
      this.prisma.paymentRequest.count({
        where: { propertyId, status: 'CANCELLED' },
      }),
      this.prisma.paymentRequest.aggregate({
        where: {
          propertyId,
          status: 'PAID',
        },
        _sum: {
          totalAmount: true,
        },
      }),
      this.prisma.paymentRequest.aggregate({
        where: {
          propertyId,
          status: 'PENDING',
        },
        _sum: {
          totalAmount: true,
        },
      }),
    ]);

    return {
      property: {
        id: property.id,
        title: property.title,
        isPublished: property.isPublished,
        isArchived: property.isArchived,
        isLocked: property.isLocked,
      },

      applications: {
        total: totalApplications,
        pending: pendingApplications,
        approved: approvedApplications,
        rejected: rejectedApplications,
      },

      offers: {
        total: totalOffers,
        pending: pendingOffers,
        accepted: acceptedOffers,
        declined: declinedOffers,
      },

      leaseAgreements: {
        total: totalLeaseAgreements,
        draft: draftLeaseAgreements,
        sent: sentLeaseAgreements,
        signed: signedLeaseAgreements,
        cancelled: cancelledLeaseAgreements,
      },

      tenancies: {
        total: totalTenancies,
        active: activeTenancies,
        ended: endedTenancies,
        cancelled: cancelledTenancies,
      },

      payments: {
        total: totalPayments,
        pending: pendingPayments,
        paid: paidPayments,
        cancelled: cancelledPayments,
        totalPaidAmount: paidAmount._sum.totalAmount ?? 0,
        totalPendingAmount: pendingAmount._sum.totalAmount ?? 0,
      },
    };
  }
}
