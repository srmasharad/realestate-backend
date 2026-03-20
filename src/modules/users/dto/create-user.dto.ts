import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Sharad Sharma' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'sharad@example.com' })
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ example: '0400000000' })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({ example: '123456', minLength: 8 })
  @IsOptional()
  @MinLength(8)
  password?: string;
}
