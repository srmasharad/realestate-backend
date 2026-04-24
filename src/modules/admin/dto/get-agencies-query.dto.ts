import { IsEnum, IsOptional } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { AgencyStatus } from 'src/generated/prisma';

export class GetAgenciesQueryDto extends PaginationQueryDto {
  @IsOptional()
  @IsEnum(AgencyStatus)
  status?: AgencyStatus;
}
