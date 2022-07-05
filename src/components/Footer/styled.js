import styled from "styled-components";
import { primaryColor, textColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 0 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 19px;
  min-height: 300px;
  a {
    color: ${textColor};
    margin: 0 20px 0 0;
    font-weight: bold;
  }

  label {
    margin-right: 5px;
  }
`;
