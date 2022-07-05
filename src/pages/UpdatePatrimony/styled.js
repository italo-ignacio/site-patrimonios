import styled from "styled-components";
import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

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
  .image_input {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .image_label {
    width: 70%;
    max-width: 400px;
    height: width;
    border: 5px dashed ${colors.primaryColor};
    margin: 0 auto 20px;
    cursor: pointer;
  }

  textarea {
    resize: none;
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

export const Label = styled.form`
  font-size: 20px;

  margin: 0 auto;
  margin-bottom: 5px;
  text-align: center;
`;
