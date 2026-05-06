import express from 'express';
import { readFileSync } from 'fs';
import helmet from 'helmet';
import { join } from 'path';

import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { TransformResponseInterceptor } from './common/interceptors/transform-response.interceptor';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.use('/api/v1/payments/webhook', express.raw({ type: 'application/json' })); // Stripe webhook endpoint must receive raw body

  app.use(helmet());

  const crossOrigins = (process.env.CORS_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.enableCors({
    origin: crossOrigins,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new TransformResponseInterceptor());

  const apiPrefix = process.env.API_PREFIX ?? 'api';
  const apiVersion = process.env.API_VERSION ?? '1';
  const port = process.env.PORT ?? 3000;

  app.setGlobalPrefix(apiPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: apiVersion,
  });

  const packageJsonPath = join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as {
    version?: string;
  };

  const appVersion = packageJson.version ?? '0.0.1';

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Real Estate Backend API')
    .setDescription('Production-ready backend API for the Real Estate platform')
    .setVersion(appVersion)
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(`${apiPrefix}/docs`, app, swaggerDocument);

  await app.listen(port);

  const baseUrl = await app.getUrl();
  const apiBaseUrl = `${baseUrl}/${apiPrefix}`;
  const swaggerUrl = `${baseUrl}/${apiPrefix}/docs`;

  logger.log(`Real Estate Backend API running at ${apiBaseUrl}`);
  logger.log(`Swagger Docs available at ${swaggerUrl}`);
  logger.log(`Environment: ${process.env.NODE_ENV ?? 'development'}`);
  logger.log(`API Version: v${apiVersion}`);
}
bootstrap().catch((error: unknown) => {
  const logger = new Logger('Bootstrap');

  if (error instanceof Error) {
    logger.error(`Failed to start application: ${error.message}`, error.stack);
  } else {
    logger.error('Failed to start application due to an unknown error');
  }

  process.exit(1);
});
