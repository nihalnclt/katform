import { Mongoose } from "mongoose";

import envConfig from "../../../../config/config";
import { MongoDbOptions } from "../../../../core/types/types";
import { logger } from "../../../common/winston";

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
      logger.info("MongoDb database reconnected!");
    });

    this.mongoose.connection.on("error", (error: any) => {
      logger.error(`Error in MongoDb connection: ${error}`);
      mongoose.disconnect();
    });

    this.mongoose.connection.on("disconnected", () => {
      logger.error(`MongoDB disconnected! Reconnecting in ${options.reconnectInterval / 1000}s...`);
      setTimeout(() => this.connect(), options.reconnectInterval);
    });
  }

  connect() {
    return this.mongoose.connect(envConfig.mongodbUrl);
  }
}
