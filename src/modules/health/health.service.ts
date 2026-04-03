import { PrismaService } from 'src/database/prisma.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  async check() {
    await this.prisma.$queryRaw`SELECT 1`;

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV ?? 'development',
      database: 'connected',
    };
  }
}
