import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';

import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import { ListingType as PrismaListingType, PropertyType as PrismaPropertyType } from '../../generated/prisma';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

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
      : {};

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
          createdAt: true,
        },
      }),
      this.prisma.property.count({ where }),
    ]);

    return {
      items: properties,
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
        createdAt: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    return property;
  }
}
