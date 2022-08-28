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
  const [code, setCode] = useState("");
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
        setCode(patrimony.code);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setImage(patrimony.url);
        setLoading(false);
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        setLoading(false);
        navigate("/");
      }
    };
    getData();
  }, [id, navigate]);

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
    if (formErros) return;

    try {
      setLoading(true);
      await axios.put(
        `/patrimony/${id}`,
        {
          name,
          code,
          note,
          details,
        },
        { headers: { authorization: `Bearer ${token}` } }
      );
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
      await axios.put(`/photo/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      });
      const photoURL = URL.createObjectURL(photo);
      setImage(photoURL);
      toast.success("Imagem atualizado com sucesso");
      setLoading(false);
    } catch (er) {
      const errors = get(er, "response.data.errors", []);
      console.log(er);
      // eslint-disable-next-line
      errors.map((error) => {
        if (error === "Token expired or invalid") {
          toast.error("Permissão negada");
          navigate("/");
        } else if (error === "Login required") {
          toast.error("Permissão negada");
          navigate("/");
        } else if (error === "Permission required") {
          toast.error("Permissão negada");
          navigate("/");
        } else {
          toast.error("Erro ao atualizar");
        }
      });
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loading /> : <></>}
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

          <label htmlFor="code">
            Código:
            <input
              placeholder="Codigo do patrimônio"
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
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
      <>space</>
    </>
  );
}
