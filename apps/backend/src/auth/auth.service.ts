import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async register(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    // Hash Password
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    //
    return createUserDto;
  }
}
