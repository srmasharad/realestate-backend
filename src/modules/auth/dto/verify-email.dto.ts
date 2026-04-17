import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class VerifyEmailDto {
  @ApiProperty({ example: 'a3f4c5d6e7f8g9h0...' })
  @IsString()
  token!: string;
}
