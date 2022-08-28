import React from "react";
import {
  PatrimonyContainer,
  PatrymonyImage,
  PatrymonyName,
  PatrymonyCode,
  PatrymonyOwner,
  PatrymonyNote,
} from "./styled";
import { Link } from "react-router-dom";

export default function Patrimony({
  name,
  code,
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
      <PatrymonyCode>
        Código:
        <label>
          <Link to={`/patrimony/${id}`}>{code}</Link>
        </label>
      </PatrymonyCode>
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
