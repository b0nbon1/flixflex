import { InputType, Field } from 'type-graphql';
import { IsNotEmpty, IsDateString, ArrayNotEmpty } from 'class-validator';

@InputType()
export class ShowInput {
  @Field()
  @IsDateString()
  @IsNotEmpty()
  datetime: string;

  @Field(() => [String])
  @ArrayNotEmpty()
  imageUrl: string[];
}
