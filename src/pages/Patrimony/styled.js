import styled from "styled-components";
import { primaryColor, secondaryDarkColor } from "../../config/colors";

export const PrimaryContainer = styled.div`
  width: 95%;
  height: auto;
  padding: 30px 10px;
  margin: 30px auto;
  background: white;
  border-radius: 9px;
`;

export const SecondaryContainer = styled.div`
  width: 95%;
  margin: auto;
  text-align: right;
  .bt {
    cursor: pointer;
  }
  label {
    margin-left: 1rem;
    color: black;
  }
`;

export const PatrimonyContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto auto;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "image name code"
    "image owner note"
    "details details note"
    "details details note";
  width: 95%;
  margin: 30px auto;
  border: 5px solid ${primaryColor};
  border-radius: 9px;
  padding: 10px;
  background-color: ${secondaryDarkColor};
  word-break: keep-all;
  font-weight: bold;
  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      min-width: 100%;
      margin-right: 0;
    }
    row-gap: 0.3rem;
  }
`;

export const PatrymonyImage = styled.div`
  grid-area: image;
  text-align: center;
  img {
    max-width: 250px;
    max-height: 250px;
  }
  @media (max-width: 875px) {
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
  padding-right: 10px;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    min-height: 70%;
  }
  @media (max-width: 875px) {
    margin-right: 0;
    padding-right: 0;
    label {
      min-width: 100%;
      margin-right: 0;
      padding-right: 0;
      margin-bottom: 0;
    }
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
    min-height: 70%;
    min-width: 100%;
  }
`;
export const PatrymonyOwner = styled.div`
  grid-area: owner;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  label {
    font-weight: bolder;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    min-height: 70%;
  }
  @media (max-width: 875px) {
    margin-right: 0;
    padding-right: 0;
    label {
      min-width: 100%;
      margin-right: 0;
      padding-right: 0;
      margin-bottom: 0;
    }
  }
`;
export const PatrymonyNote = styled.div`
  grid-area: note;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bolder;
    min-height: 93%;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
  @media (max-width: 875px) {
    margin-right: 0;
    padding-right: 0;
    label {
      min-width: 100%;
      margin-right: 0;
      padding-right: 0;
      margin-bottom: 0;
    }
  }
`;

export const PatrymonyDetails = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-right: 10px;
  label {
    font-weight: bolder;
    min-height: 149px;
    color: ${primaryColor};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
  @media (max-width: 875px) {
    margin-right: 0;
    padding-right: 0;
    label {
      min-width: 100%;
      margin-right: 0;
      padding-right: 0;
      margin-bottom: 0;
    }
  }
`;
