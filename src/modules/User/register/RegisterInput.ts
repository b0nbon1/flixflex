import { InputType, Field } from 'type-graphql';
import {
  Length,
  IsEmail,
  ValidateIf,
  IsNotEmpty,
  IsPhoneNumber
} from 'class-validator';
import { IsUserAlreadyExist } from './UserExist';

@InputType()
export class RegisterInput {
  @Field()
  useEmail: boolean;

  @Field()
  // @Length(1, 254)
  name: string;

  @Field()
  @ValidateIf((o) => o.useEmail === true)
  @IsNotEmpty()
  @IsEmail()
  @IsUserAlreadyExist({
    message: 'The email already exists please use a different email or login'
  })
  email: string;

  @Field()
  @ValidateIf((o) => o.useEmail === false)
  @IsPhoneNumber('any')
  @IsNotEmpty()
  @IsUserAlreadyExist({
    message: 'The phone already exists please use a different phone or login'
  })
  phone: string;

  @Field()
  @IsNotEmpty()
  @Length(8, 255)
  password: string;
}
