import express from "express";

import userAuthController from "../../../../adapters/controllers/usersAuthController";
import userDbRepository from "../../../../application/repositories/userDbRepository";
import userDbRepositoryImpl from "../../../database/mongodb/repositories/userDbRepositoryImpl";
import authServiceInterface from "../../../../application/services/authServiceInterface";
import authServiceImpl from "../../../services/authServiceImpl";

export default function authRouter() {
  const router = express.Router();

  const controller = userAuthController(
    userDbRepository,
    userDbRepositoryImpl,
    authServiceInterface,
    authServiceImpl
  );

  // POST enpdpoints

  return router;
}
