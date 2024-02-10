import { NextFunction, Request, Response } from "express";

import authServiceInterface from "../../../application/services/authServiceInterface";
import authServiceImpl from "../../services/authServiceImpl";
import { BadRequestError, UnAuthError } from "../../common/errors";

// TODO:
// Implement TokenPayload Interface
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const userAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  const authService = authServiceInterface(authServiceImpl());

  if (!token) {
    throw new BadRequestError("No access token found");
  }

  if (token.split(" ")[0] !== "Bearer") {
    throw new UnAuthError("Invalid access token format");
  }

  try {
    const decoded: any = authService.verifyAccessToken(token.split(" ")[1]);
    req.user = JSON.parse(JSON.parse(JSON.stringify(decoded?.payload)));
    next();
  } catch (err: Error | any) {
    throw new UnAuthError(err?.message || "Token not valid");
  }
};
