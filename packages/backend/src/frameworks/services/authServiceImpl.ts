const authServiceImpl = () => {
    // const encrypt = async (password: string) => {
    //     const genSalt = await bcrypt.genSalt(10);
    //     password = await bcrypt.hash(password, genSalt);
    //     return password;
    // };

    // const ComparePassword = async (password: string, encriptPassword: string)=> {
    //     const status = await bcrypt.compare(password, encriptPassword)
    //     return status;
    // }

    // const verifyAccessToken = async (token: string) =>{
    //     const response = await jwt.verify(token, dotenvConfig.refresh_token_key)
    //     return response
    // }

    return {};
};

export type authServiceImplType = typeof authServiceImpl;
export default authServiceImpl;
