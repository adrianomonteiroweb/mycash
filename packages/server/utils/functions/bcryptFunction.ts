import bcrypt from 'bcrypt';

export const bcryptFunction = async (password: any, processLevel: number) =>
  await bcrypt.hash(password, processLevel);
