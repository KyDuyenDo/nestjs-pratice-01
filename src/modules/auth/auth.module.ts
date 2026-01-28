import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { BcryptService } from "./bcrypt.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [AuthService, BcryptService],
    controllers: [AuthController]
})
export class AuthModule { }
