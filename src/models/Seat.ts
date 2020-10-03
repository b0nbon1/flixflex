import { Field } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { Cinema } from './Cinema';

@Entity()
export class Seat extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  class: string;

  @Field()
  @Column()
  isBooked: boolean;

  @Field()
  @ManyToOne(() => Cinema, (cinema) => cinema.id)
  cinemaId: Cinema;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
