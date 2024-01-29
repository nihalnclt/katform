import { NextFunction, Request, Response } from "express";

import { UserDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";
import { AuthServiceInterfaceType } from "../../application/services/authServiceInterface";
import { AuthServiceImplType } from "../../frameworks/services/authServiceImpl";
import { UserDbRepositoryType } from "../../application/repositories/userDbRepository";
import { userRegisterUseCase } from "../../application/use_cases/userAuth/userRegisterUseCase";
import { HttpStatus } from "../../core/enums/httpStatus";
import { userLoginUseCase } from "../../application/use_cases/userAuth/userLoginUseCase";

const userAuthController = (
  userDbRepository: UserDbRepositoryType,
  userDbRepositoryImpl: UserDbRepositoryImplType,
  authServiceInterface: AuthServiceInterfaceType,
  authServiceImpl: AuthServiceImplType
) => {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const signupUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    userRegisterUseCase({ name, email, password, userRepository: dbRepository, authService })
      .then((result) => {
        return res.status(HttpStatus.OK).json(result);
      })
      .catch((error: Error) => next(error));
  };

  const loginUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    userLoginUseCase({ email, password, userRepository: dbRepository, authService })
      .then((result) => res.status(HttpStatus.OK).json(result))
      .catch((err) => next(err));
  };

  return { signupUser, loginUser };
};

export default userAuthController;
