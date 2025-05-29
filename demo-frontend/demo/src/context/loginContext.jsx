import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      setUser(res.data.user);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      return true;
    } catch (err) {
      alert(
        "Login failed: " +
          (err.response?.data?.message || err.message || "Unknown error")
      );
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:4000/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setToken(token);
      })
      .catch(() => {
        logout();
      });
  }, []);

  return (
    <LoginContext.Provider value={{ user, token, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context)
    throw new Error("useLogin must be used inside a LoginProvider");
  return context;
};
