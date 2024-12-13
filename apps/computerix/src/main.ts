import { NestFactory } from '@nestjs/core';
import { ComputerixModule } from './computerix.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(ComputerixModule);
  app.setGlobalPrefix('computerix/'); // Set base URL for app1

  // // Get the port from the environment variables
  // const configService = app.get(ConfigService);
  // console.log('Current working directory:', process.cwd());
  // console.log(configService, "configService");

  // const port = configService.get<number>('PORT') || 3000;  // Default to 3000 if PORT is not set

  const port = 3001;  // Default to 3000 if PORT is not set

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
