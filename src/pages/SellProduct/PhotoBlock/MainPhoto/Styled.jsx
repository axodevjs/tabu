import styled, { css } from "styled-components";

export const MainPhoto = styled.button`
  border: 1px dashed rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 210px;

  margin-top: 24px;
  background: url(${(props) => props.background || "#ffffff"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainText = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  color: #000000;
  margin-top: 32px;
`;
