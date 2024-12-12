import { Module } from '@nestjs/common';
import { ComputerixController } from './computerix.controller';
import { ComputerixService } from './computerix.service';
import { ConfigModule } from '@nestjs/config';
import path from 'path';

@Module({
  imports: [
    // console.log('Current working directory:', process.cwd());

    // ConfigModule.forRoot({
    //   isGlobal: true,  // Makes the config globally accessible
    //   envFilePath: [path.resolve(__dirname, '..', '..', '.env')],
    // }),
  ],
  controllers: [ComputerixController],
  providers: [ComputerixService],
})
export class ComputerixModule {}
