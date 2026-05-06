import { IsIn } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export const OFFER_RESPONSE_STATUSES = ['ACCEPTED', 'DECLINED'] as const;

export class RespondOfferDto {
  @ApiProperty({
    enum: OFFER_RESPONSE_STATUSES,
    example: 'ACCEPTED',
  })
  @IsIn(OFFER_RESPONSE_STATUSES)
  status!: 'ACCEPTED' | 'DECLINED';
}
