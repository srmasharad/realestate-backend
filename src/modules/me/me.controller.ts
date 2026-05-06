import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { VerifiedEmailGuard } from 'src/common/guards/verified-email.guard';
import { type UploadedImageFile } from 'src/common/types/uploaded-image-file.type';

import { Body, Controller, Get, Param, Patch, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { RespondOfferDto } from './dto/respond-offer.dto';
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

  @Get('media/:mediaId/access')
  @ApiOperation({ summary: 'Get authorized access to current user media' })
  getMyMediaAccess(@CurrentUser() currentUser: AuthenticatedUser, @Param('mediaId') mediaId: string) {
    return this.meService.getMyMediaAccess(currentUser, mediaId);
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get current user profile' })
  getMyProfile(@CurrentUser() currentUser: AuthenticatedUser) {
    return this.meService.getMyProfile(currentUser);
  }

  @Patch('profile')
  @UseGuards(VerifiedEmailGuard)
  @UseInterceptors(FileInterceptor('profileImage'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',

      properties: {
        fullName: { type: 'string', example: 'Sharad Sharma' },
        phone: { type: 'string', example: '0400000000' },
        addressLine1: { type: 'string', example: '12 Church Street' },
        suburb: { type: 'string', example: 'Parramatta' },
        state: { type: 'string', example: 'NSW' },
        postcode: { type: 'string', example: '2150' },
        employmentStatus: { type: 'string', example: 'Full-time' },
        monthlyIncome: { type: 'number', example: 6500 },
        householdSize: { type: 'number', example: 2 },
        profileImage: {
          type: 'string',
          format: 'binary',
        },
      },

      required: [
        'fullName',
        'phone',
        'addressLine1',
        'suburb',
        'state',
        'postcode',
        'employmentStatus',
        'monthlyIncome',
        'householdSize',
      ],
    },
  })
  @ApiOperation({ summary: 'Create or update current profile' })
  upsertMyProfile(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Body() dto: UpsertMyProfileDto,
    @UploadedFile() profileImage: UploadedImageFile,
  ) {
    return this.meService.upsertMyProfile(currentUser, dto, profileImage);
  }

  @Get('applications')
  @ApiOperation({ summary: 'Get current user applications' })
  getMyApplications(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.meService.getMyApplications(currentUser, query);
  }

  @Get('offers')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user rental offers' })
  getMyOffers(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.meService.getMyOffers(currentUser, query);
  }

  @Patch('offers/:offerId/respond')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Accept or decline rental offer' })
  respondToOffer(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('offerId') offerId: string,
    @Body() dto: RespondOfferDto,
  ) {
    return this.meService.respondToOffer(currentUser, offerId, dto);
  }

  @Get('payment-requests')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my payment requests' })
  getMyPaymentRequests(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.meService.getMyPaymentRequests(currentUser, query);
  }

  @Get('lease-agreements')
  @UseGuards(JwtAuthGuard)
  getMyLease(@CurrentUser() user: AuthenticatedUser) {
    return this.meService.getMyLeaseAgreements(user);
  }

  @Get('lease-agreements/:leaseAgreementId')
  @ApiOperation({ summary: 'Get my lease agreement detail' })
  getMyLeaseAgreementDetail(
    @CurrentUser() currentUser: AuthenticatedUser,
    @Param('leaseAgreementId') leaseAgreementId: string,
  ) {
    return this.meService.getMyLeaseAgreementDetail(currentUser, leaseAgreementId);
  }

  @Get('tenancies')
  @ApiOperation({ summary: 'Get my tenancies' })
  getMyTenancies(@CurrentUser() currentUser: AuthenticatedUser, @Query() query: PaginationQueryDto) {
    return this.meService.getMyTenancies(currentUser, query);
  }

  @Get('tenancies/:tenancyId')
  @ApiOperation({ summary: 'Get my tenancy detail' })
  getMyTenancyDetail(@CurrentUser() currentUser: AuthenticatedUser, @Param('tenancyId') tenancyId: string) {
    return this.meService.getMyTenancyDetail(currentUser, tenancyId);
  }
}
