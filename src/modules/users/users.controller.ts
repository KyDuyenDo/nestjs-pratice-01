import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { EditDetailInterface } from 'src/common/interfaces/login.interface';
import { EditDetailDto } from './dto/edit.detail.dto';
import { DeleteUserlDto } from './dto/delete.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  async getUser(@Param('id') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }
  @Put('/edit')
  async editUser(
    @Body() editDetail: EditDetailDto,
  ): Promise<EditDetailInterface> {
    return this.usersService.editUsername(editDetail.username, editDetail.id);
  }
  @Delete('/delete')
  async deleteUser(
    @Body() deleteDetail: DeleteUserlDto,
  ): Promise<{ status: string }> {
    return this.usersService.deleteUser(deleteDetail.id);
  }
}
