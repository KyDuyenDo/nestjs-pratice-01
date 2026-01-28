import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { EditDetailInterface } from 'src/common/interfaces/login.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  async getUser(@Param('id') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }
  @Put('/edit')
  async editUser(@Body() body: any): Promise<EditDetailInterface> {
    const { username, id } = body;
    return this.usersService.editUsername(username, id);
  }
  @Delete('/delete')
  async deleteUser(@Body() body: any): Promise<{ status: string }> {
    const { id } = body;
    return this.usersService.deleteUser(id);
  }
}
