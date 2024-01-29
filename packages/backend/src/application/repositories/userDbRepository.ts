import { CreateUser } from "../../core/types";
import { UserDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";

const userDbRepository = (repository: ReturnType<UserDbRepositoryImplType>) => {
  const findByEmail = (email: string) => repository.findByEmail(email);
  const create = (user: CreateUser) => repository.create(user);

  return { findByEmail, create };
};

export default userDbRepository;
export type UserDbRepositoryType = typeof userDbRepository;
