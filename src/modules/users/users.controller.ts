import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get('/:id')
    async getUser(@Param('id') userId: string): Promise<User> {
        return this.usersService.getUserById(userId)
    }
}