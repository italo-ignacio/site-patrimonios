import React from "react";
import { PrimaryContainer, PatrimonyContainer, NameContainer } from "./styled";

export default function UserList({ name, patrimonies, id, isSelected }) {
  return (
    <PrimaryContainer to={`/?userId=${id}`} selected={isSelected}>
      <NameContainer>{name}</NameContainer>
      <PatrimonyContainer>{patrimonies}</PatrimonyContainer>
    </PrimaryContainer>
  );
}
