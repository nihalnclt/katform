import { BadRequestError } from "../../../frameworks/common/errors";
import { UserDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";
import { AuthServiceImplType } from "../../../frameworks/services/authServiceImpl";
import { userSignupValidator } from "../validators/userValidator";

interface UserRegisterUseCaseType {
  name: string;
  email: string;
  password: string;
  userRepository: ReturnType<UserDbRepositoryImplType>;
  authService: ReturnType<AuthServiceImplType>;
}

export const userRegisterUseCase = async ({
  name,
  email,
  password,
  userRepository,
  authService,
}: UserRegisterUseCaseType) => {
  const validationResult = userSignupValidator({ name, email, password });
  if (validationResult.error) {
    throw new BadRequestError(validationResult.error.message);
  }

  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    throw new BadRequestError("Email already in use");
  }

  return userRepository.create();
};
