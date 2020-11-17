import { InputType, Field } from 'type-graphql';
import { Length, IsEmail, IsPhoneNumber } from 'class-validator';
import { IsUserAlreadyExist } from '../register/UserExist';

@InputType()
export class ProfileInput {
  @Field({ nullable: true })
  @Length(1, 254)
  name?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsUserAlreadyExist({
    message: 'The email already exists please use a different email'
  })
  email?: string;

  @Field({ nullable: true })
  @IsPhoneNumber('any')
  @IsUserAlreadyExist({
    message: 'The number already exists please use a different number'
  })
  phone?: string;

  @Field({ nullable: true })
  @Length(8, 255)
  password?: string;
}
