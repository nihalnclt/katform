import { AuthServiceImplType } from "../../frameworks/services/authServiceImpl";

const authServiceInterface = (service: ReturnType<AuthServiceImplType>) => {
  const encryptPassword = (password: string) => service.encryptPassword(password);
  const comparePassword = (password: string, encriptPassword: string) =>
    service.comparePassword(password, encriptPassword);
  const generateAccessToken = (payload: string) => service.generateAccessToken(payload);
  const verifyAccessToken = (token: string) => service.verifyAccessToken(token);
  const generateRefreshToken = (payload: string) => service.generateRefreshToken(payload);
  const verifyRefreshToken = (token: string) => service.verifyRefreshToken(token);

  return {
    encryptPassword,
    comparePassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
  };
};

export type AuthServiceInterfaceType = typeof authServiceInterface;
export default authServiceInterface;
