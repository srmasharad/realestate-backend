import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import { AgencyStatus } from 'src/generated/prisma';

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { GetAgenciesQueryDto } from './dto/get-agencies-query.dto';
import { UpdateAgencyStatusDto } from './dto/update-agency-status.dto';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async getAgencies(query: GetAgenciesQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const where = query.status ? { status: query.status } : {};

    const [agencies, total] = await this.prisma.$transaction([
      this.prisma.agency.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          slug: true,
          email: true,
          phone: true,
          addressLine1: true,
          suburb: true,
          state: true,
          postcode: true,
          status: true,
          createdAt: true,
          members: {
            select: {
              id: true,
              role: true,
              isActive: true,
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
        },
      }),
      this.prisma.agency.count({ where }),
    ]);

    return {
      items: agencies,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateAgencyStatus(agencyId: string, dto: UpdateAgencyStatusDto) {
    const agency = await this.prisma.agency.findUnique({
      where: { id: agencyId },
      select: {
        id: true,
        name: true,
        status: true,
        members: {
          where: { role: 'AGENCY_OWNER' },
          select: {
            user: {
              select: {
                fullName: true,
                email: true,
              },
            },
          },
          take: 1,
        },
      },
    });

    if (!agency) {
      throw new NotFoundException('Agency not found');
    }

    if (agency.status === dto.status) {
      throw new BadRequestException(`Agency is already ${dto.status.toLocaleLowerCase()}`);
    }

    const updatedAgency = await this.prisma.agency.update({
      where: { id: agencyId },
      data: { status: dto.status as AgencyStatus },
      select: {
        id: true,
        name: true,
        slug: true,
        email: true,
        status: true,
        updatedAt: true,
      },
    });

    const owner = agency?.members?.[0]?.user ?? null;

    if (owner) {
      try {
        if (dto.status === 'APPROVED') {
          await this.mailService.sendAgencyApprovedEmail(owner.email, owner.fullName, agency.name);
        }

        if (dto.status === 'REJECTED') {
          await this.mailService.sendAgencyRejectedEmail(owner.email, owner.fullName, agency.name);
        }

        if (dto.status === 'SUSPENDED') {
          await this.mailService.sendAgencySuspendedEmail(owner.email, owner.fullName, agency.name);
        }
      } catch (error) {
        console.error('Failed to send status email ', error);
      }
    }

    return {
      message: `Agency ${dto.status.toLocaleLowerCase()} successfully`,
      agency: updatedAgency,
    };
  }
}
