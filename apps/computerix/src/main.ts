import { NestFactory } from '@nestjs/core';
import { ComputerixModule } from './computerix.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerixModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
