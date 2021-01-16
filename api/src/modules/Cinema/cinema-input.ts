import { InputType, Field } from 'type-graphql';
import { Length, IsNotEmpty, IsInt, IsIn } from 'class-validator';
import { Cinema } from '../../models/Cinema';

@InputType()
export class Geo {
  @Field()
  lat: number;

  @Field()
  long: number;
}

@InputType()
export class CinemaInput implements Partial<Cinema> {
  @Field({ nullable: true })
  @IsNotEmpty()
  @Length(1, 254)
  name?: string;

  @Field({ nullable: true })
  @IsInt()
  capacity?: number;

  @Field({ nullable: true })
  @IsIn(['open', 'closed'])
  status?: string;

  @Field(() => Geo, { nullable: true })
  geolocation?: Geo;

  @Field(() => [String], { nullable: true })
  imageUrls?: string[];
}
