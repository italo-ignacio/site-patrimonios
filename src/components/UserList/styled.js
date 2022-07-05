import styled from "styled-components";
import {
  primaryColor,
  secondaryDarkColor,
  secondaryColor,
} from "../../config/colors";
import { Link } from "react-router-dom";

export const PrimaryContainer = styled(Link)`
  margin-bottom: 10px;
  border: 1px solid
    ${(props) => (props.selected ? `${secondaryColor} ` : `${primaryColor}`)};
  color: ${(props) =>
    props.selected ? `${secondaryColor}` : `${primaryColor}`};
  font-weight: ${(props) => (props.selected ? `bold` : `normal`)};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: break-all;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const NameContainer = styled.div``;
export const PatrimonyContainer = styled.div``;
