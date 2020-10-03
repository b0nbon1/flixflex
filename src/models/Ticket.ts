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

import { Seat } from './Seat';
import { Show } from './Shows';
import { Payment } from './Payment';

@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @OneToOne(() => Show)
  @JoinColumn()
  showId: Show;

  @Field()
  @OneToOne(() => Payment)
  @JoinColumn()
  paymentId: Payment;

  @Field()
  @Column()
  date: Date;

  @Field()
  @OneToOne(() => Seat)
  @JoinColumn()
  seatId: Seat;

  @Field()
  @Column()
  time: string;

  @Field()
  @Column()
  isValid: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
