import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Basic API Test')
    .setDescription('API docs')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('openapi', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  app.use('/docs', apiReference({ content: document, theme: 'deepSpace' }));
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  await app.listen(process.env.PORT || 3000);

  console.info(`Swagger: http://localhost:${process.env.PORT || 3000}/docs`);
}
void bootstrap();
