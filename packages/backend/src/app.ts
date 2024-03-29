import express, { Application, Request, Response } from "express";
import "express-async-errors";

import expressConfig from "./frameworks/web/express";
import router from "./frameworks/web/routes";
import { errorMiddleware } from "./frameworks/web/middlewares";
import { NotFoundError } from "./frameworks/common/errors";

const app: Application = express();

expressConfig(app);
router(app);

app.all("*", (req: Request, res: Response) => {
  throw new NotFoundError("Route not found");
});
app.use(errorMiddleware);

export { app };
