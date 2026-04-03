import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { PaginatedResponse } from 'src/common/types/paginated-response.type';
import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { fullName, email, phone, password } = createUserDto;

    return this.prisma.user.create({
      data: {
        fullName,
        email,
        phone,
        passwordHash: password ?? null,
      },
    });
  }

  async findAll(query: PaginationQueryDto): Promise<
    PaginatedResponse<{
      id: string;
      fullName: string;
      email: string;
      phone: string | null;
      role: string;
      isActive: boolean;
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
              fullName: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              email: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              phone: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
          ],
        }
      : {};

    const [users, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          [sortBy]: sortOrder,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      items: users,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
