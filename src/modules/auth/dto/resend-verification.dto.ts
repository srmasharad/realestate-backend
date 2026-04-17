import { IsEmail } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ResendVerificationDto {
  @ApiProperty({
    example: 'example@example.coom',
  })
  @IsEmail()
  email!: string;
}
