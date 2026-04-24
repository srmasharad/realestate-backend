import { IsIn } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export const REVIEWABLE_AGENCY_STATUSES = ['PENDING', 'APPROVED', 'REJECTED'] as const;

export class UpdateAgencyStatusDto {
  @ApiProperty({
    example: 'APPROVED',
    enum: REVIEWABLE_AGENCY_STATUSES,
  })
  @IsIn(REVIEWABLE_AGENCY_STATUSES)
  status!: 'APPROVED' | 'REJECTED' | 'SUSPENDED';
}
