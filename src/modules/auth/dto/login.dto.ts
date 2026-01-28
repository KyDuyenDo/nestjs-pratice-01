import { IsEmail, IsString } from "class-validator";
import { IsValidEmail } from "src/common/decorators/login.decorator";

export class LoginDto {
    @IsEmail()
    @IsValidEmail()
    email: string
    @IsString()
    password: string
}
