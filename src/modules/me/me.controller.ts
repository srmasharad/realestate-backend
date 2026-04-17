import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { VerifiedEmailGuard } from 'src/common/guards/verified-email.guard';

import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { UpsertMyProfileDto } from './dto/upsert-my-profile.dto';
import { MeService } from './me.service';

@ApiTags('Me')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller({
  path: 'me',
  version: '1',
})
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get current user profile' })
  getMyProfile(@CurrentUser() currentUser: AuthenticatedUser) {
    return this.meService.getMyProfile(currentUser);
  }

  @Patch('profile')
  @UseGuards(VerifiedEmailGuard)
  @ApiOperation({ summary: 'Create or update current profile' })
  upsertMyProfile(@CurrentUser() currentUser: AuthenticatedUser, @Body() dto: UpsertMyProfileDto) {
    return this.meService.upsertMyProfile(currentUser, dto);
  }

  @Get('applications')
  @ApiOperation({ summary: 'Get current user applications' })
  getMyApplications(@CurrentUser() currentUser: AuthenticatedUser, @Body() query: PaginationQueryDto) {
    return this.meService.getMyApplications(currentUser, query);
  }
}
