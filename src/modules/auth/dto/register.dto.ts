import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'Sharad Sharma' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'sharad@example.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ example: '0400000001' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ example: '12345678', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
}
