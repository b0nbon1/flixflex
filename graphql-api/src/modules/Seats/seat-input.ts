import { InputType, Field } from 'type-graphql';
import { Length, IsNotEmpty, IsInt, IsString } from 'class-validator';
import { Seat } from '../../models/Seat';

@InputType()
export class SeatInput implements Partial<Seat> {
  @Field()
  @IsNotEmpty()
  @Length(1, 254)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsInt()
  column: number;

  @Field()
  @IsNotEmpty()
  @IsInt()
  row: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  side: string;
}
