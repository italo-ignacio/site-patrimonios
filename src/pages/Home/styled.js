import { Link } from "react-router-dom";
import styled from "styled-components";
import * as colors from "../../config/colors";

export const GeneralContainer = styled.div`
  width: 96%;
  min-height: 90%;
  background: #fff;
  margin: 30px 2%;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 420px) {
    padding: 0.8rem;
  }
`;

export const PrimaryContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-areas: "patrimony user";
  min-height: 1000px;
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const SecondaryContainer = styled.div`
  grid-area: patrimony;
  display: grid;
  grid-template-columns: 50% 50%;
  max-height: 50%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ResetUserContainer = styled(Link)`
  margin-bottom: 10px;
  border: 1px solid
    ${(props) =>
      props.selected ? `${colors.secondaryColor} ` : `${colors.primaryColor}`};
  color: ${(props) =>
    props.selected ? `${colors.secondaryColor}` : `${colors.primaryColor}`};
  font-weight: ${(props) => (props.selected ? `bold` : `normal`)};
  border-radius: 9px;
  padding: 10px;
  background-color: ${colors.secondaryDarkColor};
  word-break: break-all;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
export const TertiaryContainer = styled.div`
  grid-area: user;
  display: flex;
  flex-direction: column;
`;

export const RegPatrimonyContainer = styled.div`
  text-align: center;

  .reg_container {
    margin: 10px auto;
  }
`;

export const SearchPatrimonyContainer = styled.div`
  margin-right: 25px;
  position: relative;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .btn_backspace {
    position: absolute;
    top: 23px;
    height: 39px;
    padding: 10px;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    color: ${colors.primaryColor};
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    % &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }
`;

export const SearchUserContainer = styled.div`
  position: relative;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .btn_backspace {
    position: absolute;
    top: 23px;
    height: 39px;
    padding: 10px;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    color: ${colors.primaryColor};
  }
  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }
`;
