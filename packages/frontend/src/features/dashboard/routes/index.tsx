import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Dashboard />} />
    </Routes>
  );
};
