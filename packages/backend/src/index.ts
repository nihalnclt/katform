import mongoose from "mongoose";

import MongoDb from "./frameworks/database/mongodb/connection/connection";
import server from "./frameworks/web/server";
import { app } from "./app";
import { DatabaseConnError } from "./frameworks/common/errors";

const start = async () => {
  // connecting mongodb database
  const mongo = new MongoDb(mongoose, { reconnectInterval: 5000 });
  await mongo.connect().catch((err) => {
    throw new DatabaseConnError();
  });

  // starting server
  server(app).start();
};

start();
