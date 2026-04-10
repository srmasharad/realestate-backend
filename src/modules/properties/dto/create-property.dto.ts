import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ListingType, PropertyType } from 'src/common/enums/listing-type.enum';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty({ example: 'Modern 2 Bedroom Apartment in Parramatta' })
  @IsString()
  title!: string;

  @ApiProperty({
    example: 'A spacious and modern apartment close to public transport and shops.',
  })
  @IsString()
  description!: string;

  @ApiProperty({ enum: ListingType, example: ListingType.RENT })
  @IsEnum(ListingType)
  listingType!: ListingType;

  @ApiProperty({ enum: PropertyType, example: PropertyType.HOUSE })
  @IsEnum(PropertyType)
  propertyType!: PropertyType;

  @ApiProperty({ example: '650.0' })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price!: number;

  @ApiProperty({ example: '13 Greenvale St' })
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

  @ApiPropertyOptional({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  bedrooms?: number;

  @ApiPropertyOptional({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  bathrooms?: number;

  @ApiPropertyOptional({ example: 1 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  parkingSpaces?: number;

  @ApiPropertyOptional({ example: true, default: false })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
