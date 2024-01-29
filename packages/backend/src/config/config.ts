import dotenv from "dotenv";
dotenv.config();

const envConfig = {
  mongodbUrl: process.env.MONGODB_URL as string,
  port: process.env.PORT as string,
  accessTokenKey: process.env.ACCESS_TOKEN_KEY as string,
  refreshTokenKey: process.env.REFRESH_TOKEN_KEY as string,
};

export default envConfig;
