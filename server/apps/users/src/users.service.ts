import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async register(RegisterDto: RegisterDto ) {
    const { name, email, password} = RegisterDto;
    const user = {
      name,
      email,
      password,
    };
    return user;
  }

  async Login( LoginDto: LoginDto){
    const {email, password} = LoginDto;
    const user = {
      email,
      password,
    };
    return user;
  }
  async getUser() {
    const users = [
      {
        id:'1',
        name:'test1',
        email:'test@gmail.com',
        password:'test1234'
      }
    ];
    return users;
  }
}
