import { IsOptional, IsString, IsUrl } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SendLeaseAgreementDto {
  @ApiProperty({ example: 'https://docs.example.com/lease.pdf' })
  @IsUrl()
  agreementUrl!: string;

  @ApiProperty({ example: 'DocuSign, PandaDoc', required: false })
  @IsOptional()
  @IsString()
  externalProvider?: string;

  @ApiProperty({ example: 'envelope_123', required: false })
  @IsOptional()
  @IsString()
  externalReference?: string;
}
