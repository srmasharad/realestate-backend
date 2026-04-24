import Joi from 'joi';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CloudinaryModule } from './common/cloudinary/cloudinary.module';
import { MailModule } from './common/mail/mail.module';
import { PrismaModule } from './database/prisma.module';
import { AgencyModule } from './modules/agency/agency.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/health/health.module';
import { MeModule } from './modules/me/me.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { UsersModule } from './modules/users/users.module';
import { AdminModule } from './modules/admin/admin.module';

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
        RESEND_API_KEY: Joi.string().required(),
        MAIL_FROM: Joi.string().required(),
        MAIL_DEV_TO: Joi.string().required(),
        APP_BASE_URL: Joi.string().required(),
        FRONTEND_URL: Joi.string().required(),
        CLOUDINARY_CLOUD_NAME: Joi.string().required(),
        CLOUDINARY_API_KEY: Joi.string().required(),
        CLOUDINARY_API_SECRET: Joi.string().required(),
        ADMIN_NOTIFICATION_EMAIL: Joi.string().email().optional(),
      }),
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    HealthModule,
    PropertiesModule,
    MeModule,
    ApplicationsModule,
    MailModule,
    CloudinaryModule,
    AgencyModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
