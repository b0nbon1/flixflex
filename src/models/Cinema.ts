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
import { Location } from './Location';
import { User } from './User';

@Entity()
export class Cinema extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  capacity: number;

  @Column()
  isVerified: boolean;

  @Column()
  isDeleted: boolean;

  @Column()
  averageRating: number;

  @Column()
  status: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
