import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { VerifiedEmailGuard } from 'src/common/guards/verified-email.guard';
import { UserRole } from 'src/generated/prisma';

import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';

@ApiTags('Applications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller({
  path: 'applications',
  version: '1',
})
export class ApplicationsController {
  constructor(private readonly applicationService: ApplicationsService) {}

  @Post()
  @Roles(UserRole.USER)
  @UseGuards(VerifiedEmailGuard)
  @ApiOperation({ summary: 'Apply for a property' })
  create(@Body() dto: CreateApplicationDto, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.applicationService.create(dto, currentUser);
  }

  @Patch(':applicationId/status')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve or reject an application' })
  updateStatus(@Param('applicationId') applicationId: string, @Body() dto: UpdateApplicationStatusDto) {
    return this.applicationService.updateStatus(applicationId, dto);
  }
}
