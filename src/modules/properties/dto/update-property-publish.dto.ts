import { IsBoolean } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdatePropertyPublishDto {
  @ApiProperty({
    example: true,
    description: 'Set true to publish the property, false to unpublish it',
  })
  @IsBoolean()
  isPublished!: boolean;
}
