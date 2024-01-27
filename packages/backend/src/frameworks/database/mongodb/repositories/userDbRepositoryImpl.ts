import { User } from "../models";

const userDbRepositoryImpl = () => {
  const findByEmail = (email: string) => {
    return User.findOne({ email: email?.toLowerCase(), isDeleted: false }).select("email").lean();
  };

  const create = () => {
    const newUser = new User({});
    return newUser.save();
  };

  return { findByEmail, create };
};

export type UserDbRepositoryImplType = typeof userDbRepositoryImpl;
export default userDbRepositoryImpl;
