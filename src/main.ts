import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import document from './config/swagger';
import { AppModule } from './app.module';
import { WinstonLogger } from './logger/winston-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(WinstonLogger));

  // Swagger setup
  SwaggerModule.setup('swagger', app, document(app));

  await app.listen(3000);
}
bootstrap();
