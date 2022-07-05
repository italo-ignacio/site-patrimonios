import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor, textColor } from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }
    body{
        font-family:sans-serif; 
    }
    html,body,#root{
        height:100%;
        background: ${primaryDarkColor};
        color: ${primaryDarkColor};
    }

    button{
        cursor:pointer;
        background: ${primaryColor};
        border: none;
        color: ${textColor};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        transition: all 300ms;
    }
    button:hover{
        filter: brightness(75%);
    }
    a{
        text-decoration:none;
        color:${primaryColor}
    }
    ul{
        list-style:none;
    }
   

`;

export const Container = styled.section`
  width: 60%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
