import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { UpdateApplicationStatusDto } from '../applications/dto/update-application-status.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AgencyService } from './agency.service';
import { AddAgencyMemberDto } from './dto/add-agency-member.dto';
import { AssignAgentDto } from './dto/assign-agent.dto';
import { CreateAgencyOnboardingDto } from './dto/create-agency-onboarding.dto';

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
  assignAgentToProperty(
    @CurrentUser() user: AuthenticatedUser,
    @Param('propertyId') propertyId: string,
    @Body() dto: AssignAgentDto,
  ) {
    return this.agencyService.assignAgentToProperty(user, propertyId, dto);
  }
}
