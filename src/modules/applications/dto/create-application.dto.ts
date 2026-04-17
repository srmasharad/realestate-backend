import {
  IsOptional,
  IsString,
} from 'class-validator';

import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({ example: 'b8d3d52c-2c41-4b9e-9d88-0f3f9c4c1234' })
  @IsString()
  propertyId!: string;

  @ApiPropertyOptional({ example: 'I am interested in this property and would like to be considered.' })
  @IsOptional()
  @IsString()
  message?: string;
}
