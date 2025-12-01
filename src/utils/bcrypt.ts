import { hash, compare } from "bcrypt";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, Number(process.env.SALT!));

  return hashedPassword;
};

const comparePassword = async (password: string, hashedPassword: string) => {
  const isPasswordTrue = await compare(password, hashedPassword);

  return isPasswordTrue;
};

export { hashPassword, comparePassword };
