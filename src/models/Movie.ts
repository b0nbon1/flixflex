import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  length: string;

  @Column('text', { unique: true })
  dateOfRelease: string;

  @Column()
  status: string;

  @Column()
  price: string;

  @Column()
  imageUrl: string;

  @Column()
  discount: string;

  @Column()
  type: string;

  @Column()
  traillerUrl: string;

  @Column('text')
  actors: string;

  @Column('text')
  summary: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
