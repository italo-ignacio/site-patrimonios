import styled from "styled-components";
import { primaryColor, textColor } from "../../config/colors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 19px;
  height: 4rem;
  @media (max-width: 720px) {
    position: fixed;
    top: 0;
    z-index: 99;
  }
`;
export const Nav = styled.nav`
  a {
    color: ${textColor};
    margin: 0 20px 0 0;
    font-weight: bold;
  }
  label {
    margin-right: 5px;
  }
  .btn_logout {
    color: ${textColor};
    margin: 0 20px 0 0;
    font-weight: bold;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    z-index: 4;
    background-color: ${primaryColor};
    top: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 6rem;
    .btn_logout {
      text-align: center;
      margin: 1rem 0;
    }
    a {
      margin: 1rem 0;
      padding: 0;
    }
    button {
      margin: 1rem 0;
    }
  }
`;

export const MenuContent = styled.div`
  position: fixed;
  z-index: 10;
  overflow: hidden;
  display: none;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 0;
    margin-right: 1rem;
  }
`;

export const MenuLabel = styled.label`
  z-index: 10;
  margin: 1rem;
  color: ${textColor};
  cursor: pointer;
`;
