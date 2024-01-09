import { NextFunction, Request, Response } from "express";

import { userDbRepositoryImplType } from "../../frameworks/database/mongodb/repositories/userDbRepositoryImpl";
import { userRepositoryType } from "../../application/repositories/userRepository";
import { authServiceInterfaceType } from "../../application/services/authServiceInterface";
import { authServiceImplType } from "../../frameworks/services/authServiceImpl";
import userFindById from "../../application/use_cases/user/userFindById";

const userAuthController = (
    userRepository: userRepositoryType,
    userDbRepositoryImpl: userDbRepositoryImplType,
    authServiceInterface: authServiceInterfaceType,
    authServiceImpl: authServiceImplType
) => {
    const dbRepository = userRepository(userDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());

    const fetchUserById = (req: Request, res: Response, next: NextFunction) => {
        const response = userFindById("123", dbRepository);
        res.status(200).json({ firstName: "Nihal", lastName: "N", email: "nihal@webdiari.net" });
    };

    return { fetchUserById };
};

export default userAuthController;
