import React, { useState, useContext, useEffect } from "react";
import { get } from "lodash";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "../../styles/GlobalStyles";
import { Form, Label } from "./styled";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";
import axios from "../../services/axios";

export default function UpdatePatrimony() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/patrimony/${id}`);
        const patrimony = response.data;
        setName(patrimony.name);
        setCod(patrimony.cod);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setImage(patrimony.url);
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        navigate("/");
      }
    };
    getData();
    setLoading(false);
  }, [id, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (formErros) return;

    try {
      setLoading(true);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      await axios.put(`/patrimony/${id}`, {
        name,
        cod,
        note,
        details,
      });
      toast.success("Patrimônio atualizado com sucesso");
      setLoading(false);
    } catch (er) {
      const errors = get(er, "response.data.errors", []);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "Token expired or invalid") {
          toast.error("Permissão negada");
          navigate("/");
        }
        if (error === "Permission required") {
          toast.error("Permissão negada");
          navigate("/");
        }
        if (error === "Code already exists") {
          toast.error("Código já existe");
        } else {
          toast.error("Erro ao atualizar");
        }
      });
      setLoading(false);
    }
  }

  const handleChange = async (e) => {
    const photo = e.target.files[0];

    const formData = new FormData();
    formData.append("photo", photo);

    try {
      setLoading(true);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      await axios.put(`/photo/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const photoURL = URL.createObjectURL(photo);
      setImage(photoURL);
      toast.success("Imagem atualizado com sucesso");
      setLoading(false);
    } catch (er) {
      const errors = get(er, "response.data.errors", []);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "Token expired or invalid") {
          toast.error("Permissão negada");
          navigate("/");
        }
        if (error === "Permission required") {
          toast.error("Permissão negada");
          navigate("/");
        } else {
          toast.error("Erro ao atualizar");
        }
      });
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Link to={`/patrimony/${id}`}>Voltar</Link>
        <Label>Atualizar patrimônio</Label>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="image" className="image_label">
            <img src={image} alt={name} />
            <input
              type="file"
              className="image_input"
              id="image"
              accept="image/png, image/jpeg"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="name">
            Nome:
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
            Código:
            <input
              placeholder="Codigo do patrimônio"
              type="text"
              value={cod}
              onChange={(e) => {
                setCod(e.target.value);
              }}
            />
          </label>

          <label htmlFor="note">
            Observações:
            <textarea
              placeholder="Observações do patrimônio"
              rows="4"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </label>

          <label htmlFor="details">
            Detalhes:
            <textarea
              placeholder="Detalhes do patrimônio"
              rows="7"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </label>
          <button type="submit">Salvar dados</button>
        </Form>
      </Container>
    </>
  );
}
