import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { isEmail } from "validator";
import axios from "../../services/axios";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Loading from "../../components/Loading";

export default function Register() {
  const {
    authenticated,
    validate,
    changeName,
    token,
    logout,
    id,
    isAdmin,
    name: nameUser,
  } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      setLoading(false);
      return;
    }
    const localEmail = localStorage.getItem("email");
    setEmail(localEmail);
    setName(nameUser);
    setLoading(false);
  }, [authenticated, nameUser]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (!isEmail(email)) {
      formErros = true;
      toast.error("E-mail inválido");
    }
    if (!authenticated || password.length > 1) {
      if (password.length < 6 || password.length > 50) {
        formErros = true;
        toast.error("Senha deve ter entre 6 e 50 caracteres");
      }
    }
    if (formErros) return;

    try {
      if (authenticated) {
        setLoading(true);
        try {
          axios.defaults.headers.Authorization = `Bearer ${token}`;
          await axios.put(`/user/${id}`, {
            name,
            email,
            password: password || undefined,
          });
          toast.success("Conta atualizada com sucesso");
          localStorage.setItem(
            "user",
            JSON.stringify({ name, id, is_admin: isAdmin })
          );
          localStorage.setItem("email", email);
          const verify = await validate(token, id, isAdmin);
          if (verify) {
            changeName(name);
            setLoading(false);
          } else {
            logout();
            toast.warning("Refaça o login para validar seu token");
            setLoading(false);
            navigate("/login");
          }
        } catch (error) {
          logout();
          toast.warning("Refaça o login para validar seu token");
          navigate("/login");
        }
      } else {
        setLoading(true);
        await axios.post("/user", {
          name,
          email,
          password,
        });
        toast.success("Conta criada com sucesso");
        localStorage.setItem("email", email);
        setLoading(false);
        navigate("/login");
      }
    } catch (er) {
      const errors = get(er, "response.data.errors", []);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "email must be unique") {
          toast.error("E-mail já existe");
        }
      });
      setLoading(false);
    }
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Container>
        <h1>{authenticated ? "Editar dados" : "Registrar"}</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              placeholder="Seu nome"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              placeholder="Seu e-mail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit">
            {authenticated ? "Salvar dados" : "Criar minha conta"}
          </button>
        </Form>
      </Container>
    </>
  );
}
