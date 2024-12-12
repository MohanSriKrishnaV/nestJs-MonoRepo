import { Injectable } from '@nestjs/common';

@Injectable()
export class ComputerixService {
  getHello(): string {
    return 'Hello World computerix!';
  }
}
