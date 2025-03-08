import { Test, TestingModule } from '@nestjs/testing';
import { MeanPriceService } from './mean-price.service';

describe('MeanPriceService', () => {
  let service: MeanPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeanPriceService],
    }).compile();

    service = module.get<MeanPriceService>(MeanPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
