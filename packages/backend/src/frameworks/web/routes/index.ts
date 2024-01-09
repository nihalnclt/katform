import { Application } from "express";
import usersRouter from "./user/useresRouter";

const router = (app: Application) => {
    app.use("/api/v1/users", usersRouter());
};

export default router;
