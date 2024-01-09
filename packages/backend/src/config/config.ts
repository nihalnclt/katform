import dotenv from "dotenv";
dotenv.config();

const envConfig = {
    mongodbUrl: process.env.MONGODB_URL as string,
    port: process.env.PORT as string,
};

export default envConfig;
