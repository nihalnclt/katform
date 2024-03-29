import { Application } from "express";

import usersRouter from "./user/usersRouter";
import formsRouter from "./form/formsRouter";

const router = (app: Application) => {
  app.use("/api/v1/users", usersRouter());
  app.use("/api/v1/forms", formsRouter());
};

export default router;
