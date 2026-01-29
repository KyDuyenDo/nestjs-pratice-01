import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsValidEmail } from 'src/common/decorators/login.decorator';

export class EditDetailDto {
  @IsNotEmpty()
  @IsString()
  id: string;
  @IsNotEmpty()
  @IsString()
  username: string;
}
