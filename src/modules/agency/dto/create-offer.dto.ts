import { IsDateString, IsInt, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateOfferDto {
  @ApiProperty({ example: 650 })
  @IsNumber()
  @Min(1)
  weeklyRent!: number;

  @ApiProperty({
    example: 6,
    description: 'Minimum 6 months and maximum 12 months',
  })
  @IsInt()
  @Min(6)
  @Max(12)
  leaseMonths!: number;

  @ApiProperty({ example: '2026-06-01T00:00:00.000Z' })
  @IsDateString()
  leaseStartDate!: string;

  @ApiProperty({ example: '2026-05-20T23:59:59.000Z' })
  @IsDateString()
  expiresAt!: string;

  @ApiProperty({
    example: 'Please review and accept this rental offer before the expiry date.',
    required: false,
  })
  @IsOptional()
  @IsString()
  message?: string;
}
