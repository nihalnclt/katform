import { BadRequestError, NotFoundError } from "../../../frameworks/common/errors";
import { logger } from "../../../frameworks/common/winston";
import { UserDbRepositoryImplType } from "../../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";
import { AuthServiceImplType } from "../../../frameworks/services/authServiceImpl";
import { userLoginValidator } from "../validators/userValidator";

interface UserLoginUseCaseType {
  email: string;
  password: string;
  userRepository: ReturnType<UserDbRepositoryImplType>;
  authService: ReturnType<AuthServiceImplType>;
}

export const userLoginUseCase = async ({
  email,
  password,
  userRepository,
  authService,
}: UserLoginUseCaseType) => {
  const validationResult = userLoginValidator({ email, password });
  if (validationResult.error) {
    throw new BadRequestError(validationResult.error?.message);
  }

  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new NotFoundError(`Invalid email or password`);
  }

  const isMatch = await authService.comparePassword(password, user.password);

  if (!isMatch) {
    throw new NotFoundError(`Invalid email or password`);
  }

  const tokenPayload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const accessToken = await authService.generateAccessToken(JSON.stringify(tokenPayload));
  const refreshToken = await authService.generateRefreshToken(JSON.stringify(tokenPayload));

  return {
    user,
    accessToken,
    refreshToken,
  };
};
