import styled from "styled-components";
import { primaryColor, secondaryDarkColor } from "../../config/colors";

export const GeneralContainer = styled.div`
  width: 96%;
  background: #fff;
  margin: 30px 2%;
  padding: 30px;
  border-radius: 9px;
`;

export const PrimaryContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-areas: "user edit";
`;

export const RegPatrimonyContainer = styled.div`
  grid-area: edit;
  text-align: center;
  .reg_container {
    margin: 10px auto;
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
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "name name"
    "email email"
    "patrimony patrimony";
  width: 95%;
  margin: 30px auto;
  margin-bottom: 100px;
  border: 5px solid ${primaryColor};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: keep-all;
  font-weight: bold;
`;

export const UserName = styled.div`
  grid-area: name;
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
  grid-area: email;
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
  grid-area: patrimony;
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
    top: 23px;
    height: 39px;
    padding: 8px 10px;
    right: 0;
    z-index: 10;
    border: none;
    background: transparent;
    color: ${primaryColor};
  }
`;
