import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const PORT = config.get('server.port')
  const HOST = config.get('server.host')
  const PROTOCOL = config.get('server.https') ? "https" : "http"
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  Logger.debug(`[PORT]: ${PORT}`)
  Logger.debug(`[Environment] ${process.env.NODE_ENV || 'development'}`)
  Logger.debug(`[SERVER AT]: ${PROTOCOL}://${HOST}:${PORT}/graphql`)
}
bootstrap();
