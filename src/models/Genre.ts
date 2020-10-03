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
import { Movie } from './Movie';

@ObjectType()
@Entity()
export class Genre extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => Array, { nullable: true })
  @ManyToMany(() => Movie, (movie: Movie) => movie.id)
  @JoinTable()
  movies: Movie[];

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
