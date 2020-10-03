import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { User } from './User';

@Entity()
export class CinemaRating extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  cinemaId: string;

  @Field()
  @Column()
  stars: string;

  @Field()
  @Column('text')
  feedback: string;

  @Field()
  @ManyToOne(() => User, (user) => user.id)
  userId: User;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
