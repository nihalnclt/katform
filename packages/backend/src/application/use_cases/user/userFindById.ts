import { userDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";

export default function userFindById(
    id: string,
    userRepository: ReturnType<userDbRepositoryImplType>
) {
    return userRepository.findById(id);
}
