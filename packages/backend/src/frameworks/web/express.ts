import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

// const corsOption = {
//     origin: "http://localhost:5001",
//     methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
//     credentials: true,
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
    app.use(cookieParser());
    app.use(morgan("dev"));
    app.use(express.static("public"));
    app.use(cors());
};

export default expressConfig;
