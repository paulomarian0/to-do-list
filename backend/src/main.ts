import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3333;
  await app.listen(port);

  console.log(`Running on port ${port}`);
}
bootstrap();
