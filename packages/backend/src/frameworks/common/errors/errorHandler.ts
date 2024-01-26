import { NextFunction, Request, Response } from "express";

import { logger } from "../winston";

export const ErrorHandler = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // add this line to include winston logging
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );

  // render the error page
  res.status(err.status || 500).json({ error: err.message });
};
