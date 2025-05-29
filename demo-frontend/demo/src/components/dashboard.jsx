import React from "react";
import { useLogin } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>Dashboard (Protected)</h1>
      <p>Welcome, {user?.email}!</p>
      <button onClick={handleLogout} style={{ padding: 10, width: "100%" }}>
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
