import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UserRole } from 'src/generated/prisma';

import { Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminService } from './admin.service';
import { GetAgenciesQueryDto } from './dto/get-agencies-query.dto';
import { UpdateAgencyStatusDto } from './dto/update-agency-status.dto';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard) // Apply the AdminGuard to all routes in this controller
@Roles(UserRole.ADMIN) // Only allow users with the 'ADMIN' role to access these routes
@Controller({
  path: 'admin',
  version: '1',
})
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('agencies')
  @ApiOperation({ summary: 'Get all agencies with optional status filter' })
  @ApiQuery({ name: 'status', required: false, enum: ['PENDING', 'APPROVED', 'REJECTED', 'SUSPENDED'] })
  getAgencies(@Query() query: GetAgenciesQueryDto) {
    return this.adminService.getAgencies(query);
  }

  @Patch('agencies/:agencyId/status')
  @ApiOperation({ summary: 'Approve, Reject or Suspend an Agency' })
  updateAgencyStatus(@Param('agencyId') agencyId: string, @Body() dto: UpdateAgencyStatusDto) {
    return this.adminService.updateAgencyStatus(agencyId, dto);
  }
}
