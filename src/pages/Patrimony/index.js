import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCode,
  PatrymonyOwner,
  PatrymonyNote,
  PatrymonyDetails,
  PrimaryContainer,
  SecondaryContainer,
} from "./styled";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../contexts/auth";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";

export default function Patrimony() {
  const { id } = useParams();
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/patrimony/${id}`);
        const patrimony = response.data;
        setName(patrimony.name);
        setCode(patrimony.code);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setOwner(patrimony.owner);
        setImage(patrimony.url);
        if (user != null) {
          if (user.is_admin || patrimony.owner === user.name) {
            setIsOwner(true);
          }
        }
        setLoading(false);
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        setLoading(false);
        navigate("/");
      }
    };
    getData();
  }, [id, navigate, user]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/patrimony/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setLoading(false);
      toast.success("Patrimônio deletado com sucesso");

      navigate(`/user/${user.id.toString()}`);
    } catch (er) {
      toast.success("Erro ao deletar");
      setLoading(false);
    }
  };

  const handleclick = () => {
    navigate(`/updatePatrimony/${id}`);
  };

  return (
    <>
      {loading ? <Loading /> : <></>}
      <PrimaryContainer>
        {isOwner ? (
          <SecondaryContainer>
            <FaEdit fontSize={25} className="bt" onClick={handleclick} />
            <label>
              {del ? (
                <GiConfirmed
                  fontSize={25}
                  className="bt"
                  onClick={handleDelete}
                />
              ) : (
                <RiDeleteBin6Line
                  fontSize={25}
                  className="bt"
                  onClick={() => setDel(true)}
                />
              )}
            </label>
          </SecondaryContainer>
        ) : (
          <></>
        )}
        <PatrimonyContainer>
          <PatrymonyImage>
            <img src={image} alt={name} />
          </PatrymonyImage>
          <PatrymonyName>
            Patrimônio:
            <label>{name}</label>
          </PatrymonyName>
          <PatrymonyCode>
            Código:
            <label>{code}</label>
          </PatrymonyCode>
          <PatrymonyOwner>
            Dono:
            <label>{owner}</label>
          </PatrymonyOwner>
          <PatrymonyNote>
            Observações:
            <label>{note}</label>
          </PatrymonyNote>
          <PatrymonyDetails>
            Detalhes:
            <label>{details}</label>
          </PatrymonyDetails>
        </PatrimonyContainer>
      </PrimaryContainer>
      <>space</>
    </>
  );
}
