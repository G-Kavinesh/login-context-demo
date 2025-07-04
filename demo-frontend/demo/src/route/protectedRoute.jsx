import React from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../context/loginContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useLogin();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
