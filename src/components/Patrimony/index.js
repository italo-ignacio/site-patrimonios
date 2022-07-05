import React from "react";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCod,
  PatrymonyOwner,
  PatrymonyNote,
} from "./styled";
import { Link } from "react-router-dom";

export default function Patrimony({
  name,
  cod,
  owner,
  note,
  url,
  id,
  ownerId,
  move,
}) {
  return (
    <PatrimonyContainer>
      <PatrymonyImage>
        <img src={url} alt={name} />
      </PatrymonyImage>
      <PatrymonyName>
        Patrimônio:
        <label>
          <Link to={`/patrimony/${id}`}>{name}</Link>
        </label>
      </PatrymonyName>
      <PatrymonyCod>
        Código:
        <label>
          <Link to={`/patrimony/${id}`}>{cod}</Link>
        </label>
      </PatrymonyCod>
      <PatrymonyOwner>
        Dono:
        {move ? (
          <label>
            <Link to={`/user/${ownerId}`}>{owner}</Link>
          </label>
        ) : (
          <label>{owner}</label>
        )}
      </PatrymonyOwner>
      <PatrymonyNote>
        Observações:
        <label>{note}</label>
      </PatrymonyNote>
    </PatrimonyContainer>
  );
}
