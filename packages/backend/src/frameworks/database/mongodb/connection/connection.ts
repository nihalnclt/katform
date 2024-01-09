import { Mongoose } from "mongoose";

import envConfig from "../../../../config/config";
import { MongoDbOptions } from "../../../../core/types/types";

export default class MongoDb {
    public mongoose: Mongoose;
    public options: MongoDbOptions;

    constructor(mongoose: Mongoose, options: MongoDbOptions) {
        this.mongoose = mongoose;
        this.options = options;

        this.mongoose.connection.on("connected", () => {
            console.info("MongoDb database connection successfully established");
        });

        this.mongoose.connection.on("reconnected", () => {
            console.info("MongoDb database reconnected!");
        });

        this.mongoose.connection.on("error", (error: any) => {
            console.error(`Error in MongoDb connection: ${error}`);
            mongoose.disconnect();
        });

        this.mongoose.connection.on("disconnected", () => {
            console.error(
                `MongoDB disconnected! Reconnecting in ${options.reconnectInterval / 1000}s...`
            );
            setTimeout(() => this.connect(), options.reconnectInterval);
        });
    }

    connect() {
        console.log("MONGODB URL", envConfig.mongodbUrl);
        return this.mongoose.connect(envConfig.mongodbUrl);
    }
}
