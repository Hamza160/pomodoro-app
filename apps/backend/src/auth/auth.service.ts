import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(createUserDto: CreateUserDto) {
    // Hash Password
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return await this.userService.createUser(createUserDto);
  }
}
