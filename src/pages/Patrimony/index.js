import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCod,
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

export default function Patrimony() {
  const { id } = useParams();
  const { isAdmin, name: getOwner } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [owner, setOwner] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/patrimony/${id}`);
        const patrimony = response.data;
        setName(patrimony.name);
        setCod(patrimony.cod);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setOwner(patrimony.owner);
        setImage(patrimony.url);
        if (isAdmin || patrimony.owner === getOwner) {
          setIsOwner(true);
        }
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        navigate("/");
      }
    };
    getData();
    setLoading(false);
  }, [id, navigate, getOwner, isAdmin]);

  const handleclick = () => {
    navigate(`/updatePatrimony/${id}`);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PrimaryContainer>
        {isOwner ? (
          <SecondaryContainer>
            <FaEdit fontSize={25} className="bt" onClick={handleclick} />
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
          <PatrymonyCod>
            Código:
            <label>{cod}</label>
          </PatrymonyCod>
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
    </>
  );
}
