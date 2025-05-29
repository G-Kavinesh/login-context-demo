import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:4000/register", { email, password });
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />
        {error && (
          <p style={{ color: "red", marginBottom: 12 }}>
            {error}
          </p>
        )}
        <button type="submit" style={{ padding: 10, width: "100%" }}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
