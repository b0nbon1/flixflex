import { InputType, Field } from 'type-graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class VerifyInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  verificationCode: number;

  @Field()
  @IsNotEmpty()
  id: string;
}
