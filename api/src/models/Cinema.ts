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
import { User } from './User';

@ObjectType()
export class GeoJson {
  @Field()
  lat: number;

  @Field()
  long: number;
}

@ObjectType()
@Entity()
export class Cinema extends BaseEntity {
  @Field(() => ID, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column()
  capacity: number;

  @Field({ nullable: true })
  @Column({ default: false })
  isVerified: boolean;

  @Field({ nullable: true })
  @Column({ default: false })
  isDeleted: boolean;

  @Field({ nullable: true })
  @Column({ default: 5 })
  averageRating: number;

  @Field({ nullable: true })
  @Column()
  status: string;

  @Field(() => GeoJson, { nullable: true })
  @Column('simple-json')
  geolocation: GeoJson;

  @Field(() => [String], { nullable: true })
  @Column({
    type: 'simple-array',
    array: true,
    nullable: true,
  })
  imageUrls: string[];

  @Field({ nullable: true })
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
