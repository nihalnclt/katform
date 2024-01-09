import express from "express";

import userAuthController from "../../../../adapters/controllers/userAuthController";
import userDbRepositoryImpl from "../../../database/mongodb/repositories/userDbRepositoryImpl";
import authServiceInterface from "../../../../application/services/authServiceInterface";
import authServiceImpl from "../../../services/authServiceImpl";
import userRepository from "../../../../application/repositories/userRepository";

const usersRouter = () => {
    const router = express.Router();

    const controller = userAuthController(
        userRepository,
        userDbRepositoryImpl,
        authServiceInterface,
        authServiceImpl
    );

    router.get("/", controller.fetchUserById);

    return router;
};

export default usersRouter;
