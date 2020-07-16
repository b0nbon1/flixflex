import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity()
export class CinemaRating extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cinemaId: string;

  @Column()
  stars: string;

  @Column('text')
  feedback: string;

  @ManyToOne(() => User, (user) => user.id)
  userId: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
