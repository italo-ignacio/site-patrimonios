import styled from "styled-components";
import * as colors from "../../config/colors";

export const Container = styled.div`
  width: 300px;
  background: #fff;
  margin-top: 15px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
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
