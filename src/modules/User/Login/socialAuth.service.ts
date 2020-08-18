import { User } from '../../../models/User';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const upsertUser = async ({ email, name, picture }): Promise<User> => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return user;
  }

  const newUser = new User();

  newUser.name = name;
  newUser.email = email;
  newUser.active = true;
  newUser.picture = picture;

  return newUser.save();
};
