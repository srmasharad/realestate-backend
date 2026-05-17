import * as bcrypt from 'bcrypt';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import { AgencyMemberRole, AgencyStatus, ApplicationStatus, OfferStatus, UserMediaType } from 'src/generated/prisma';

import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { UpdateApplicationStatusDto } from '../applications/dto/update-application-status.dto';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AddAgencyMemberDto } from './dto/add-agency-member.dto';
import { AssignAgentDto } from './dto/assign-agent.dto';
import { CreateAgencyOnboardingDto } from './dto/create-agency-onboarding.dto';
import { CreateOfferDto } from './dto/create-offer.dto';
import { SendLeaseAgreementDto } from './dto/send-lease-agreement.dto';

type ApplicationDecisionResult = {
  id: string;
  status: string;
  applicant: {
    email: string;
    fullName: string;
  };
  property: {
    id: string;
    title: string;
  };
};

type AutoRejectedApplicationEmailTarget = {
  applicant: {
    email: string;
    fullName: string;
  };
  property: {
    title: string;
  };
};

type PropertyWithAssignedAgent = {
  id: string;
  title: string;
  isLocked: boolean;
  assignedAgentMember: {
    user: {
      email: string;
      fullName: string;
    };
  } | null;
};

type CurrentAgencyMembership = {
  id: string;
  role: AgencyMemberRole;
  agencyId: string;
  agency: {
    id: string;
    name: string;
    status: AgencyStatus;
  };
};

type ApprovedApplicationForOffer = {
  id: string;
  propertyId: string;
  applicantId: string;
  status: ApplicationStatus;
  applicant: {
    email: string;
    fullName: string;
  };
  property: {
    id: string;
    title: string;
    isLocked: boolean;
  };
  offer: {
    id: string;
  } | null;
};

type CreatedOfferResult = {
  id: string;
  status: OfferStatus;
  message: string | null;
  expiresAt: Date | null;
  createdAt: Date;
  weeklyRent: unknown;
  bondAmount: unknown;
  advanceRent: unknown;
  leaseStartDate: Date;
  leaseEndDate: Date;
  leaseMonths: number;
  application: {
    id: string;
    status: ApplicationStatus;
  };
  property: {
    id: string;
    title: string;
  };
  applicant: {
    id: string;
    fullName: string;
    email: string;
  };
};

type ActivatedTenancyResult = {
  id: string;
  status: string;
  startDate: Date;
  endDate: Date;
  weeklyRent: unknown;
  bondAmount: unknown;
  advanceRent: unknown;
  createdAt: Date;
};

type AgencyApplicationForDecision = {
  id: string;
  status: ApplicationStatus;
  message: string | null;
  applicant: {
    email: string;
    fullName: string;
  };
  property: {
    id: string;
    title: string;
    agencyId: string | null;
    isArchived: boolean;
    isLocked: boolean;
  };
};

type PropertyForAgentRemoval = {
  id: string;
  title: string;
  isLocked: boolean;
  assignedAgentMemberId: string | null;
  assignedAgentMember: {
    user: {
      fullName: string;
      email: string;
    };
  } | null;
};

@Injectable()
export class AgencyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  private async getApprovedAgencyMembership(currentUser: AuthenticatedUser): Promise<CurrentAgencyMembership> {
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
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException('You are not part of any agency');
    }

    if (membership.agency.status !== AgencyStatus.APPROVED) {
      throw new ForbiddenException('Agency is not approved');
    }

    return membership;
  }

  private calculateLeaseEndDate(startDate: Date, leaseMonths: number) {
    const leaseEndDate = new Date(startDate);

    leaseEndDate.setMonth(leaseEndDate.getMonth() + leaseMonths);

    return leaseEndDate;
  }

  async createOnboarding(dto: CreateAgencyOnboardingDto) {
    const existingAgencyBySlug = await this.prisma.agency.findUnique({
      where: { slug: dto.agencySlug },
      select: { id: true },
    });

    if (existingAgencyBySlug) {
      throw new BadRequestException('Agency slug already in use');
    }

    const existingAgencyByEmail = await this.prisma.agency.findUnique({
      where: { email: dto.agencyEmail },
      select: { id: true },
    });

    if (existingAgencyByEmail) {
      throw new BadRequestException('Agency email already in use');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.contactEmail },
      select: { id: true },
    });

    if (existingUser) {
      throw new BadRequestException('Contact email already in use');
    }

    if (dto.contactPhone) {
      const existingPhone = await this.prisma.user.findUnique({
        where: { phone: dto.contactPhone },
        select: { id: true },
      });

      if (existingPhone) {
        throw new BadRequestException('Contact phone number already in use');
      }
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          fullName: dto.contactFullName,
          email: dto.contactEmail,
          phone: dto.contactPhone,
          passwordHash,
          isEmailVerified: false,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          role: true,
          isActive: true,
          isEmailVerified: true,
          createdAt: true,
        },
      });

      const agency = await tx.agency.create({
        data: {
          name: dto.agencyName,
          slug: dto.agencySlug,
          email: dto.agencyEmail,
          phone: dto.agencyPhone,
          addressLine1: dto.addressLine1,
          suburb: dto.suburb,
          state: dto.state,
          postcode: dto.postcode,
          status: AgencyStatus.PENDING,
        },
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
        },
      });

      const membership = await tx.agencyMember.create({
        data: {
          agencyId: agency.id,
          userId: user.id,
          role: AgencyMemberRole.AGENCY_OWNER,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });

      return {
        user,
        agency,
        membership,
      };
    });

    try {
      await this.mailService.sendAgencyOnboardingReceivedEmail(
        result.user.email,
        result.user.fullName,
        result.agency.name,
      );
    } catch (error) {
      console.error('Failed to send agency onboarding confirmation email', error);
    }

    try {
      await this.mailService.sendAdminAgencyOnboardingNotification(
        result.agency.name,
        result.user.fullName,
        result.user.email,
      );
    } catch (error) {
      console.error('Failed to send admin agency onboarding notification', error);
    }

    return {
      message: 'Agency onboarding submitted successfully. Your agency application is pending admin review.',
      ...result,
    };
  }

  async getMyAgencyContext(currentUser: AuthenticatedUser) {
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
        id: true,
        role: true,
        isActive: true,
        createdAt: true,
        agency: {
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
          },
        },
      },
    });

    if (!membership) {
      return {
        hasAgency: false,
        agency: null,
        membership: null,
      };
    }

    return {
      hasAgency: true,
      agency: membership.agency,
      membership: {
        id: membership.id,
        role: membership.role,
        isActive: membership.isActive,
        createdAt: membership.createdAt,
      },
    };
  }

  async addMember(currentUser: AuthenticatedUser, dto: AddAgencyMemberDto) {
    const currentMembership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
        role: {
          in: [AgencyMemberRole.AGENCY_OWNER, AgencyMemberRole.AGENCY_ADMIN],
        },
      },
      select: {
        id: true,
        role: true,
        agency: {
          select: {
            id: true,
            name: true,
            status: true,
          },
        },
      },
    });

    if (!currentMembership) {
      throw new ForbiddenException('You are not allowed to add agency members');
    }

    if (currentMembership.agency.status !== AgencyStatus.APPROVED) {
      throw new ForbiddenException('Agency must be approved before adding members');
    }

    if (dto.role === AgencyMemberRole.AGENCY_OWNER) {
      throw new BadRequestException('Cannot add another agency owner from this endpoint');
    }

    const existingUserByEmail = await this.prisma.user.findUnique({
      where: { email: dto.email },
      select: { id: true },
    });

    if (existingUserByEmail) {
      throw new BadRequestException('Email already exists');
    }

    if (dto.phone) {
      const existingUserByPhone = await this.prisma.user.findUnique({
        where: { phone: dto.phone },
        select: { id: true },
      });

      if (existingUserByPhone) {
        throw new BadRequestException('Phone number already exists');
      }
    }

    const temporaryPassword = `TempPass!${Math.random().toString(36).slice(2, 10)}`;

    const passwordHash = await bcrypt.hash(temporaryPassword, 10);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          fullName: dto.fullName,
          email: dto.email,
          phone: dto.phone,
          passwordHash,
          isEmailVerified: false,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          role: true,
          isActive: true,
          isEmailVerified: true,
          createdAt: true,
        },
      });

      const membership = await tx.agencyMember.create({
        data: {
          agencyId: currentMembership.agency.id,
          userId: user.id,
          role: dto.role,
          isActive: true,
        },
        select: {
          id: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
      });

      return {
        user,
        membership,
        agency: currentMembership.agency,
        temporaryPassword,
      };
    });

    try {
      await this.mailService.sendAgencyMemberAddedEmail(
        result.user.email,
        result.user.fullName,
        result.agency.name,
        result.membership.role,
        result.temporaryPassword,
      );
    } catch (error) {
      console.error('Failed to send agency member added email', error);
    }

    return {
      message: 'Agency member added successfully',
      user: result.user,
      membership: result.membership,
      agency: result.agency,
    };
  }

  async getAgencyMembers(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
        agencyId: true,
        role: true,
        agency: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException('You are not a part of any agency');
    }

    if (membership.agency.status !== AgencyStatus.APPROVED) {
      throw new ForbiddenException('Agency must be approved to view members');
    }

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = {
      agencyId: membership.agencyId,
      ...(search
        ? {
            user: {
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
            },
          }
        : {}),
    };

    const [members, total] = await this.prisma.$transaction([
      this.prisma.agencyMember.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          role: true,
          isActive: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phone: true,
              isActive: true,
              media: {
                where: {
                  mediaType: UserMediaType.PROFILE_IMAGE,
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
        },
      }),

      this.prisma.agencyMember.count({
        where,
      }),
    ]);

    return {
      items: members,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getAgencyProperties(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const where = {
      agencyId: membership.agencyId,
      isArchived: false,
      AND: [
        ...(isAgent
          ? [
              {
                OR: [
                  {
                    assignedAgentMemberId: membership.id,
                  },
                  {
                    createdById: currentUser.id,
                  },
                ],
              },
            ]
          : []),
        ...(search
          ? [
              {
                OR: [
                  {
                    title: {
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
              },
            ]
          : []),
      ],
    };

    const [properties, total] = await this.prisma.$transaction([
      this.prisma.property.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
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
          isArchived: true,
          isLocked: true,
          createdAt: true,
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
      }),

      this.prisma.property.count({ where }),
    ]);

    return {
      items: properties,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getAgencyApplications(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const where = {
      property: {
        agencyId: membership.agencyId,
        isArchived: false,
        ...(isAgent
          ? {
              OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
            }
          : {}),
      },
      ...(search
        ? {
            OR: [
              {
                message: {
                  contains: search,
                  mode: 'insensitive' as const,
                },
              },
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
            ],
          }
        : {}),
    };

    const [applications, total] = await this.prisma.$transaction([
      this.prisma.application.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
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
              suburb: true,
              state: true,
            },
          },
          applicant: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          offer: {
            select: {
              id: true,
              status: true,
              acceptedAt: true,
              declinedAt: true,

              paymentRequest: {
                select: {
                  id: true,
                  status: true,
                  paidAt: true,
                  totalAmount: true,
                },
              },

              leaseAgreement: {
                select: {
                  id: true,
                  status: true,
                  sentAt: true,
                  signedAt: true,
                  cancelledAt: true,

                  tenancy: {
                    select: {
                      id: true,
                      status: true,
                      startDate: true,
                      endDate: true,
                      endedAt: true,
                      cancelledAt: true,
                    },
                  },
                },
              },
            },
          },
        },
      }),

      this.prisma.application.count({ where }),
    ]);

    const items = applications.map((application) => {
      const offer = application.offer;

      const paymentRequest = offer?.paymentRequest ?? null;

      const leaseAgreement = offer?.leaseAgreement ?? null;

      const tenancy = leaseAgreement?.tenancy ?? null;

      let workflowStatus: string = application.status;

      if (tenancy?.status === 'ACTIVE') {
        workflowStatus = 'TENANCY_ACTIVE';
      } else if (tenancy?.status === 'ENDED') {
        workflowStatus = 'TENANCY_ENDED';
      } else if (tenancy?.status === 'CANCELLED') {
        workflowStatus = 'TENANCY_CANCELLED';
      } else if (leaseAgreement?.status === 'SIGNED') {
        workflowStatus = 'LEASE_SIGNED';
      } else if (leaseAgreement?.status === 'SENT') {
        workflowStatus = 'LEASE_SENT';
      } else if (paymentRequest?.status === 'PAID') {
        workflowStatus = 'PAYMENT_PAID';
      } else if (paymentRequest?.status === 'PENDING') {
        workflowStatus = 'PAYMENT_PENDING';
      } else if (offer?.status === 'ACCEPTED') {
        workflowStatus = 'OFFER_ACCEPTED';
      } else if (offer?.status === 'DECLINED') {
        workflowStatus = 'OFFER_DECLINED';
      } else if (offer?.status === 'PENDING') {
        workflowStatus = 'OFFER_PENDING';
      }

      return {
        ...application,
        workflowStatus,
      };
    });

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

  async updateAgencyApplicationStatus(
    currentUser: AuthenticatedUser,
    applicationId: string,
    dto: UpdateApplicationStatusDto,
  ) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const application: AgencyApplicationForDecision | null = await this.prisma.application.findFirst({
      where: {
        id: applicationId,
        property: {
          agencyId: membership.agencyId,
          isArchived: false,
          ...(isAgent
            ? {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              }
            : {}),
        },
      },
      select: {
        id: true,
        status: true,
        message: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            agencyId: true,
            isArchived: true,
            isLocked: true,
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found for this agency');
    }

    // Prevent modification after signed lease
    const signedLease = await this.prisma.leaseAgreement.findFirst({
      where: {
        offer: {
          applicationId,
        },
        status: 'SIGNED',
      },
      select: {
        id: true,
      },
    });

    if (signedLease) {
      throw new BadRequestException('Application cannot be modified after lease agreement is signed');
    }

    // Prevent modification after active tenancy
    const activeTenancy = await this.prisma.tenancy.findFirst({
      where: {
        leaseAgreement: {
          offer: {
            applicationId,
          },
        },
        status: 'ACTIVE',
      },
      select: {
        id: true,
      },
    });

    if (activeTenancy) {
      throw new BadRequestException('Application cannot be modified after tenancy activation');
    }

    // Prevent modification after payment completed

    const paidPayment = await this.prisma.paymentRequest.findFirst({
      where: {
        offer: {
          applicationId,
        },
        status: 'PAID',
      },
      select: {
        id: true,
      },
    });

    if (paidPayment) {
      throw new BadRequestException('Application cannot be modified after payment completion');
    }

    if (application.property.isArchived) {
      throw new BadRequestException('Archived property applications cannot be updated');
    }

    if (application.property.isLocked && dto.status === ApplicationStatus.APPROVED) {
      throw new BadRequestException('Cannot approve application for a locked property');
    }

    if (application.status === dto.status) {
      throw new BadRequestException(`Application is already ${dto.status}`);
    }

    if (application.status === 'REJECTED' && dto.status === 'REJECTED') {
      throw new BadRequestException('Application already rejected');
    }

    let updatedApplication: ApplicationDecisionResult;

    let autoRejectedApplications: AutoRejectedApplicationEmailTarget[] = [];

    if (dto.status === 'APPROVED') {
      updatedApplication = await this.prisma.$transaction(async (tx) => {
        const approved = await tx.application.update({
          where: {
            id: applicationId,
          },
          data: {
            status: 'APPROVED',
          },
          select: {
            id: true,
            status: true,
            applicant: {
              select: {
                email: true,
                fullName: true,
              },
            },
            property: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        });

        autoRejectedApplications = await tx.application.findMany({
          where: {
            propertyId: approved.property.id,
            NOT: {
              id: applicationId,
            },
            status: {
              not: 'REJECTED',
            },
          },
          select: {
            applicant: {
              select: {
                email: true,
                fullName: true,
              },
            },
            property: {
              select: {
                title: true,
              },
            },
          },
        });

        await tx.application.updateMany({
          where: {
            propertyId: approved.property.id,
            NOT: {
              id: applicationId,
            },
          },
          data: {
            status: 'REJECTED',
          },
        });

        return approved;
      });
    } else {
      updatedApplication = await this.prisma.application.update({
        where: {
          id: applicationId,
        },
        data: {
          status: 'REJECTED',
        },
        select: {
          id: true,
          status: true,
          property: {
            select: {
              id: true,
              title: true,
            },
          },
          applicant: {
            select: {
              fullName: true,
              email: true,
            },
          },
        },
      });
    }

    try {
      await this.mailService.sendApplicationStatusEmail(
        updatedApplication.applicant.email,
        updatedApplication.applicant.fullName,
        updatedApplication.property.title,
        dto.status,
      );
    } catch (error) {
      console.error('Failed to send application decision email', error);
    }

    if (autoRejectedApplications.length > 0) {
      for (const autoRejectedApplication of autoRejectedApplications) {
        try {
          await this.mailService.sendApplicationStatusEmail(
            autoRejectedApplication.applicant.email,
            autoRejectedApplication.applicant.fullName,
            autoRejectedApplication.property.title,
            'REJECTED',
          );
        } catch (error) {
          console.error('Failed to send auto-rejection email', error);
        }
      }
    }

    return {
      message: `Application ${dto.status.toLowerCase()} successfully`,
      application: updatedApplication,
    };
  }

  async assignAgentToProperty(currentUser: AuthenticatedUser, propertyId: string, dto: AssignAgentDto) {
    // Get current user's agency membership
    const membership = await this.getApprovedAgencyMembership(currentUser);

    if (!['AGENCY_OWNER', 'AGENCY_ADMIN'].includes(membership.role)) {
      throw new ForbiddenException('You are not allowed to assign agents');
    }

    // Check property belongs to agency
    const property: PropertyWithAssignedAgent | null = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        agencyId: membership.agencyId,
        isArchived: false,
        isLocked: false,
      },
      select: {
        id: true,
        title: true,
        isLocked: true,
        assignedAgentMember: {
          select: {
            user: {
              select: {
                email: true,
                fullName: true,
              },
            },
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found for your agency');
    }

    if (property.isLocked) {
      throw new BadRequestException('Cannot assign agent to a locked property');
    }

    // Validate target agency member
    const targetMember = await this.prisma.agencyMember.findFirst({
      where: {
        id: dto.agencyMemberId,
        agencyId: membership.agencyId,
        isActive: true,
        role: {
          in: [AgencyMemberRole.AGENT, AgencyMemberRole.AGENCY_ADMIN],
        },
      },
      select: {
        id: true,
        user: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },
    });

    if (!targetMember) {
      throw new BadRequestException('Invalid agency member');
    }

    if (property.assignedAgentMember?.user?.email === targetMember.user.email) {
      throw new BadRequestException('Agent is already assigned to this property');
    }

    // Assign agent
    const updatedProperty = await this.prisma.property.update({
      where: { id: propertyId },
      data: {
        assignedAgentMemberId: dto.agencyMemberId,
      },
      select: {
        id: true,
        title: true,
        assignedAgentMember: {
          select: {
            id: true,
            role: true,
            user: {
              select: {
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    try {
      await this.mailService.sendAgentAssignedToPropertyEmail(
        targetMember.user.email,
        targetMember.user.fullName,
        property.title,
        membership.agency.name,
      );
    } catch (error) {
      console.error('Failed to send agent assignment email', error);
    }

    const previousAssignedAgent = property.assignedAgentMember?.user ?? null;

    if (previousAssignedAgent && previousAssignedAgent.email !== targetMember.user.email) {
      try {
        await this.mailService.sendAgentRemovedFromPropertyEmail(
          previousAssignedAgent.email,
          previousAssignedAgent.fullName,
          property.title,
          membership.agency.name,
        );
      } catch (error) {
        console.error('Failed to send previous agent removal email', error);
      }
    }

    return {
      message: 'Agent assigned successfully',
      property: updatedProperty,
    };
  }

  async removeAssignedAgentFromProperty(currentUser: AuthenticatedUser, propertyId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    if (membership.role !== AgencyMemberRole.AGENCY_OWNER && membership.role !== AgencyMemberRole.AGENCY_ADMIN) {
      throw new ForbiddenException('You are not allowed to remove assigned agents');
    }

    const property: PropertyForAgentRemoval | null = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        agencyId: membership.agencyId,
        isArchived: false,
      },
      select: {
        id: true,
        title: true,
        isLocked: true,
        assignedAgentMemberId: true,
        assignedAgentMember: {
          select: {
            user: {
              select: {
                fullName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found for your agency');
    }

    if (property.isLocked) {
      throw new BadRequestException('Cannot remove agent from a locked property');
    }

    if (!property.assignedAgentMemberId) {
      throw new BadRequestException('No agent is assigned to this property');
    }

    const removedAgent =
      property.assignedAgentMember === null
        ? null
        : {
            fullName: property.assignedAgentMember.user.fullName,
            email: property.assignedAgentMember.user.email,
          };

    const updatedProperty = await this.prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        assignedAgentMemberId: null,
      },
      select: {
        id: true,
        title: true,
        assignedAgentMemberId: true,
      },
    });

    if (removedAgent) {
      try {
        await this.mailService.sendAgentRemovedFromPropertyEmail(
          removedAgent.email,
          removedAgent.fullName,
          property.title,
          membership.agency.name,
        );
      } catch (error) {
        console.error('Failed to send agent removal email', error);
      }
    }

    return {
      message: 'Assigned agent removed successfully',
      property: updatedProperty,
    };
  }

  async deactivateAgencyMember(currentUser: AuthenticatedUser, memberId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    // Only OWNER / ADMIN allowed
    if (membership.role !== AgencyMemberRole.AGENCY_OWNER && membership.role !== AgencyMemberRole.AGENCY_ADMIN) {
      throw new ForbiddenException('You are not allowed to deactivate members');
    }

    // Find target member
    const targetMember = await this.prisma.agencyMember.findFirst({
      where: {
        id: memberId,
        agencyId: membership.agencyId,
      },
      select: {
        id: true,
        role: true,
        isActive: true,
        userId: true,
        user: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },
    });

    if (!targetMember) {
      throw new NotFoundException('Agency member not found');
    }

    // Prevent self-deactivation
    if (targetMember.userId === currentUser.id) {
      throw new BadRequestException('You cannot deactivate yourself');
    }

    // Prevent deactivating owner
    if (targetMember.role === AgencyMemberRole.AGENCY_OWNER) {
      throw new BadRequestException('Cannot deactivate agency owner');
    }

    if (!targetMember.isActive) {
      throw new BadRequestException('Member is already inactive');
    }

    // Transaction
    const result = await this.prisma.$transaction(async (tx) => {
      // Deactivate member
      const updatedMember = await tx.agencyMember.update({
        where: { id: memberId },
        data: {
          isActive: false,
        },
        select: {
          id: true,
          role: true,
          isActive: true,
          user: {
            select: {
              fullName: true,
              email: true,
            },
          },
        },
      });

      // Remove from all assigned properties
      await tx.property.updateMany({
        where: {
          assignedAgentMemberId: memberId,
          isArchived: false,
          isLocked: false,
        },
        data: {
          assignedAgentMemberId: null,
        },
      });

      return updatedMember;
    });

    // Email notification
    try {
      await this.mailService.sendAgencyMemberDeactivatedEmail(
        result.user.email,
        result.user.fullName,
        membership.agency.name,
      );
    } catch (error) {
      console.error('Failed to send member deactivation email', error);
    }

    return {
      message: 'Agency member deactivated successfully',
      member: result,
    };
  }

  async createOfferForApplication(currentUser: AuthenticatedUser, applicationId: string, dto: CreateOfferDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const application: ApprovedApplicationForOffer | null = await this.prisma.application.findFirst({
      where: {
        id: applicationId,
        status: ApplicationStatus.APPROVED,
        property: {
          agencyId: membership.agencyId,
          isLocked: false,
          isArchived: false,
          ...(isAgent
            ? {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              }
            : {}),
        },
      },
      select: {
        id: true,
        propertyId: true,
        applicantId: true,
        status: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
            isLocked: true,
          },
        },
        offer: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Approved application not found for this agency');
    }

    if (application.property.isLocked) {
      throw new BadRequestException('Property is already locked');
    }

    if (application.offer) {
      throw new BadRequestException('Offer already exists for this application');
    }

    const leaseStartDate = new Date(dto.leaseStartDate);
    const expiresAt = new Date(dto.expiresAt);

    if (expiresAt >= leaseStartDate) {
      throw new BadRequestException('Offer expiry date must be before the lease start date');
    }

    const leaseEndDate = this.calculateLeaseEndDate(leaseStartDate, dto.leaseMonths);

    const weeklyRent = dto.weeklyRent;
    const bondAmount = weeklyRent * 4;
    const advanceRent = weeklyRent * 2;

    const offer: CreatedOfferResult = await this.prisma.offer.create({
      data: {
        applicationId: application.id,
        propertyId: application.propertyId,
        applicantId: application.applicantId,
        status: OfferStatus.PENDING,
        weeklyRent,
        bondAmount,
        advanceRent,
        leaseStartDate,
        leaseEndDate,
        leaseMonths: dto.leaseMonths,
        message: dto.message,
        expiresAt,
      },
      select: {
        id: true,
        status: true,
        message: true,
        expiresAt: true,
        createdAt: true,
        weeklyRent: true,
        bondAmount: true,
        advanceRent: true,
        leaseStartDate: true,
        leaseEndDate: true,
        leaseMonths: true,
        application: {
          select: {
            id: true,
            status: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
          },
        },
        applicant: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });

    try {
      await this.mailService.sendOfferCreatedEmail(
        application.applicant.email,
        application.applicant.fullName,
        application.property.title,
      );
    } catch (error) {
      console.error('Failed to send offer created email', error);
    }

    return {
      message: 'Rental offer created successfully',
      offer,
    };
  }

  async sendLeaseAgreement(currentUser: AuthenticatedUser, leaseAgreementId: string, dto: SendLeaseAgreementDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const lease = await this.prisma.leaseAgreement.findFirst({
      where: {
        id: leaseAgreementId,
        property: {
          agencyId: membership.agencyId,
          ...(isAgent
            ? {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              }
            : {}),
        },
      },
      select: {
        id: true,
        status: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!lease) throw new NotFoundException('Lease not found');

    if (lease.status === 'CANCELLED') {
      throw new BadRequestException('Cancelled lease agreement cannot be sent');
    }

    if (lease.status === 'SIGNED') {
      throw new BadRequestException('Signed lease agreement cannot be sent again');
    }

    const updated = await this.prisma.leaseAgreement.update({
      where: { id: lease.id },
      data: {
        status: 'SENT',
        agreementUrl: dto.agreementUrl,
        externalProvider: dto.externalProvider,
        externalReference: dto.externalReference,
        sentAt: new Date(),
        sentById: currentUser.id,
      },
    });

    await this.mailService.sendLeaseAgreementReadyEmail(
      lease.applicant.email,
      lease.applicant.fullName,
      lease.property.title,
      dto.agreementUrl,
    );

    return {
      message: 'Lease sent',
      leaseAgreement: updated,
    };
  }

  async markLeaseAgreementSigned(currentUser: AuthenticatedUser, leaseAgreementId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const lease = await this.prisma.leaseAgreement.findFirst({
      where: {
        id: leaseAgreementId,
        property: {
          agencyId: membership.agencyId,
          ...(isAgent
            ? {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              }
            : {}),
        },
      },
      select: {
        id: true,
        status: true,
        propertyId: true,
        applicantId: true,
        leaseStartDate: true,
        leaseEndDate: true,
        weeklyRent: true,
        bondAmount: true,
        advanceRent: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            title: true,
            agencyId: true,
          },
        },
        tenancy: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!lease) throw new NotFoundException('Lease not found');

    if (lease.status !== 'SENT') {
      throw new BadRequestException('Lease Agreement must be sent first');
    }

    if (lease.tenancy) {
      throw new BadRequestException('Tenancy already exists for this lease');
    }

    if (!lease.property.agencyId) {
      throw new BadRequestException('Lease property is not linked to an agency');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const updatedLease = await tx.leaseAgreement.update({
        where: { id: lease.id },
        data: {
          status: 'SIGNED',
          signedAt: new Date(),
          signedById: currentUser.id,
        },
        select: {
          id: true,
          status: true,
          signedAt: true,
          signedById: true,
        },
      });

      const tenancy: ActivatedTenancyResult = await tx.tenancy.create({
        data: {
          leaseAgreementId: lease.id,
          propertyId: lease.propertyId,
          tenantId: lease.applicantId,
          agencyId: lease.property.agencyId as string,
          status: 'ACTIVE',
          startDate: lease.leaseStartDate,
          endDate: lease.leaseEndDate,
          weeklyRent: lease.weeklyRent,
          bondAmount: lease.bondAmount,
          advanceRent: lease.advanceRent,
        },
        select: {
          id: true,
          status: true,
          startDate: true,
          endDate: true,
          weeklyRent: true,
          bondAmount: true,
          advanceRent: true,
          createdAt: true,
        },
      });

      return {
        leaseAgreement: updatedLease,
        tenancy,
      };
    });

    try {
      await this.mailService.sendLeaseAgreementSignedConfirmationEmail(
        lease.applicant.email,
        lease.applicant.fullName,
        lease.property.title,
      );
    } catch (err) {
      console.error('Signed confirmation email failed', err);
    }

    return {
      message: 'Lease agreement marked as signed and tenancy activated successfully',
      ...result,
    };
  }

  async getAgencyLeaseAgreements(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const where = {
      property: {
        agencyId: membership.agencyId,
        ...(isAgent
          ? {
              OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
            }
          : {}),
      },
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.leaseAgreement.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          status: true,
          agreementUrl: true,
          externalProvider: true,
          externalReference: true,
          sentAt: true,
          signedAt: true,
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

  async getAgencyLeaseAgreementDetail(currentUser: AuthenticatedUser, leaseAgreementId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const leaseAgreement = await this.prisma.leaseAgreement.findFirst({
      where: {
        id: leaseAgreementId,
        property: {
          agencyId: membership.agencyId,
          ...(isAgent
            ? {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              }
            : {}),
        },
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
        updatedAt: true,

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
            addressLine1: true,
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

        offer: {
          select: {
            id: true,
            status: true,
            acceptedAt: true,
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
    });

    if (!leaseAgreement) {
      throw new NotFoundException('Lease agreement not found for this agency');
    }

    return leaseAgreement;
  }

  async cancelLeaseAgreement(currentUser: AuthenticatedUser, leaseAgreementId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    if (membership.role !== AgencyMemberRole.AGENCY_OWNER && membership.role !== AgencyMemberRole.AGENCY_ADMIN) {
      throw new ForbiddenException('You are not allowed to cancel lease agreements');
    }

    const leaseAgreement = await this.prisma.leaseAgreement.findFirst({
      where: {
        id: leaseAgreementId,
        property: {
          agencyId: membership.agencyId,
        },
      },
      select: {
        id: true,
        status: true,
        applicant: {
          select: {
            email: true,
            fullName: true,
          },
        },
        property: {
          select: {
            title: true,
          },
        },
        tenancy: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!leaseAgreement) {
      throw new NotFoundException('Lease agreement not found for this agency');
    }

    if (leaseAgreement.tenancy) {
      throw new BadRequestException('Lease agreement with tenancy cannot be cancelled');
    }

    if (leaseAgreement.status === 'SIGNED') {
      throw new BadRequestException('Signed lease agreement cannot be cancelled');
    }

    if (leaseAgreement.status === 'CANCELLED') {
      throw new BadRequestException('Lease agreement is already cancelled');
    }

    const updatedLeaseAgreement = await this.prisma.leaseAgreement.update({
      where: {
        id: leaseAgreement.id,
      },
      data: {
        status: 'CANCELLED',
        cancelledAt: new Date(),
      },
      select: {
        id: true,
        status: true,
        cancelledAt: true,
      },
    });

    return {
      message: 'Lease agreement cancelled successfully',
      leaseAgreement: updatedLeaseAgreement,
    };
  }

  async getAgencyTenancies(currentUser: AuthenticatedUser, query: PaginationQueryDto) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const search = query.search;

    const where = {
      agencyId: membership.agencyId,
      ...(isAgent
        ? {
            property: {
              OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
            },
          }
        : {}),
      ...(search
        ? {
            OR: [
              {
                property: {
                  title: {
                    contains: search,
                    mode: 'insensitive' as const,
                  },
                },
              },
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
            ],
          }
        : {}),
    };

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
          tenant: {
            select: {
              id: true,
              fullName: true,
              email: true,
              phone: true,
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

      this.prisma.tenancy.count({
        where,
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

  async getAgencyTenancyDetail(currentUser: AuthenticatedUser, tenancyId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const tenancy = await this.prisma.tenancy.findFirst({
      where: {
        id: tenancyId,
        agencyId: membership.agencyId,
        ...(isAgent
          ? {
              property: {
                OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
              },
            }
          : {}),
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
            addressLine1: true,
            suburb: true,
            state: true,
            postcode: true,
            assignedAgentMember: {
              select: {
                id: true,
                user: {
                  select: {
                    id: true,
                    fullName: true,
                    email: true,
                    phone: true,
                    isActive: true,
                    media: {
                      where: {
                        mediaType: UserMediaType.PROFILE_IMAGE,
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
        tenant: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
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
      },
    });

    if (!tenancy) {
      throw new NotFoundException('Tenancy not found for this agency');
    }

    return tenancy;
  }

  async endTenancy(currentUser: AuthenticatedUser, tenancyId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    if (membership.role !== AgencyMemberRole.AGENCY_OWNER && membership.role !== AgencyMemberRole.AGENCY_ADMIN) {
      throw new ForbiddenException('You are not allowed to end tenancies');
    }

    const tenancy = await this.prisma.tenancy.findFirst({
      where: {
        id: tenancyId,
        agencyId: membership.agencyId,
      },
      select: {
        id: true,
        status: true,
        propertyId: true,
      },
    });

    if (!tenancy) {
      throw new NotFoundException('Tenancy not found for this agency');
    }

    if (tenancy.status !== 'ACTIVE') {
      throw new BadRequestException('Only active tenancy can be ended');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const updatedTenancy = await tx.tenancy.update({
        where: { id: tenancy.id },
        data: {
          status: 'ENDED',
          endedAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          endedAt: true,
        },
      });

      await tx.property.update({
        where: { id: tenancy.propertyId },
        data: {
          isLocked: false,
          isPublished: false,
        },
      });

      return updatedTenancy;
    });

    return {
      message: 'Tenancy ended successfully',
      tenancy: result,
    };
  }

  async cancelTenancy(currentUser: AuthenticatedUser, tenancyId: string) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    if (membership.role !== AgencyMemberRole.AGENCY_OWNER && membership.role !== AgencyMemberRole.AGENCY_ADMIN) {
      throw new ForbiddenException('You are not allowed to cancel tenancies');
    }

    const tenancy = await this.prisma.tenancy.findFirst({
      where: {
        id: tenancyId,
        agencyId: membership.agencyId,
      },
      select: {
        id: true,
        status: true,
        propertyId: true,
      },
    });

    if (!tenancy) {
      throw new NotFoundException('Tenancy not found for this agency');
    }

    if (tenancy.status !== 'ACTIVE') {
      throw new BadRequestException('Only active tenancy can be cancelled');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const updatedTenancy = await tx.tenancy.update({
        where: { id: tenancy.id },
        data: {
          status: 'CANCELLED',
          cancelledAt: new Date(),
        },
        select: {
          id: true,
          status: true,
          cancelledAt: true,
        },
      });

      await tx.property.update({
        where: { id: tenancy.propertyId },
        data: {
          isLocked: false,
          isPublished: false,
        },
      });

      return updatedTenancy;
    });

    return {
      message: 'Tenancy cancelled successfully',
      tenancy: result,
    };
  }

  async getAgencyDashboardSummary(currentUser: AuthenticatedUser) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const propertyWhere = {
      agencyId: membership.agencyId,
      isArchived: false,
      ...(isAgent
        ? {
            OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
          }
        : {}),
    };

    const relatedPropertyFilter = {
      property: propertyWhere,
    };

    const [
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
      declinedOffers,

      totalPaymentRequests,
      pendingPayments,
      paidPayments,
      paidAmountResult,
      pendingAmountResult,

      totalLeaseAgreements,
      sentLeaseAgreements,
      signedLeaseAgreements,

      totalTenancies,
      activeTenancies,
      endedTenancies,
      cancelledTenancies,
    ] = await this.prisma.$transaction([
      this.prisma.property.count({
        where: propertyWhere,
      }),
      this.prisma.property.count({
        where: {
          ...propertyWhere,
          isPublished: true,
        },
      }),
      this.prisma.property.count({
        where: {
          ...propertyWhere,
          isLocked: true,
        },
      }),

      this.prisma.application.count({
        where: relatedPropertyFilter,
      }),
      this.prisma.application.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
      }),
      this.prisma.application.count({
        where: {
          ...relatedPropertyFilter,
          status: 'APPROVED',
        },
      }),
      this.prisma.application.count({
        where: {
          ...relatedPropertyFilter,
          status: 'REJECTED',
        },
      }),

      this.prisma.offer.count({
        where: relatedPropertyFilter,
      }),
      this.prisma.offer.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
      }),
      this.prisma.offer.count({
        where: {
          ...relatedPropertyFilter,
          status: 'ACCEPTED',
        },
      }),
      this.prisma.offer.count({
        where: {
          ...relatedPropertyFilter,
          status: 'DECLINED',
        },
      }),

      this.prisma.paymentRequest.count({
        where: relatedPropertyFilter,
      }),
      this.prisma.paymentRequest.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
      }),
      this.prisma.paymentRequest.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PAID',
        },
      }),
      this.prisma.paymentRequest.aggregate({
        where: {
          ...relatedPropertyFilter,
          status: 'PAID',
        },
        _sum: {
          totalAmount: true,
        },
      }),
      this.prisma.paymentRequest.aggregate({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
        _sum: {
          totalAmount: true,
        },
      }),

      this.prisma.leaseAgreement.count({
        where: relatedPropertyFilter,
      }),
      this.prisma.leaseAgreement.count({
        where: {
          ...relatedPropertyFilter,
          status: 'SENT',
        },
      }),
      this.prisma.leaseAgreement.count({
        where: {
          ...relatedPropertyFilter,
          status: 'SIGNED',
        },
      }),

      this.prisma.tenancy.count({
        where: {
          agencyId: membership.agencyId,
          ...(isAgent
            ? {
                property: {
                  OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
                },
              }
            : {}),
        },
      }),
      this.prisma.tenancy.count({
        where: {
          agencyId: membership.agencyId,
          status: 'ACTIVE',
          ...(isAgent
            ? {
                property: {
                  OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
                },
              }
            : {}),
        },
      }),
      this.prisma.tenancy.count({
        where: {
          agencyId: membership.agencyId,
          status: 'ENDED',
          ...(isAgent
            ? {
                property: {
                  OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
                },
              }
            : {}),
        },
      }),
      this.prisma.tenancy.count({
        where: {
          agencyId: membership.agencyId,
          status: 'CANCELLED',
          ...(isAgent
            ? {
                property: {
                  OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
                },
              }
            : {}),
        },
      }),
    ]);

    return {
      properties: {
        total: totalProperties,
        published: publishedProperties,
        locked: lockedProperties,
        vacant: totalProperties - lockedProperties,
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
      payments: {
        total: totalPaymentRequests,
        pending: pendingPayments,
        paid: paidPayments,
        totalPaidAmount: paidAmountResult._sum.totalAmount ?? 0,
        totalPendingAmount: pendingAmountResult._sum.totalAmount ?? 0,
      },
      leaseAgreements: {
        total: totalLeaseAgreements,
        sent: sentLeaseAgreements,
        signed: signedLeaseAgreements,
      },
      tenancies: {
        total: totalTenancies,
        active: activeTenancies,
        ended: endedTenancies,
        cancelled: cancelledTenancies,
      },
    };
  }

  async getAgencyAgentPerformance(currentUser: AuthenticatedUser) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const members = await this.prisma.agencyMember.findMany({
      where: {
        agencyId: membership.agencyId,
        isActive: true,
        role: {
          in: [AgencyMemberRole.AGENT, AgencyMemberRole.AGENCY_ADMIN],
        },
        ...(isAgent
          ? {
              id: membership.id,
            }
          : {}),
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        role: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    const items = await Promise.all(
      members.map(async (member) => {
        const propertyAccessWhere = {
          agencyId: membership.agencyId,
          isArchived: false,
          OR: [
            {
              assignedAgentMemberId: member.id,
            },
            {
              createdById: member.user.id,
            },
          ],
        };

        const relatedPropertyFilter = {
          property: propertyAccessWhere,
        };

        const [
          assignedProperties,
          createdProperties,
          publishedProperties,
          totalApplications,
          approvedApplications,
          totalOffers,
          acceptedOffers,
          signedLeaseAgreements,
          activeTenancies,
          paidPayments,
          paidAmountResult,
        ] = await this.prisma.$transaction([
          this.prisma.property.count({
            where: {
              agencyId: membership.agencyId,
              assignedAgentMemberId: member.id,
              isArchived: false,
            },
          }),

          this.prisma.property.count({
            where: {
              agencyId: membership.agencyId,
              createdById: member.user.id,
              isArchived: false,
            },
          }),

          this.prisma.property.count({
            where: {
              ...propertyAccessWhere,
              isPublished: true,
            },
          }),

          this.prisma.application.count({
            where: relatedPropertyFilter,
          }),

          this.prisma.application.count({
            where: {
              ...relatedPropertyFilter,
              status: ApplicationStatus.APPROVED,
            },
          }),

          this.prisma.offer.count({
            where: relatedPropertyFilter,
          }),

          this.prisma.offer.count({
            where: {
              ...relatedPropertyFilter,
              status: OfferStatus.ACCEPTED,
            },
          }),

          this.prisma.leaseAgreement.count({
            where: {
              ...relatedPropertyFilter,
              status: 'SIGNED',
            },
          }),

          this.prisma.tenancy.count({
            where: {
              agencyId: membership.agencyId,
              status: 'ACTIVE',
              property: {
                OR: [
                  {
                    assignedAgentMemberId: member.id,
                  },
                  {
                    createdById: member.user.id,
                  },
                ],
              },
            },
          }),

          this.prisma.paymentRequest.count({
            where: {
              ...relatedPropertyFilter,
              status: 'PAID',
            },
          }),

          this.prisma.paymentRequest.aggregate({
            where: {
              ...relatedPropertyFilter,
              status: 'PAID',
            },
            _sum: {
              totalAmount: true,
            },
          }),
        ]);

        return {
          memberId: member.id,
          role: member.role,
          joinedAt: member.createdAt,
          agent: member.user,

          properties: {
            assigned: assignedProperties,
            created: createdProperties,
            published: publishedProperties,
          },

          applications: {
            total: totalApplications,
            approved: approvedApplications,
          },

          offers: {
            total: totalOffers,
            accepted: acceptedOffers,
          },

          leases: {
            signed: signedLeaseAgreements,
          },

          tenancies: {
            active: activeTenancies,
          },

          payments: {
            paid: paidPayments,
            totalPaidAmount: paidAmountResult._sum.totalAmount ?? 0,
          },
        };
      }),
    );

    return {
      items,
    };
  }

  async getAgencyTenancyAnalytics(currentUser: AuthenticatedUser) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const propertyAccessWhere = {
      agencyId: membership.agencyId,
      isArchived: false,
      ...(isAgent
        ? {
            OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
          }
        : {}),
    };

    const tenancyWhere = {
      agencyId: membership.agencyId,
      ...(isAgent
        ? {
            property: {
              OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
            },
          }
        : {}),
    };

    const now = new Date();

    const next30Days = new Date();
    next30Days.setDate(next30Days.getDate() + 30);

    const [
      totalProperties,
      lockedProperties,
      publishedProperties,
      activeTenancies,
      endedTenancies,
      cancelledTenancies,
      upcomingLeaseEndings,
      tenanciesForAverage,
    ] = await this.prisma.$transaction([
      this.prisma.property.count({
        where: propertyAccessWhere,
      }),

      this.prisma.property.count({
        where: {
          ...propertyAccessWhere,
          isLocked: true,
        },
      }),

      this.prisma.property.count({
        where: {
          ...propertyAccessWhere,
          isPublished: true,
        },
      }),

      this.prisma.tenancy.count({
        where: {
          ...tenancyWhere,
          status: 'ACTIVE',
        },
      }),

      this.prisma.tenancy.count({
        where: {
          ...tenancyWhere,
          status: 'ENDED',
        },
      }),

      this.prisma.tenancy.count({
        where: {
          ...tenancyWhere,
          status: 'CANCELLED',
        },
      }),

      this.prisma.tenancy.findMany({
        where: {
          ...tenancyWhere,
          status: 'ACTIVE',
          endDate: {
            gte: now,
            lte: next30Days,
          },
        },
        orderBy: {
          endDate: 'asc',
        },
        select: {
          id: true,
          startDate: true,
          endDate: true,
          tenant: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
            },
          },
        },
      }),

      this.prisma.tenancy.findMany({
        where: tenancyWhere,
        select: {
          startDate: true,
          endDate: true,
        },
      }),
    ]);

    const totalLeaseDays = tenanciesForAverage.reduce((total, tenancy) => {
      const start = tenancy.startDate.getTime();
      const end = tenancy.endDate.getTime();
      const days = Math.max(0, Math.round((end - start) / (1000 * 60 * 60 * 24)));

      return total + days;
    }, 0);

    const averageLeaseDurationDays =
      tenanciesForAverage.length > 0 ? Math.round(totalLeaseDays / tenanciesForAverage.length) : 0;

    return {
      properties: {
        total: totalProperties,
        published: publishedProperties,
        locked: lockedProperties,
        vacant: totalProperties - lockedProperties,
      },
      tenancies: {
        active: activeTenancies,
        ended: endedTenancies,
        cancelled: cancelledTenancies,
        averageLeaseDurationDays,
      },
      occupancy: {
        occupiedProperties: lockedProperties,
        vacantProperties: totalProperties - lockedProperties,
        occupancyRate: totalProperties > 0 ? Number(((lockedProperties / totalProperties) * 100).toFixed(2)) : 0,
      },
      upcomingLeaseEndings,
    };
  }

  async getAgencyRevenueAnalytics(currentUser: AuthenticatedUser) {
    const membership = await this.getApprovedAgencyMembership(currentUser);

    const isAgent = membership.role === AgencyMemberRole.AGENT;

    const propertyAccessWhere = {
      agencyId: membership.agencyId,
      isArchived: false,
      ...(isAgent
        ? {
            OR: [{ assignedAgentMemberId: membership.id }, { createdById: currentUser.id }],
          }
        : {}),
    };

    const relatedPropertyFilter = {
      property: propertyAccessWhere,
    };

    const [
      totalPayments,
      pendingPayments,
      paidPayments,
      cancelledPayments,

      paidAmountResult,
      pendingAmountResult,

      paidPaymentRequests,

      properties,
    ] = await this.prisma.$transaction([
      this.prisma.paymentRequest.count({
        where: relatedPropertyFilter,
      }),

      this.prisma.paymentRequest.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
      }),

      this.prisma.paymentRequest.count({
        where: {
          ...relatedPropertyFilter,
          status: 'PAID',
        },
      }),

      this.prisma.paymentRequest.count({
        where: {
          ...relatedPropertyFilter,
          status: 'CANCELLED',
        },
      }),

      this.prisma.paymentRequest.aggregate({
        where: {
          ...relatedPropertyFilter,
          status: 'PAID',
        },
        _sum: {
          totalAmount: true,
        },
      }),

      this.prisma.paymentRequest.aggregate({
        where: {
          ...relatedPropertyFilter,
          status: 'PENDING',
        },
        _sum: {
          totalAmount: true,
        },
      }),

      this.prisma.paymentRequest.findMany({
        where: {
          ...relatedPropertyFilter,
          status: 'PAID',
        },
        orderBy: {
          paidAt: 'desc',
        },
        select: {
          id: true,
          totalAmount: true,
          bondAmount: true,
          advanceRent: true,
          paidAt: true,
          property: {
            select: {
              id: true,
              title: true,
              suburb: true,
              state: true,
              assignedAgentMember: {
                select: {
                  id: true,
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
        },
      }),

      this.prisma.property.findMany({
        where: propertyAccessWhere,
        select: {
          id: true,
          title: true,
          suburb: true,
          state: true,
          assignedAgentMember: {
            select: {
              id: true,
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
      }),
    ]);

    const totalPaidAmount = Number(paidAmountResult._sum.totalAmount ?? 0);
    const totalPendingAmount = Number(pendingAmountResult._sum.totalAmount ?? 0);

    const averagePaymentValue = paidPayments > 0 ? Number((totalPaidAmount / paidPayments).toFixed(2)) : 0;

    const revenueByProperty = properties.map((property) => {
      const propertyPayments = paidPaymentRequests.filter((payment) => payment.property.id === property.id);

      const totalAmount = propertyPayments.reduce((sum, payment) => sum + Number(payment.totalAmount), 0);

      return {
        property: {
          id: property.id,
          title: property.title,
          suburb: property.suburb,
          state: property.state,
        },
        assignedAgent: property.assignedAgentMember
          ? {
              id: property.assignedAgentMember.id,
              fullName: property.assignedAgentMember.user.fullName,
              email: property.assignedAgentMember.user.email,
            }
          : null,
        paidPayments: propertyPayments.length,
        totalPaidAmount: Number(totalAmount.toFixed(2)),
      };
    });

    const revenueByAgentMap = new Map<
      string,
      {
        agent: {
          id: string;
          fullName: string;
          email: string;
        };
        paidPayments: number;
        totalPaidAmount: number;
      }
    >();

    for (const payment of paidPaymentRequests) {
      const assignedAgent = payment.property.assignedAgentMember;

      if (!assignedAgent) continue;

      const agentId = assignedAgent.id;

      const existing = revenueByAgentMap.get(agentId);

      if (existing) {
        existing.paidPayments += 1;
        existing.totalPaidAmount += Number(payment.totalAmount);
      } else {
        revenueByAgentMap.set(agentId, {
          agent: {
            id: assignedAgent.id,
            fullName: assignedAgent.user.fullName,
            email: assignedAgent.user.email,
          },
          paidPayments: 1,
          totalPaidAmount: Number(payment.totalAmount),
        });
      }
    }

    const revenueByAgent = Array.from(revenueByAgentMap.values()).map((item) => ({
      ...item,
      totalPaidAmount: Number(item.totalPaidAmount.toFixed(2)),
    }));

    return {
      payments: {
        total: totalPayments,
        pending: pendingPayments,
        paid: paidPayments,
        cancelled: cancelledPayments,
        totalPaidAmount,
        totalPendingAmount,
        averagePaymentValue,
      },
      revenueByProperty,
      revenueByAgent,
      recentPaidPayments: paidPaymentRequests.slice(0, 10),
    };
  }
}
