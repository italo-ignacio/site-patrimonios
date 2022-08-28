import styled from "styled-components";
import { primaryColor, secondaryDarkColor } from "../../config/colors";

export const PatrimonyContainer = styled.div`
  display: grid;
  grid-template-columns: 150px auto auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "image name code"
    "image owner owner"
    "note note note"
    "note note note";
  width: 95%;
  margin-bottom: 20px;
  border: 5px solid ${primaryColor};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: break-all;
  @media (max-width: 550px) {
    grid-template-columns: 100px auto auto;
  }
  @media (max-width: 374px) {
    width: 100%;
    padding: 10px;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "image image image"
      "name name code"
      "owner owner owner"
      "note note note"
      "note note note";
  }
`;

export const PatrymonyImage = styled.div`
  grid-area: image;
  text-align: center;
  img {
    max-width: 140px;
    max-height: 140px;
  }
  @media (max-width: 550px) {
    img {
      max-width: 80%;
      max-height: auto;
    }
  }
`;
export const PatrymonyName = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
  }
`;

export const PatrymonyCode = styled.div`
  grid-area: code;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    max-width: 200px;
  }
`;
export const PatrymonyOwner = styled.div`
  grid-area: owner;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
`;
export const PatrymonyNote = styled.div`
  grid-area: note;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
`;
