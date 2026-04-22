import { IsIn } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export const REVIEWABLE_APPLICATION_STATUSES = ['APPROVED', 'REJECTED'] as const;

export class UpdateApplicationStatusDto {
  @ApiProperty({
    enum: REVIEWABLE_APPLICATION_STATUSES,
    example: 'APPROVED',
  })
  @IsIn(REVIEWABLE_APPLICATION_STATUSES)
  status!: 'APPROVED' | 'REJECTED';
}
