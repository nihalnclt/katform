import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
