import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { User } from '../../../models/User';
import { RegisterInput } from './RegisterInput';
import {
  registerService,
  verificationService,
  resendVerificationService
} from './Register.service';
import { VerifyInput } from './verify.input';
import { ResendInput } from './ResendVerification.input';
import { Context } from '../../../types/Context';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg('data') { email, name, useEmail, phone, password }: RegisterInput
  ): Promise<User> {
    return registerService(name, useEmail, email, phone, password);
  }

  @Mutation(() => User)
  async verifyAccount(
    @Arg('data') { verificationCode, id }: VerifyInput,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    const user = await verificationService(verificationCode, id);
    ctx.req.session.userId = user.id;
    return user;
  }

  @Mutation(() => User)
  async resendVerification(
    @Arg('data') { email, phone, useEmail }: ResendInput
  ): Promise<User> {
    return resendVerificationService(email, phone, useEmail);
  }
}
