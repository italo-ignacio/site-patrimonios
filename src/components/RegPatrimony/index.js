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
  const [code, setCode] = useState("");
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
    if (code.length < 1 || code.length > 50) {
      formErros = true;
      toast.error("Código deve ter entre 1 e 50 caracteres");
    }
    if (formErros) {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "/patrimony",
        {
          name,
          code,
        },
        { headers: { authorization: `Bearer ${token}` } }
      );
      setLoading(false);
      navigate(`/updatePatrimony/${response.data.id.toString()}`);
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

  return (
    <>
      {loading ? <Loading /> : <></>}
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
            <label htmlFor="code">
              <input
                placeholder="Código do patrimônio"
                type="text"
                value={code}
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
