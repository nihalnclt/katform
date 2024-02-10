import { axios } from "../../../lib";

import { UserResponse } from "../types";

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
  return axios.post("/auth/login", data);
};
