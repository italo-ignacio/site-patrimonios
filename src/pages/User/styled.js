import styled from "styled-components";
import { primaryColor, secondaryDarkColor } from "../../config/colors";

export const GeneralContainer = styled.div`
  width: 96%;
  background: #fff;
  margin: 30px 2%;
  padding: 30px;
  border-radius: 9px;
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const PrimaryContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "user edit";
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RegPatrimonyContainer = styled.div`
  grid-area: edit;
  text-align: center;
  .reg_container {
    margin: 10px auto;
  }
  @media (max-width: 1040px) {
    margin-bottom: 2rem;
  }
`;

export const SecondaryContainer = styled.div`
  grid-area: user;
  width: 95%;
  height: 100%;
  margin: auto;
  text-align: right;
  .bt {
    cursor: pointer;
  }
`;

export const UserContainer = styled.div`
  grid-area: user;
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 30px auto;
  margin-bottom: 100px;
  border: 5px solid ${primaryColor};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: break-all;
  font-weight: bold;
  @media (max-width: 1040px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 280px) {
    max-width: 100%;
  }
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
  label {
    margin-top: 5px;
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    padding-left: 15px;
    min-height: 40px;
  }
`;

export const UserEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-top: 5px;
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    padding-left: 15px;
    min-height: 40px;
  }
`;
export const UserPatrimony = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-top: 5px;
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    padding-left: 15px;
    min-height: 40px;
  }
`;
export const PatrimoniesContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 50px;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchPatrimonyContainer = styled.div`
  grid-area: searchPatrimony;
  margin: 0 auto;
  max-width: 50%;
  position: relative;
  text-align: center;
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
      border: 2px solid ${primaryColor};
    }
  }
  .btn_backspace {
    position: absolute;

    height: 39px;
    padding: 9px;
    bottom: 0;
    right: 0;
    z-index: 2;
    border: none;
    background: transparent;
    color: ${primaryColor};
  }
  @media (max-width: 900px) {
    max-width: 90%;
  }
  @media (max-width: 280px) {
    max-width: 100%;
  }
`;
