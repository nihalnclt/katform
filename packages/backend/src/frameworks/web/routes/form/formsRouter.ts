import express from "express";

import formDbRepository from "../../../../application/repositories/formDbRepository";
import formDbRepositoryImpl from "../../../database/mongodb/repositories/formDbRepositoryImpl";
import formsController from "../../../../adapters/controllers/formsController";

const formsRouter = () => {
  const router = express.Router();

  const controller = formsController(formDbRepository, formDbRepositoryImpl);

  router.route("/single/:formId").get(controller.getSingleForm);
  router.route("/create").post(controller.addNewForm);
  router.route("/update/:formId").patch(controller.updateFormFields);

  return router;
};

export default formsRouter;
