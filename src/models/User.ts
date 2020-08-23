import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

// eslint-disable-next-line no-shadow
export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

// eslint-disable-next-line no-shadow
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
  @Column({ nullable: true })
  picture?: string;

  @Field({ nullable: true })
  @Column('text', { nullable: true, unique: true })
  email?: string;

  @Column({ nullable: true })
  password?: string;

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
  @Column({ default: false })
  active: boolean;

  @Field(() => [String], { nullable: true })
  @Column({
    type: 'enum',
    enum: RoleEnum,
    array: true,
    default: [RoleEnum.USER]
  })
  role: RoleEnum[];

  @Field()
  @Column({ nullable: true })
  resetCode: number;

  @Field()
  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
