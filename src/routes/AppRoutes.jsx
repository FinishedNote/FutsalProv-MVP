// routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import Error from "../pages/Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
