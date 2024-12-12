import { Controller, Get } from '@nestjs/common';
import { ComputerixService } from './computerix.service';

@Controller()
export class ComputerixController {
  constructor(private readonly computerixService: ComputerixService) {}

  @Get()
  getHello(): string {
    return this.computerixService.getHello();
  }
}
