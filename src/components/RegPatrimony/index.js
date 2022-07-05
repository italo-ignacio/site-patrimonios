import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Container } from "./styled";
import { Form } from "./styled";
import { get } from "lodash";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function RegPatrimony({ token }) {
  const [name, setName] = useState("");
  const [cod, setCode] = useState("");
  const [showCadPatrimony, setShowCadPatrimony] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (cod.length < 1 || cod.length > 10) {
      formErros = true;
      toast.error("Código deve ter entre 1 e 10 caracteres");
    }
    if (formErros) {
      return;
    }
    try {
      setLoading(true);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.post("/patrimony", {
        name,
        cod,
      });
      setLoading(false);
      navigate(`/updatePatrimony/${response.data.id}`);
    } catch (er) {
      setLoading(false);
      const errors = get(er, "response.data.errors", []);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "Code already exists") {
          toast.error("Código já existe");
        }
      });
    }
  }

  const handleclick = () => {
    setShowCadPatrimony(!showCadPatrimony);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <button onClick={handleclick} className="btn_reg">
        Cadastrar patrimônio
      </button>
      {showCadPatrimony ? (
        <Container className="reg_container">
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                placeholder="Nome do patrimônio"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="cod">
              <input
                placeholder="Código do patrimônio"
                type="text"
                value={cod}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </label>
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
