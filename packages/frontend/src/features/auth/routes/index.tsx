import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
