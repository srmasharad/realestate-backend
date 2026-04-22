import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UploadedImageFile } from 'src/common/types/uploaded-image-file.type';
import { UserRole } from 'src/generated/prisma';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { type AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { CreatePropertyDto } from './dto/create-property.dto';
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new property' })
  create(@Body() createPropertyDto: CreatePropertyDto, @CurrentUser() currentUser: AuthenticatedUser) {
    return this.propertyService.create(createPropertyDto, currentUser);
  }

  @Post(':propertyId/media')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
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
  ) {
    return this.propertyService.uploadMedia(propertyId, files, dto);
  }

  @Patch(':propertyId/media/:mediaId/primary')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Set a property media item as the primary image' })
  setPrimaryImage(@Param('propertyId') propertyId: string, @Param('mediaId') mediaId: string) {
    return this.propertyService.setPrimaryImage(propertyId, mediaId);
  }

  @Delete(':propertyId/media/:mediaId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a property media item' })
  deleteMedia(@Param('propertyId') propertyId: string, @Param('mediaId') mediaId: string) {
    return this.propertyService.deleteMedia(propertyId, mediaId);
  }

  @Get(':propertyId/applications')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.AGENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get applications for a property' })
  getApplicationsForProperty(@Param('propertyId') propertyId: string) {
    return this.propertyService.getApplicationsForProperty(propertyId);
  }
}
