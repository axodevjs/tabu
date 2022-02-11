import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.outlined &&
    css`
      font-family: "Mont";
      font-size: 13px;
      font-weight: 600;
      padding: 12px 16px;
      background-color: #ffffff;
      border: 1px solid #000000 !important;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
