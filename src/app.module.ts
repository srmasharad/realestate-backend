import Joi from 'joi';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
        API_PREFIX: Joi.string().default('api'),
        API_VERSION: Joi.string().default('1'),
        DATABASE_URL: Joi.string().required(),
        CORS_ORIGINS: Joi.string().required(),
        JWT_ACCESS_SECRET: Joi.string().required(),
        JWT_ACCESS_EXPIRES_IN: Joi.string().default('900'),
      }),
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
