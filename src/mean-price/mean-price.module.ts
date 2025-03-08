import { Module } from '@nestjs/common';
import { MeanPriceService } from './mean-price.service';
import { MeanPriceController } from './mean-price.controller';

@Module({
  providers: [MeanPriceService],
  controllers: [MeanPriceController]
})
export class MeanPriceModule {}
