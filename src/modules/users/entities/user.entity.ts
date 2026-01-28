import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @CreateDateColumn({ name: 'create_at' })
  createAt: Date;
  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date;
}
