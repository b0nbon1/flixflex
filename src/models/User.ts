import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

enum Gender {
  Male,
  Female,
  Other
}

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column('text', { nullable: true, unique: true })
  email?: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column('text', { nullable: true, unique: true })
  phone?: string;

  @Field()
  @Column({ nullable: true })
  verificationCode: number;

  @Field(() => String)
  @Column('text', { nullable: true })
  gender: Gender;

  @Field()
  @Column('date', { nullable: true })
  dateOfBirth: Date;

  @Field()
  @Column({ default: false })
  active: boolean;

  @Field()
  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
