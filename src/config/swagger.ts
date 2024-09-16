import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('Winston Logger')
    .setDescription('Thie Winston logger API easily query the database.')
    .setVersion('1.0')
    .build();

  return SwaggerModule.createDocument(app, config);
};
