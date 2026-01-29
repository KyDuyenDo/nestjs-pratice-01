import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsValidEmail } from 'src/common/decorators/login.decorator';

export class DeleteUserlDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
