import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { EditDetailInterface } from 'src/common/interfaces/login.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }

  async editUsername(
    username: string,
    id: string,
  ): Promise<EditDetailInterface> {
    const res = await this.userRepository.update(
      { id: id },
      { username: username },
    );
    const updatedUser = await this.userRepository.findOneBy({ id });
    if (!updatedUser || res.affected !== 1)
      throw new NotFoundException('User not exist');
    return {
      username: updatedUser.username,
      id: updatedUser.id,
    };
  }

  async deleteUser(id: string): Promise<{ status: string }> {
    const res = await this.userRepository.delete(id);
    if (res.affected !== 1) throw new NotFoundException('User not exist');
    return { status: 'Delete successfully!' };
  }
}
