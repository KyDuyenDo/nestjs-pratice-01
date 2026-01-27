import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginResponse } from "src/common/interfaces/login.interface";
import { LoginValidation } from "./validation/login.validation";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/login')
    async login(@Body(new LoginValidation()) loginDto: LoginDto): Promise<LoginResponse> {
        const user = await this.authService.login(loginDto.email, loginDto.password)
        return {
            status: "successfully!",
            email: user.email
        }
    }
}

