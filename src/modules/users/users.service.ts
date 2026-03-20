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

  async findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
