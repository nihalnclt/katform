import { Request, Response, NextFunction } from "express";

import { CustomError } from "../../common/errors";

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(500).json({ errors: [{ message: err?.message || "something went wrong" }] });
};
