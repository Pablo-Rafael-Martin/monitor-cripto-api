import { Test, TestingModule } from '@nestjs/testing';
import { MeanPriceController } from './mean-price.controller';

describe('MeanPriceController', () => {
  let controller: MeanPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeanPriceController],
    }).compile();

    controller = module.get<MeanPriceController>(MeanPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
