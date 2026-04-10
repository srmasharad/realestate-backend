import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpsertMyProfileDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  fullName!: string;

  @ApiProperty({ example: '040000000000' })
  @IsString()
  phone!: string;

  @ApiProperty({ example: '123 Main Street' })
  @IsString()
  addressLine1!: string;

  @ApiProperty({ example: 'Parramatta' })
  @IsString()
  suburb!: string;

  @ApiProperty({ example: 'NSW' })
  @IsString()
  state!: string;

  @ApiProperty({ example: '2150' })
  @IsString()
  postcode!: string;

  @ApiProperty({ example: 'Full-time' })
  @IsString()
  employmentStatus!: string;

  @ApiProperty({ example: 5000 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  monthlyIncome!: number;

  @ApiProperty({ example: 3 })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  householdSize!: number;
}
