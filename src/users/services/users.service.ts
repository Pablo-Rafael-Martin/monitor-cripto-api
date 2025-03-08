import { Injectable } from '@nestjs/common';
import UserRepository from '../repository/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    return this.userRepository.find();
  }

  async createUser(data: { login: string; password: string }): Promise<User> {
    return this.userRepository.save(data);
  }
}
