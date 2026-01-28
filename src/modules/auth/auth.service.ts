import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    async login(email: string, password: string) : Promise<User>  {
        const user = await this.userRepository.findOne({
            where: { email, password }
        });
        if (!user) { throw new NotFoundException("Email or password is not correct!") };
        return user;
    }
}
