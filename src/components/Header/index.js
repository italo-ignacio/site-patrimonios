import React, { useContext } from "react";
import { FaCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav } from "./styled";
import { AuthContext } from "../../contexts/auth";

export default function Header() {
  const { logout, authenticated, name, id } = useContext(AuthContext);

  const hadleLogout = () => {
    logout();
  };
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        {authenticated ? <></> : <Link to="/register">Registrar</Link>}
        {authenticated ? <></> : <Link to="/login">Login</Link>}
        {authenticated ? <Link to={`/user/${id}`}>Perfil</Link> : <></>}

        <label>
          <FaCircle color={authenticated ? "#33FF14" : "red"} />
        </label>

        {authenticated ? <Link to="/register">{name}</Link> : <></>}
        {authenticated ? (
          <label className="btn_logout" onClick={hadleLogout}>
            <FaSignOutAlt />
          </label>
        ) : (
          <></>
        )}
      </Nav>
    </>
  );
}
