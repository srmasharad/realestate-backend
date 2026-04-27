import { IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class AssignAgentDto {
  @ApiProperty({
    example: '23ab46ca-8e17-4598-8541-db94dad78e6f',
  })
  @IsUUID()
  agencyMemberId!: string;
}
