import express, { Application } from "express";
import morgan from "morgan";
import cors, { CorsOptions } from "cors";
import compression from "compression";
import helmet from "helmet";

const corsOption: CorsOptions = {
  origin: "http://localhost:5001",
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
  credentials: true,
};

// const morganStream = {
//   write: (message: string) => {
//     logger.info(message);
//   },
// };

const expressConfig = (app: Application) => {
  app.use(helmet());

  app.use(compression());
  app.use(
    express.json({
      limit: "50mb",
    })
  );
  app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
  app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(cors(corsOption));
};

export default expressConfig;
