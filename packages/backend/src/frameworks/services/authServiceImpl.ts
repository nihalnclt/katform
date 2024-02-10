import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import envConfig from "../../config/config";

const authServiceImpl = () => {
  const encryptPassword = async (password: string) => {
    const genSalt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, genSalt);
  };

  const comparePassword = async (password: string, encriptPassword: string) => {
    return await bcrypt.compare(password, encriptPassword);
  };

  const generateAccessToken = async (payload: string) => {
    return jwt.sign({ payload }, envConfig.accessTokenKey, { expiresIn: "300m" });
  };

  const verifyAccessToken = (token: string) => {
    return jwt.verify(token, envConfig.accessTokenKey);
  };

  const generateRefreshToken = async (payload: string) => {
    return jwt.sign({ payload }, envConfig.refreshTokenKey, {
      expiresIn: "1w",
    });
  };

  const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, envConfig.refreshTokenKey);
  };

  return {
    encryptPassword,
    comparePassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
  };
};

export type AuthServiceImplType = typeof authServiceImpl;
export default authServiceImpl;
