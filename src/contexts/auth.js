import React, { createContext, useState, useEffect } from "react";
import axios from "../services/axios";
import { get } from "lodash";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  const validate = async (token) => {
    try {
      const response = await axios.post(
        "/validate",
        {},
        { headers: { authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      setToken(token);
      return true;
    } catch (e) {
      localStorage.removeItem("token");
      setUser(null);
      setToken("");
      return false;
    }
  };

  useEffect(() => {
    const recoverdToken = localStorage.getItem("token");
    if (recoverdToken) {
      validate(recoverdToken);
    } else {
      setUser(null);
      setToken("");
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post("/token", {
        email,
        password,
      });
      const loggedUser = response.data.user;
      const token = response.data.token;

      setUser(loggedUser);
      setToken(token);

      localStorage.setItem("token", token);
      localStorage.setItem("email", loggedUser.email);

      toast.success("Login realizado com sucesso");
      setLoading(false);
      navigate("/");
    } catch (er) {
      const errors = get(er, "response.data.errors", []);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "User not found") {
          toast.error("Usuário não encontrado");
        }
        if (error === "Invalid password") {
          toast.error("Senha inválida");
        }
      });
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: user != null ? true : false,
        user,
        loading,
        token,
        login,
        logout,
        validate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
