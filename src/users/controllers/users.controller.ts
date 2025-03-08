import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() data: { login: string; password: string }) {
    return this.userService.createUser(data);
  }
}
