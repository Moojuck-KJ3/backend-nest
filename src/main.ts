import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useWebSocketAdapter(new IoAdapter(app));
  
  const config = new DocumentBuilder()
    .setTitle('맛집 취향 분석 API Docs')
    .setDescription('천하무적팀 Swagger API 명세서')
    .setVersion('1.0')
    .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
        'access-token',
      )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.enableCors();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(8080);
}
bootstrap();
