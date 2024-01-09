import { authServiceImplType } from "../../frameworks/services/authServiceImpl";

const authServiceInterface = (service: ReturnType<authServiceImplType>) => {
    const encriptPassword = (password: string) => {
        // return service.encrypt(password);
        return;
    };

    // const comparePassword = (password: string, encriptPassword: string) => {
    //     return service.ComparePassword(password, encriptPassword);
    // };

    // const encriptConfirmPassword = (confirmPassword: string) => {
    //     return service.encrypt(confirmPassword);
    // };

    // const compareConfirmPassword = (confirmPassword: string, encriptConfirmPassword: string) => {
    //     return service.ComparePassword(confirmPassword, encriptConfirmPassword);
    // };

    // const generateAccessToken = async (payload: string) => {
    //     const token = jwt.sign({ payload }, dotenvConfig.access_token_key, { expiresIn: "30s" });
    //     return token;
    // };

    // const verifyAccessToken = async (token: string) => {
    //     const verifyAccessToken = jwt.verify(token, dotenvConfig.access_token_key);
    //     return verifyAccessToken;
    // };

    // const generateRefreshToken = async (payload: string) => {
    //     const Refreshtoken = jwt.sign({ payload }, dotenvConfig.refresh_token_key, {
    //         expiresIn: "1w",
    //     });
    //     return Refreshtoken;
    // };

    // const verifyRefreshToken = async (token: string) => {
    //     return jwt.verify(token, dotenvConfig.refresh_token_key);
    // };

    return {
        encriptPassword,
    };
};

export type authServiceInterfaceType = typeof authServiceInterface;
export default authServiceInterface;
