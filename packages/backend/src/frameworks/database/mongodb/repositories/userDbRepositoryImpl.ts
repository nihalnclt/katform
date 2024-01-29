import { CreateUser } from "../../../../core/types";
import { User } from "../models";

const userDbRepositoryImpl = () => {
  const findByEmail = (email: string) => {
    return User.findOne({ email: email?.toLowerCase(), isDeleted: false });
  };

  const create = (user: CreateUser) => {
    const newUser = new User({ name: user.name, email: user.email, password: user.password });
    return newUser.save();
  };

  return { findByEmail, create };
};

export type UserDbRepositoryImplType = typeof userDbRepositoryImpl;
export default userDbRepositoryImpl;
