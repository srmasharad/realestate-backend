import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateAgencyOnboardingDto {
  @ApiProperty({ example: 'Harbour Realty' })
  @IsString()
  agencyName!: string;

  @ApiProperty({ example: 'harbour-realty' })
  @IsString()
  agencySlug!: string;

  @ApiProperty({ example: 'contact@harbourrealty.com.au' })
  @IsEmail()
  agencyEmail!: string;

  @ApiProperty({ example: '0412345678', required: false })
  @IsOptional()
  @IsString()
  agencyPhone?: string;

  @ApiProperty({ example: '12 George Street', required: false })
  @IsOptional()
  @IsString()
  addressLine1?: string;

  @ApiProperty({ example: 'Sydney', required: false })
  @IsOptional()
  @IsString()
  suburb?: string;

  @ApiProperty({ example: 'NSW', required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ example: '2000', required: false })
  @IsOptional()
  @IsString()
  postcode?: string;

  @ApiProperty({ example: 'Jane Smith' })
  @IsString()
  contactFullName!: string;

  @ApiProperty({ example: 'jane.smith@example.com' })
  @IsEmail()
  contactEmail!: string;

  @ApiProperty({ example: '0400000012', required: false })
  @IsOptional()
  @IsString()
  contactPhone?: string;

  @ApiProperty({ example: '12345678' })
  @IsString()
  @MinLength(8)
  password!: string;
}
