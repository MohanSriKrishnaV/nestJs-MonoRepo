import { Test, TestingModule } from '@nestjs/testing';
import { ComputerixController } from './computerix.controller';
import { ComputerixService } from './computerix.service';

describe('ComputerixController', () => {
  let computerixController: ComputerixController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ComputerixController],
      providers: [ComputerixService],
    }).compile();

    computerixController = app.get<ComputerixController>(ComputerixController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(computerixController.getHello()).toBe('Hello World!');
    });
  });
});
