import { InputType, Field } from 'type-graphql';
import { Length, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GenreInput {
  @Field()
  @IsNotEmpty()
  @Length(1, 254)
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description: string;
}
