import express from "express";

import userAuthController from "../../../../adapters/controllers/usersAuthController";
import userDbRepositoryImpl from "../../../database/mongodb/repositories/userDbRepositoryImpl";
import authServiceInterface from "../../../../application/services/authServiceInterface";
import authServiceImpl from "../../../services/authServiceImpl";
import userRepository from "../../../../application/repositories/userDbRepository";

const usersRouter = () => {
  const router = express.Router();

  const controller = userAuthController(
    userRepository,
    userDbRepositoryImpl,
    authServiceInterface,
    authServiceImpl
  );

  router.route("/auth/signup").post(controller.signupUser);
  router.route("/auth/login").post(controller.loginUser);

  return router;
};

export default usersRouter;
