import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Location } from './Location';
import { User } from './User';

@ObjectType()
@Entity()
export class Cinema extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  capacity: number;

  @Field()
  @Column()
  isVerified: boolean;

  @Field()
  @Column()
  isDeleted: boolean;

  @Field()
  @Column({ default: 5 })
  averageRating: number;

  @Field()
  @Column()
  status: string;

  @Field()
  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Field()
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
