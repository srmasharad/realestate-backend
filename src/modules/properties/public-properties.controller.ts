import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { PropertiesService } from './properties.service';

@ApiTags('Public Properties')
@Controller({
  path: 'public/properties',
  version: '1',
})
export class PublicPropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all published properties for public visitors' })
  findAll(@Query() query: PaginationQueryDto) {
    return this.propertyService.findPublicProperties(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get public property details by id' })
  findOne(@Param('id') id: string) {
    return this.propertyService.findPublicPropertyById(id);
  }
}
