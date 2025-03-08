import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import UserRepository from './repository/user.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
