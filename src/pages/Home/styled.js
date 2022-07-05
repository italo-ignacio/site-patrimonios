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
`;

export const PrimaryContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-areas: "patrimony user";
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas: "patrimony";
  }
`;

export const SecondaryContainer = styled.div`
  grid-area: patrimony;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
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

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  grid-template-areas: "regPatrimony searchPatrimony searchUser";

  .btn_backspace {
    position: absolute;
    top: 23px;
    height: 39px;
    padding: 8px 10px;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    color: ${colors.primaryColor};
  }
`;

export const RegPatrimonyContainer = styled.div`
  grid-area: regPatrimony;
  text-align: center;

  .reg_container {
    margin: 10px auto;
  }
`;

export const SearchPatrimonyContainer = styled.div`
  grid-area: searchPatrimony;
  margin-right: 25px;
  position: relative;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    % &:focus {
      border: 2px solid ${colors.primaryColor};
    }
  }
`;

export const SearchUserContainer = styled.div`
  grid-area: searchUser;
  position: relative;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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
