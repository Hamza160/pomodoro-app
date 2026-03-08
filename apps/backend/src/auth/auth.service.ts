import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    // Hash Password
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userService.createUser(createUserDto);
    return this.jwtService.sign({ id: user.id, email: user.email });
  }
}
