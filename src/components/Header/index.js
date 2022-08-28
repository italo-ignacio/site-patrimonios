import React, { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, MenuContent, MenuLabel, HeaderContainer } from "./styled";
import { AuthContext } from "../../contexts/auth";
import Hamburger from "hamburger-react";

export default function Header() {
  const { logout, authenticated, user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  const hadleLogout = () => {
    logout();
  };
  return (
    <HeaderContainer>
      <Nav show={show}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        {authenticated ? (
          <></>
        ) : (
          <Link to="/register" onClick={toggleMenu}>
            Registrar
          </Link>
        )}
        {authenticated ? (
          <></>
        ) : (
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
        )}
        {authenticated ? (
          <Link to={`/user/${user.id}`} onClick={toggleMenu}>
            Perfil
          </Link>
        ) : (
          <></>
        )}

        {authenticated ? (
          <Link to="/register" onClick={toggleMenu}>
            {user.name}
          </Link>
        ) : (
          <></>
        )}
        {authenticated ? (
          <label className="btn_logout" onClick={hadleLogout}>
            <FaSignOutAlt />
          </label>
        ) : (
          <></>
        )}
      </Nav>

      <MenuContent>
        <MenuLabel onClick={toggleMenu}>
          <Hamburger toggled={show} />
        </MenuLabel>
      </MenuContent>
    </HeaderContainer>
  );
}
