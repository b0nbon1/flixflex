/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Genre } from './Genre';

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  length: string;

  @Field()
  @Column('text')
  dateOfRelease: string;

  @Field({ nullable: true })
  @Column()
  status?: string;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true })
  imageUrl?: string[];

  @Field({ nullable: true })
  @Column()
  trailerUrl?: string;

  @Field(() => [String])
  @Column('text', { array: true })
  cast: string[];

  @Field()
  @Column()
  rated: string;

  @Field()
  @Column('text')
  summary: string;

  @Field(() => [String])
  @Column('text', { array: true })
  creator: string[];

  @Field(() => [], { nullable: true })
  @ManyToMany(() => Genre, (genre: Genre) => genre.id)
  @JoinTable()
  genres: Genre[];

  @Field({ nullable: true })
  @Column('boolean', { default: false })
  isDeleted?: boolean;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;
}
