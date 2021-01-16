import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class GeoJson {
  @Field()
  lat: number;

  @Field()
  long: number;
}

@ObjectType()
@Entity()
export class Location extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => GeoJson)
  @Column('simple-json')
  geolocation: GeoJson;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
