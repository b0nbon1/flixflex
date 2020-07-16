import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne
} from 'typeorm';
import { CinemaRoom } from './CinemaRoom';

@Entity()
export class Seat extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  class: string;

  @Column()
  isBooked: boolean;

  @ManyToOne(() => CinemaRoom, (cinemaRoom) => cinemaRoom.id)
  roomId: CinemaRoom;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
