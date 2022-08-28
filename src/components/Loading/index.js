import React from "react";
import { Container } from "./styled";

const Loading = () => {
  return (
    <Container>
      <div />
      <span>Carregando</span>
      <span className="icone"></span>
    </Container>
  );
};

export default Loading;
