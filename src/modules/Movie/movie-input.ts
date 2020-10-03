import { InputType, Field } from 'type-graphql';
import {
  Length,
  IsNotEmpty,
  IsInt,
  IsDate,
  IsIn,
  ArrayNotEmpty,
  IsString
} from 'class-validator';

@InputType()
export class MovieInput {
  @Field()
  @IsNotEmpty()
  @Length(1, 254)
  name: string;

  @Field()
  @IsInt()
  @IsNotEmpty()
  length: string;

  @Field()
  @IsDate()
  @IsNotEmpty()
  dateOfRelease: string;

  @Field()
  @IsIn(['released', 'coming soon'])
  status?: string;

  @Field(() => [String])
  @ArrayNotEmpty()
  imageUrl: string[];

  @Field()
  @IsNotEmpty()
  trailerUrl: string;

  @Field(() => [String])
  @ArrayNotEmpty()
  cast: string[];

  @Field(() => [String])
  @ArrayNotEmpty()
  creator: string[];

  @Field()
  @IsNotEmpty()
  summary: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  rated: string;

  @Field(() => [String], { nullable: true })
  genres: [];
}
