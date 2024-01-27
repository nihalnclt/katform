import { UserDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";

const userDbRepository = (repository: ReturnType<UserDbRepositoryImplType>) => {
  // const findById = (id: string) => repository.findById(id);

  return {};
};

export default userDbRepository;
export type UserDbRepositoryType = typeof userDbRepository;
