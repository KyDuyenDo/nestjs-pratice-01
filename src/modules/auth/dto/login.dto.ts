import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsValidEmail } from 'src/common/decorators/login.decorator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @IsValidEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
