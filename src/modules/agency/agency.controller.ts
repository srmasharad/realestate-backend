import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AgencyService } from './agency.service';
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
}
