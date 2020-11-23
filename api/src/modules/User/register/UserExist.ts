import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';

import { User } from '../../../models/User';

@ValidatorConstraint({ async: true })
export class IsUserAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(emailOrPhone: string): Promise<boolean> {
    const user = await User.findOne({
      where: [
        { email: emailOrPhone, active: true },
        { phone: emailOrPhone, active: true }
      ]
    });

    if (user) return false;
    return true;
  }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUserAlreadyExistConstraint
    });
  };
}
