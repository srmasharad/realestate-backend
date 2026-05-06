import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
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

  async getAllLeaseAgreements(query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            {
              applicant: {
                fullName: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              applicant: {
                email: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              property: {
                title: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              property: {
                agency: {
                  name: {
                    contains: search,
                    mode: 'insensitive' as const,
                  },
                },
              },
            },
          ],
        }
      : {};

    const [items, total] = await this.prisma.$transaction([
      this.prisma.leaseAgreement.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
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
          applicant: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phone: true,
            },
          },
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
              postcode: true,
              agency: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                },
              },
            },
          },
          sentBy: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          signedBy: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      }),

      this.prisma.leaseAgreement.count({ where }),
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

  async getAllTenancies(query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            {
              tenant: {
                fullName: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              tenant: {
                email: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              property: {
                title: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              property: {
                suburb: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
            {
              agency: {
                name: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
            },
          ],
        }
      : {};

    const [items, total] = await this.prisma.$transaction([
      this.prisma.tenancy.findMany({
        where,
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
          tenant: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phone: true,
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
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
              postcode: true,
              assignedAgentMember: {
                select: {
                  id: true,
                  role: true,
                  user: {
                    select: {
                      id: true,
                      fullName: true,
                      email: true,
                    },
                  },
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
        },
      }),

      this.prisma.tenancy.count({ where }),
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

  async getTenancyDetail(tenancyId: string) {
    const tenancy = await this.prisma.tenancy.findUnique({
      where: {
        id: tenancyId,
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
        tenant: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            isActive: true,
            isEmailVerified: true,
          },
        },
        agency: {
          select: {
            id: true,
            name: true,
            slug: true,
            email: true,
            phone: true,
            status: true,
          },
        },
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
            isPublished: true,
            isLocked: true,
            assignedAgentMember: {
              select: {
                id: true,
                role: true,
                user: {
                  select: {
                    id: true,
                    fullName: true,
                    email: true,
                  },
                },
              },
            },
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
            cancelledAt: true,
          },
        },
      },
    });

    if (!tenancy) {
      throw new NotFoundException('Tenancy not found');
    }

    return tenancy;
  }

  async getDashboardSummary() {
    const [
      totalUsers,
      activeUsers,
      totalAgencies,
      pendingAgencies,
      approvedAgencies,
      suspendedAgencies,
      totalProperties,
      publishedProperties,
      lockedProperties,
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications,
      totalOffers,
      pendingOffers,
      acceptedOffers,
      totalPaymentRequests,
      pendingPayments,
      paidPayments,
      totalLeaseAgreements,
      signedLeaseAgreements,
      totalTenancies,
      activeTenancies,
      paidAmountResult,
      pendingAmountResult,
    ] = await this.prisma.$transaction([
      this.prisma.user.count(),
      this.prisma.user.count({
        where: { isActive: true },
      }),

      this.prisma.agency.count(),
      this.prisma.agency.count({
        where: { status: 'PENDING' },
      }),
      this.prisma.agency.count({
        where: { status: 'APPROVED' },
      }),
      this.prisma.agency.count({
        where: { status: 'SUSPENDED' },
      }),

      this.prisma.property.count(),
      this.prisma.property.count({
        where: { isPublished: true },
      }),
      this.prisma.property.count({
        where: { isLocked: true },
      }),

      this.prisma.application.count(),
      this.prisma.application.count({
        where: { status: 'PENDING' },
      }),
      this.prisma.application.count({
        where: { status: 'APPROVED' },
      }),
      this.prisma.application.count({
        where: { status: 'REJECTED' },
      }),

      this.prisma.offer.count(),
      this.prisma.offer.count({
        where: { status: 'PENDING' },
      }),
      this.prisma.offer.count({
        where: { status: 'ACCEPTED' },
      }),

      this.prisma.paymentRequest.count(),
      this.prisma.paymentRequest.count({
        where: { status: 'PENDING' },
      }),
      this.prisma.paymentRequest.count({
        where: { status: 'PAID' },
      }),

      this.prisma.leaseAgreement.count(),
      this.prisma.leaseAgreement.count({
        where: { status: 'SIGNED' },
      }),

      this.prisma.tenancy.count(),
      this.prisma.tenancy.count({
        where: { status: 'ACTIVE' },
      }),

      this.prisma.paymentRequest.aggregate({
        where: { status: 'PAID' },
        _sum: {
          totalAmount: true,
        },
      }),

      this.prisma.paymentRequest.aggregate({
        where: { status: 'PENDING' },
        _sum: {
          totalAmount: true,
        },
      }),
    ]);

    return {
      users: {
        total: totalUsers,
        active: activeUsers,
      },
      agencies: {
        total: totalAgencies,
        pending: pendingAgencies,
        approved: approvedAgencies,
        suspended: suspendedAgencies,
      },
      properties: {
        total: totalProperties,
        published: publishedProperties,
        locked: lockedProperties,
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
      },
      payments: {
        total: totalPaymentRequests,
        pending: pendingPayments,
        paid: paidPayments,
        totalPaidAmount: paidAmountResult._sum.totalAmount ?? 0,
        totalPendingAmount: pendingAmountResult._sum.totalAmount ?? 0,
      },
      leaseAgreements: {
        total: totalLeaseAgreements,
        signed: signedLeaseAgreements,
      },
      tenancies: {
        total: totalTenancies,
        active: activeTenancies,
      },
    };
  }

  async getAgencyPerformanceSummary(query: PaginationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = search
      ? {
          OR: [
            {
              name: {
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
              suburb: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
          ],
        }
      : {};

    const [agencies, total] = await this.prisma.$transaction([
      this.prisma.agency.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          slug: true,
          email: true,
          phone: true,
          suburb: true,
          state: true,
          status: true,
          createdAt: true,
        },
      }),

      this.prisma.agency.count({ where }),
    ]);

    const items = await Promise.all(
      agencies.map(async (agency) => {
        const [
          totalMembers,
          totalProperties,
          publishedProperties,
          totalApplications,
          approvedApplications,
          totalOffers,
          acceptedOffers,
          signedLeaseAgreements,
          paidPayments,
          paidAmount,
          totalTenancies,
          activeTenancies,
        ] = await Promise.all([
          this.prisma.agencyMember.count({
            where: { agencyId: agency.id },
          }),

          this.prisma.property.count({
            where: { agencyId: agency.id },
          }),

          this.prisma.property.count({
            where: {
              agencyId: agency.id,
              isPublished: true,
            },
          }),

          this.prisma.application.count({
            where: {
              property: {
                agencyId: agency.id,
              },
            },
          }),

          this.prisma.application.count({
            where: {
              property: {
                agencyId: agency.id,
              },
              status: 'APPROVED',
            },
          }),

          this.prisma.offer.count({
            where: {
              property: {
                agencyId: agency.id,
              },
            },
          }),

          this.prisma.offer.count({
            where: {
              property: {
                agencyId: agency.id,
              },
              status: 'ACCEPTED',
            },
          }),

          this.prisma.leaseAgreement.count({
            where: {
              property: {
                agencyId: agency.id,
              },
              status: 'SIGNED',
            },
          }),

          this.prisma.paymentRequest.count({
            where: {
              property: {
                agencyId: agency.id,
              },
              status: 'PAID',
            },
          }),

          this.prisma.paymentRequest.aggregate({
            where: {
              property: {
                agencyId: agency.id,
              },
              status: 'PAID',
            },
            _sum: {
              totalAmount: true,
            },
          }),

          this.prisma.tenancy.count({
            where: {
              agencyId: agency.id,
            },
          }),

          this.prisma.tenancy.count({
            where: {
              agencyId: agency.id,
              status: 'ACTIVE',
            },
          }),
        ]);

        return {
          id: agency.id,
          name: agency.name,
          slug: agency.slug,
          email: agency.email,
          phone: agency.phone,
          suburb: agency.suburb,
          state: agency.state,
          status: agency.status,
          createdAt: agency.createdAt,
          totalMembers,
          totalProperties,
          publishedProperties,
          totalApplications,
          approvedApplications,
          totalOffers,
          acceptedOffers,
          signedLeaseAgreements,
          paidPayments,
          totalPaidAmount: paidAmount._sum.totalAmount ?? 0,
          totalTenancies,
          activeTenancies,
        };
      }),
    );

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
}
