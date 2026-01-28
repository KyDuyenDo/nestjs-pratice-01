import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginResponseInterface,
  SignUpResponseInterface,
} from 'src/common/interfaces/login.interface';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<LoginResponseInterface> {
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
  ): Promise<SignUpResponseInterface> {
    const { username, password, email } = signUpDto;
    return await this.authService.signUp(email, password, username);
  }
}
