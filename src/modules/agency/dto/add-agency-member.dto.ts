import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { AgencyMemberRole } from 'src/generated/prisma';

import { ApiProperty } from '@nestjs/swagger';

export class AddAgencyMemberDto {
  @ApiProperty({ example: 'John Agent' })
  @IsString()
  @IsNotEmpty()
  fullName!: string;

  @ApiProperty({ example: 'john.agent@example.com' })
  @IsEmail()
  email!: string;

  @IsPhoneNumber('AU')
  @ApiProperty({ example: '+61412345678', required: false })
  @IsOptional()
  phone?: string;

  @IsEnum(AgencyMemberRole)
  @ApiProperty({ enum: AgencyMemberRole, example: AgencyMemberRole.AGENT })
  role!: AgencyMemberRole;
}
