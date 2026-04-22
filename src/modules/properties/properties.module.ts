import { CloudinaryModule } from 'src/common/cloudinary/cloudinary.module';

import { Module } from '@nestjs/common';

import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { PublicPropertiesController } from './public-properties.controller';

@Module({
  imports: [CloudinaryModule],
  providers: [PropertiesService],
  controllers: [PropertiesController, PublicPropertiesController],
})
export class PropertiesModule {}
