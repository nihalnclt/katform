import { NextFunction, Request, Response } from "express";

import authServiceInterface from "../../../application/services/authServiceInterface";
import authServiceImpl from "../../services/authServiceImpl";

// TODO:
// Implement TokenPayload Interface
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");
  const authService = authServiceInterface(authServiceImpl());

  if (!token) {
    throw new Error("No access token found");
  }

  if (token.split(" ")[0] !== "Bearer") {
    throw new Error("Invalid access token format");
  }

  try {
    const decoded = authService.verifyAccessToken(token.split(" ")[1]);
    req.user = decoded;
    next();
  } catch (err) {
    throw new Error("Token is not valid");
  }
};
