import { MailModule } from 'src/common/mail/mail.module';

import { Module } from '@nestjs/common';

import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  imports: [MailModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
