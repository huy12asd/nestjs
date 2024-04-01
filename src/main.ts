import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodoModule);
  app.useStaticAssets(join(__dirname, 'public'));
  await app.listen(3000);
}
bootstrap();