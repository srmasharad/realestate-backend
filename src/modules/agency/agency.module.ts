import { MailModule } from 'src/common/mail/mail.module';

import { Module } from '@nestjs/common';

import { AgencyController } from './agency.controller';
import { AgencyService } from './agency.service';

@Module({
  imports: [MailModule],
  controllers: [AgencyController],
  providers: [AgencyService],
})
export class AgencyModule {}
