import { Application } from "express";

import envConfig from "../../config/config";

const PORT = envConfig.port || 5000;

const server = (app: Application) => {
    const start = () => {
        app.listen(PORT, () => {
            console.log(`Server is up and running on ${PORT}`);
        });
    };

    return { start };
};

export default server;
