import { userDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";

export const userRepository = (repository: ReturnType<userDbRepositoryImplType>) => {
    const findById = (id: string) => repository.findById(id);

    return {
        findById,
    };
};

export default userRepository;
export type userRepositoryType = typeof userRepository;
