import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    public async create(createUserDto: CreateUserDto): Promise<User> {
        const saveUser = Object.assign(new User(), { ...createUserDto, hashedPassword: createUserDto.password });

        return this.usersRepository.save(saveUser);
    }

    public async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public async findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id });
    }

    public async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
        await this.usersRepository.update(id, updateUserDto);
        return this.findOne(id);
    }


}
