import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { MeanPriceModule } from './mean-price/mean-price.module';

@Module({
  imports: [UsersModule, HealthModule, MeanPriceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
