import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

import { Cinema } from './Cinema';
import { Movie } from './Movie';

@ObjectType()
@Entity()
export class Show extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @ManyToOne(() => Cinema)
  @JoinColumn()
  cinema: Cinema;

  @Field()
  @Column('date')
  datetime: Date;

  @Field()
  @ManyToOne(() => Movie)
  @JoinColumn()
  movie: Movie;

  @Field({ nullable: true })
  @Column('boolean', { default: false })
  isDeleted?: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
