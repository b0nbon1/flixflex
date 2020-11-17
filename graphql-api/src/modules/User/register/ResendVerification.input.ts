import { InputType, Field } from 'type-graphql';
import {
  IsNotEmpty,
  ValidateIf,
  IsEmail,
  IsPhoneNumber
} from 'class-validator';

@InputType()
export class ResendInput {
  @Field()
  useEmail: boolean;

  @Field()
  @ValidateIf((o) => o.useEmail === true)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @ValidateIf((o) => o.useEmail === false)
  @IsPhoneNumber('any')
  @IsNotEmpty()
  phone: string;
}
