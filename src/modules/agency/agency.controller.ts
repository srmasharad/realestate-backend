import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import { UpdateApplicationStatusDto } from '../applications/dto/update-application-status.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AgencyService } from './agency.service';
import { AddAgencyMemberDto } from './dto/add-agency-member.dto';
import { AssignAgentDto } from './dto/assign-agent.dto';
import { CreateAgencyOnboardingDto } from './dto/create-agency-onboarding.dto';
import { CreateOfferDto } from './dto/create-offer.dto';
import { SendLeaseAgreementDto } from './dto/send-lease-agreement.dto';

@ApiTags('Agency')
@Controller({
  path: 'agency',
  version: '1',
})
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post('onboarding')
  @ApiOperation({ summary: 'Create a new agency onboarding' })
  createOnboarding(@Body() dto: CreateAgencyOnboardingDto) {
    return this.agencyService.createOnboarding(dto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user agency context' })
  getMyAgencyContext(@CurrentUser() currentUser: AuthenticatedUser) {
    return this.agencyService.getMyAgencyContext(currentUser);
  }

  @Post('members')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add a new member to the agency' })
  addMember(@CurrentUser() currentUser: AuthenticatedUser, @Body() dto: AddAgencyMemberDto) {
    return this.agencyService.addMember(currentUser, dto);
  }

  @Get('members')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List agency members' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by name, email or phone',
  })
  getAgencyMembers(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.agencyService.getAgencyMembers(currentUser, query);
  }

  @Get('properties')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List current agency properties' })
  getAgencyProperties(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.agencyService.getAgencyProperties(currentUser, query);
  }

  @Get('applications')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List current agency applications' })
  getAgencyApplications(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.agencyService.getAgencyApplications(currentUser, query);
  }

  @Patch('applications/:applicationId/status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve or reject an agency application' })
  updateAgencyApplicationStatus(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('applicationId') applicationId: string,
    @Body() dto: UpdateApplicationStatusDto,
  ) {
    return this.agencyService.updateAgencyApplicationStatus(currentUser, applicationId, dto);
  }

  @Patch('properties/:propertyId/assign-agent')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Assign agent to property' })
  assignAgentToProperty(
    @CurrentUser() user: AuthenticatedUser,
    @Param('propertyId') propertyId: string,
    @Body() dto: AssignAgentDto,
  ) {
    return this.agencyService.assignAgentToProperty(user, propertyId, dto);
  }

  @Delete('properties/:propertyId/assigned-agent')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Remove assigned agent from property' })
  removeAssignedAgentFromProperty(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('propertyId') propertyId: string,
  ) {
    return this.agencyService.removeAssignedAgentFromProperty(currentUser, propertyId);
  }

  @Patch('members/:memberId/deactivate')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deactivate agency member' })
  deactivateAgencyMember(@CurrentUser() currentUser: AuthenticatedUser, @Param('memberId') memberId: string) {
    return this.agencyService.deactivateAgencyMember(currentUser, memberId);
  }

  @Post('applications/:applicationId/offer')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create offer for approved application' })
  createOfferForApplication(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('applicationId') applicationId: string,
    @Body() dto: CreateOfferDto,
  ) {
    return this.agencyService.createOfferForApplication(currentUser, applicationId, dto);
  }

  @Patch('lease-agreements/:id/send')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  sendLease(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string, @Body() dto: SendLeaseAgreementDto) {
    return this.agencyService.sendLeaseAgreement(user, id, dto);
  }

  @Patch('lease-agreements/:id/mark-signed')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  markSigned(@CurrentUser() user: AuthenticatedUser, @Param('id') id: string) {
    return this.agencyService.markLeaseAgreementSigned(user, id);
  }

  @Get('lease-agreements')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List agency lease agreements' })
  getAgencyLeaseAgreements(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.agencyService.getAgencyLeaseAgreements(currentUser, query);
  }

  @Get('lease-agreements/:leaseAgreementId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get agency lease agreement detail' })
  getAgencyLeaseAgreementDetail(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('leaseAgreementId') leaseAgreementId: string,
  ) {
    return this.agencyService.getAgencyLeaseAgreementDetail(currentUser, leaseAgreementId);
  }

  @Patch('lease-agreements/:leaseAgreementId/cancel')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cancel lease agreement' })
  cancelLeaseAgreement(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('leaseAgreementId') leaseAgreementId: string,
  ) {
    return this.agencyService.cancelLeaseAgreement(currentUser, leaseAgreementId);
  }

  @Get('tenancies')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get agency tenancies' })
  getAgencyTenancies(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.agencyService.getAgencyTenancies(currentUser, query);
  }

  @Get('tenancies/:tenancyId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get agency tenancy detail' })
  getAgencyTenancyDetail(@CurrentUser() currentUser: AuthenticatedUser, @Param('tenancyId') tenancyId: string) {
    return this.agencyService.getAgencyTenancyDetail(currentUser, tenancyId);
  }

  @Patch('tenancies/:tenancyId/end')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'End tenancy' })
  endTenancy(@CurrentUser() currentUser: AuthenticatedUser, @Param('tenancyId') tenancyId: string) {
    return this.agencyService.endTenancy(currentUser, tenancyId);
  }

  @Patch('tenancies/:tenancyId/cancel')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cancel tenancy' })
  cancelTenancy(@CurrentUser() currentUser: AuthenticatedUser, @Param('tenancyId') tenancyId: string) {
    return this.agencyService.cancelTenancy(currentUser, tenancyId);
  }
}
