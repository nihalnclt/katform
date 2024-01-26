import winston, { Logger } from "winston";
import path from "path";

const options = {
  file: {
    level: "info",
    filename: path.join(path.resolve(path.resolve(__dirname)), "../../../logs/app.log"),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

export const logger: Logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});
