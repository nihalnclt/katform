import express from "express";

import formDbRepository from "../../../../application/repositories/formDbRepository";
import formDbRepositoryImpl from "../../../database/mongodb/repositories/formDbRepositoryImpl";
import formsController from "../../../../adapters/controllers/formsController";
import { userAuthMiddleware } from "../../middlewares";

const formsRouter = () => {
  const router = express.Router();

  const controller = formsController(formDbRepository, formDbRepositoryImpl);

  router.route("/create").post(userAuthMiddleware, controller.addNewForm);
  router.route("/update/:formId").patch(userAuthMiddleware, controller.updateFormFields);
  router.route("/single/:formId").get(userAuthMiddleware, controller.getSingleForm);

  return router;
};

export default formsRouter;
