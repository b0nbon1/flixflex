import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> =>
  bcrypt.hash(password, 12);

export const compareHash = async (
  password: string,
  pass: string
): Promise<boolean> => bcrypt.compare(password, pass);
