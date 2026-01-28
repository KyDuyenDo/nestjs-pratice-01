import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginResponse,
  SignUpResponse,
} from 'src/common/interfaces/login.interface';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<LoginResponse> {
    const { email, password } = loginDto;
    const user = await this.authService.login(email, password);
    return {
      status: 'successfully!',
      email: user.email,
    };
  }

  @Post('/signUp')
  async signUp(
    @Body() signUpDto: SignUpDto,
  ): Promise<SignUpResponse> {
    const { username, password, email } = signUpDto;
    const newUser = await this.authService.signUp(email, password, username);
    return newUser;
  }
}
