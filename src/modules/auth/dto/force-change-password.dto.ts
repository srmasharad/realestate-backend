import { IsString, MinLength, ValidateIf } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class ForceChangePasswordDto {
  @ApiProperty({ example: 'NewPassword123!' })
  @IsString()
  @MinLength(8)
  newPassword!: string;

  @ApiProperty({ example: 'NewPassword123!' })
  @IsString()
  @ValidateIf((o: ForceChangePasswordDto) => o.confirmPassword !== o.newPassword)
  confirmPassword!: string;
}
