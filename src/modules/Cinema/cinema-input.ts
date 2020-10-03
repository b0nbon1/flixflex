import { InputType, Field } from 'type-graphql';
import { Length, IsNotEmpty, IsInt, IsIn } from 'class-validator';
import { Cinema } from '../../models/Cinema';

@InputType()
export class CinemaInput implements Partial<Cinema> {
  @Field()
  @IsNotEmpty()
  @Length(1, 254)
  name: string;

  @Field()
  @IsInt()
  capacity: number;

  @Field()
  @IsIn(['open', 'closed'])
  status?: string;
}
