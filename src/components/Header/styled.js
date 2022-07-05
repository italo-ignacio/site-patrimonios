import styled from "styled-components";
import { primaryColor, textColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 19px;
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
`;
