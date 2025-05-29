import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/loginContext";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./route/protectedRoute";

const App = () => {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
};

export default App;

