import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';
import { PropertyMediaItem, UploadedImageFile } from 'src/common/types/uploaded-image-file.type';

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import {
  ListingType as PrismaListingType,
  MediaVisibility,
  PropertyMediaType,
  PropertyType as PrismaPropertyType,
} from '../../generated/prisma';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UploadPropertyMediaDto } from './dto/upload-property-media.dto';

@Injectable()
export class PropertiesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createPropertyDto: CreatePropertyDto, currentUser: AuthenticatedUser) {
    const property = await this.prisma.property.create({
      data: {
        title: createPropertyDto.title,
        description: createPropertyDto.description,
        listingType: createPropertyDto.listingType as PrismaListingType,
        propertyType: createPropertyDto.propertyType as PrismaPropertyType,
        price: createPropertyDto.price,
        addressLine1: createPropertyDto.addressLine1,
        suburb: createPropertyDto.suburb,
        state: createPropertyDto.state,
        postcode: createPropertyDto.postcode,
        bedrooms: createPropertyDto.bedrooms,
        bathrooms: createPropertyDto.bathrooms,
        parkingSpaces: createPropertyDto.parkingSpaces,
        isPublished: createPropertyDto.isPublished ?? false,
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
        createdAt: true,
      },
    });

    return property;
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

  async uploadMedia(propertyId: string, files: UploadedImageFile[], dto: UploadPropertyMediaDto) {
    if (!files || files.length === 0) {
      throw new BadRequestException('At least one image file is required');
    }

    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
      select: { id: true, createdById: true },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
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

  async setPrimaryImage(propertyId: string, mediaId: string) {
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

  async deleteMedia(propertyId: string, mediaId: string) {
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

  async getApplicationsForProperty(propertyId: string) {
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
}
