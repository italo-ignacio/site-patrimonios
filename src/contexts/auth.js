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
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const validate = async (token, id, is_admin) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    try {
      await axios.post("/validate", {
        id,
        is_admin,
      });
      return true;
    } catch (e) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      setToken("");
      setName("");
      setIsAdmin(false);
      setId("");
      axios.defaults.headers.Authorization = null;
      console.log(e.data.errors);
      return false;
    }
  };

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    const recoverdToken = localStorage.getItem("token");
    const userr = JSON.parse(recoverdUser);
    if (recoverdUser) {
      setUser(userr);
      setName(userr.name);
      setIsAdmin(userr.is_admin);
      setId(userr.id);
      if (recoverdToken) {
        setToken(recoverdToken);
        validate(recoverdToken, userr.id, userr.is_admin);
      } else {
        setUser(null);
        setName("");
        setIsAdmin(false);
        setId("");
        setToken("");
      }
    } else {
      setUser(null);
      setName("");
      setIsAdmin(false);
      setId("");
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
      setName(loggedUser.name);
      setIsAdmin(loggedUser.is_admin);
      setId(loggedUser.id);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      axios.defaults.headers.Authorization = `Bearer ${token}`;

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
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    setName("");
    setIsAdmin(false);
    setId("");
    axios.defaults.headers.Authorization = null;
  };
  const changeName = (name) => {
    setName(name);
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        token,
        name,
        isAdmin,
        id,
        login,
        logout,
        validate,
        changeName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
