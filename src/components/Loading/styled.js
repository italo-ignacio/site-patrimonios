import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d3d3d3;
  font-size: 50px;
  font-weight: 900;
  .icone {
    animation: rotate 1s infinite;
    border: 10px solid #e5e5e5;
    border-top-color: ${primaryColor};
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-left: 10px;
  }
  @keyframes rotate {
    to {
      transform: rotate(-1turn);
    }
  }
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }

  span {
    z-index: 2;
  }

  @media (max-width: 490px) {
    font-size: 30px;
    .icone {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 260px) {
    display: flex;
    flex-direction: column;
  }
`;
