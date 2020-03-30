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
import { Seat } from './Seat';
import { Movie } from './Movie';
import { Payment } from './Payment';
@Entity()
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne((type) => Movie)
  @JoinColumn()
  movieId: Movie;

  @OneToOne((type) => Payment)
  @JoinColumn()
  paymentId: Payment;

  @Column()
  date: Date;

  @OneToOne((type) => Seat)
  @JoinColumn()
  seatId: Seat;

  @Column()
  time: string;

  @Column()
  isValid: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
