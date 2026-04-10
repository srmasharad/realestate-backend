import { Module } from '@nestjs/common';

import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { PublicPropertiesController } from './public-properties.controller';

@Module({
  providers: [PropertiesService],
  controllers: [PropertiesController, PublicPropertiesController],
})
export class PropertiesModule {}
