import React, { useState } from "react";
import { useLogin } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("student@example.com");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />
        <button type="submit" style={{ padding: 10, width: "100%" }}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
