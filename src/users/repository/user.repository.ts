import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { PrimaryRepository } from 'src/infra/database/primary.repository';

@Injectable()
class UserRepository extends PrimaryRepository<User> {
  constructor(@Inject('DATA_SOURCE_SQL') dataSource: DataSource) {
    super(dataSource, User);
  }
}

export default UserRepository;
