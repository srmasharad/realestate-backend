import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UploadedImageFile } from 'src/common/types/uploaded-image-file.type';

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyPublishDto } from './dto/update-property-publish.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { UploadPropertyMediaDto } from './dto/upload-property-media.dto';
import { PropertiesService } from './properties.service';

@ApiTags('Properties')
@Controller({
  path: 'properties',
  version: '1',
})
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new property' })
  create(@Body() createPropertyDto: CreatePropertyDto, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.create(createPropertyDto, currentUser);
  }

  @Patch(':propertyId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update property',
  })
  update(
    @Param('propertyId') propertyId: string,
    @Body() dto: UpdatePropertyDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.propertyService.update(propertyId, dto, currentUser);
  }

  @Delete(':propertyId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Archive property' })
  @HttpCode(204)
  remove(@Param('propertyId') propertyId: string, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.remove(propertyId, currentUser);
  }

  @Patch(':propertyId/restore')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Restore archived property',
  })
  restoreProperty(@Param('propertyId') propertyId: string, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.restoreProperty(propertyId, currentUser);
  }

  @Patch(':propertyId/publish')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Publish or unpublish property' })
  @ApiBody({ type: UpdatePropertyPublishDto })
  updatePublishStatus(
    @Param('propertyId') propertyId: string,
    @Body() dto: UpdatePropertyPublishDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.propertyService.updatePublishStatus(propertyId, dto, currentUser);
  }

  @Post(':propertyId/media')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10)) // Allow up to 10 files
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        sortOrderStart: {
          type: 'number',
          example: 0,
        },
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @ApiOperation({ summary: 'Upload property media images' })
  uploadMedia(
    @Param('propertyId') propertyId: string,
    @UploadedFiles() files: UploadedImageFile[],
    @Body() dto: UploadPropertyMediaDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.propertyService.uploadMedia(propertyId, files, dto, currentUser);
  }

  @Patch(':propertyId/media/:mediaId/primary')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Set a property media item as the primary image' })
  setPrimaryImage(
    @Param('propertyId') propertyId: string,
    @Param('mediaId') mediaId: string,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.propertyService.setPrimaryImage(propertyId, mediaId, currentUser);
  }

  @Delete(':propertyId/media/:mediaId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a property media item' })
  deleteMedia(
    @Param('propertyId') propertyId: string,
    @Param('mediaId') mediaId: string,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.propertyService.deleteMedia(propertyId, mediaId, currentUser);
  }

  @Get(':propertyId/applications')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get applications for a property' })
  getApplicationsForProperty(@Param('propertyId') propertyId: string, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.getApplicationsForProperty(propertyId, currentUser);
  }

  @Get(':propertyId/manage')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get property management detail' })
  getManagementDetail(@Param('propertyId') propertyId: string, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.getManagementDetail(propertyId, currentUser);
  }

  @Get(':propertyId/analytics')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get property analytics snapshot' })
  getPropertyAnalytics(@Param('propertyId') propertyId: string, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.getPropertyAnalytics(propertyId, currentUser);
  }
}
