import { BadRequestException, ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { BcryptService } from "./bcrypt.service";
import { SignUpResponse } from "src/common/interfaces/login.interface";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly bcryptService: BcryptService
    ) { }
    async login(email: string, password: string): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { email }
        });
        if (!user) { throw new NotFoundException("Email or password is not correct!") };

        const isPasswordMatch = await this.bcryptService.compare(
            password,
            user.password,
        );
        if (!isPasswordMatch) {
            throw new BadRequestException('Invalid password');
        }

        return user;
    }

    async signUp(email: string, password: string, username: string): Promise<SignUpResponse> {
        try {
            const existingUser = await this.userRepository.findOne({ where: { email } });
            if (existingUser) throw new ConflictException('email already exists');
            const hashedPassword = await this.bcryptService.hash(password);
            const user = new User();
            user.email = email;
            user.password = hashedPassword;
            user.username = username;
            await this.userRepository.save(user);
            return {
                status: "successfully!",
                username: user.username,
                email: user.email
            }
        } catch (error) {
            throw error;
        }
    }
}
