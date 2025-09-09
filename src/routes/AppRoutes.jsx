// routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
// pages
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Competitions from "../pages/Competitions";
import Calendar from "../pages/Calendar";
import Error from "../pages/Error";
import Competition from "../pages/Competition";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/competitions"
        element={
          <ProtectedRoute>
            <Competitions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/competitions/:id"
        element={
          <ProtectedRoute>
            <Competition />
          </ProtectedRoute>
        }
      />
      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
