import { Module } from '@nestjs/common';
import { ComputerixController } from './computerix.controller';
import { ComputerixService } from './computerix.service';

@Module({
  imports: [],
  controllers: [ComputerixController],
  providers: [ComputerixService],
})
export class ComputerixModule {}
