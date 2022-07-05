import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styled";

export default function Header() {
  return (
    <>
      <Nav>
        <Link to="/">Ver patrimoios</Link>
        <Link to="/register">Criar uma conta</Link>
        <Link to="/login">Fazer login</Link>
      </Nav>
    </>
  );
}
