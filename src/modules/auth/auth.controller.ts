import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LoginResponseInterface,
  SignUpResponseInterface,
} from 'src/common/interfaces/login.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseInterface> {
    const user = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );
    return {
      status: 'successfully!',
      email: user.email,
    };
  }

  @Post('/sign-up')
  async signUp(@Body() signUpDto: RegisterDto): Promise<SignUpResponseInterface> {
    return await this.authService.signUp(
      signUpDto.email,
      signUpDto.password,
      signUpDto.username,
    );
  }
}
