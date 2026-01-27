import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
    async getUserById(userId: string): Promise<User> {
        const user = await this.userRepository.findOne({where: { id: userId}})
        if(!user){ throw new Error('User not found') } // Exception there
        return user
    }
}
