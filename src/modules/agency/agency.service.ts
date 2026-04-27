import * as bcrypt from 'bcrypt';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { MailService } from 'src/common/mail/mail.service';
import { PrismaService } from 'src/database/prisma.service';
import {
  AgencyMemberRole,
  AgencyStatus,
} from 'src/generated/prisma';

import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UpdateApplicationStatusDto } from '../applications/dto/update-application-status.dto';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AddAgencyMemberDto } from './dto/add-agency-member.dto';
import { AssignAgentDto } from './dto/assign-agent.dto';
import { CreateAgencyOnboardingDto } from './dto/create-agency-onboarding.dto';

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
  assignedAgentMember: {
    user: {
      email: string;
      fullName: string;
    };
  } | null;
};

@Injectable()
export class AgencyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

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
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
        agencyId: true,
        agency: {
          select: {
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

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = {
      agencyId: membership.agencyId,
      ...(search
        ? {
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
          }
        : {}),
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
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
        agencyId: true,
        agency: {
          select: {
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

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const search = query.search;
    const skip = (page - 1) * limit;

    const where = {
      property: {
        agencyId: membership.agencyId,
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
        },
      }),

      this.prisma.application.count({ where }),
    ]);

    return {
      items: applications,
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
    const membership = await this.prisma.agencyMember.findFirst({
      where: {
        userId: currentUser.id,
        isActive: true,
      },
      select: {
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

    const application = await this.prisma.application.findFirst({
      where: {
        id: applicationId,
        property: {
          agencyId: membership.agencyId,
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
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException('Application not found for this agency');
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
            name: true,
            status: true,
          },
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException('You are not part of any agency');
    }

    if (membership.agency.status !== 'APPROVED') {
      throw new ForbiddenException('Agency is not approved');
    }

    if (!['AGENCY_OWNER', 'AGENCY_ADMIN'].includes(membership.role)) {
      throw new ForbiddenException('You are not allowed to assign agents');
    }

    // Check property belongs to agency
    const property: PropertyWithAssignedAgent | null = await this.prisma.property.findFirst({
      where: {
        id: propertyId,
        agencyId: membership.agencyId,
      },
      select: {
        id: true,
        title: true,
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

    // Validate target agency member
    const targetMember = await this.prisma.agencyMember.findFirst({
      where: {
        id: dto.agencyMemberId,
        agencyId: membership.agencyId,
        isActive: true,
        role: {
          in: ['AGENT', 'AGENCY_ADMIN'],
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
}
