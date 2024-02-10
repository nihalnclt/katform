import { CustomError } from "./customError";

export class UnAuthError extends CustomError {
  statusCode = 401;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, UnAuthError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
