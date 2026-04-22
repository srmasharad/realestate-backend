import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UploadPropertyMediaDto {
  @ApiPropertyOptional({ example: 0, description: 'Starting sort order for uploaded images' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  sortOrderStart?: number;
}
