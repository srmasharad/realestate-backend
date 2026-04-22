import { CloudinaryModule } from 'src/common/cloudinary/cloudinary.module';

import { Module } from '@nestjs/common';

import { MeController } from './me.controller';
import { MeService } from './me.service';

@Module({
  imports: [CloudinaryModule],
  providers: [MeService],
  controllers: [MeController],
})
export class MeModule {}
