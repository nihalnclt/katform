import express, { Application, Request, Response } from "express";
import "express-async-errors";
import { NotFoundError, errorHandler } from "@webdiari/common";

import expressConfig from "./frameworks/web/express";
import router from "./frameworks/web/routes";

const app: Application = express();

expressConfig(app);
router(app);

app.all("*", (req: Request, res: Response) => {
    throw new NotFoundError();
});
app.use(errorHandler);

export { app };
