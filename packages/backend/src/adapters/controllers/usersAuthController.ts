import { NextFunction, Request, Response } from "express";

import { UserDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";
import { AuthServiceInterfaceType } from "../../application/services/authServiceInterface";
import { AuthServiceImplType } from "../../frameworks/services/authServiceImpl";
import { UserDbRepositoryType } from "../../application/repositories/userDbRepository";

const userAuthController = (
  userDbRepository: UserDbRepositoryType,
  userDbRepositoryImpl: UserDbRepositoryImplType,
  authServiceInterface: AuthServiceInterfaceType,
  authServiceImpl: AuthServiceImplType
) => {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  //   const loginUser = (req, res, next) => {
  //     const { email, password } = req.body;
  //     login(email, password, dbRepository, authService)
  //       .then((token) => res.json(token))
  //       .catch((err) => next(err));
  //   };

  return {};
};

export default userAuthController;
