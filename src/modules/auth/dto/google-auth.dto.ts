import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class GoogleAuthDto {
  @ApiProperty({ example: 'google-id-token-from-frontend' })
  @IsString()
  idToken!: string;
}
