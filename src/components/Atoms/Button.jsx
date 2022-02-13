import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;

  font-family: ${({ fontFamily }) => fontFamily || "Mont"};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  padding: ${({ padding }) => padding || "12px 16px"};
  margin: ${({ margin }) => margin || "0"};

  ${(props) =>
    props.outlined &&
    css`
      background-color: #ffffff;
      border: 1px solid #000000 !important;
    `}

  ${(props) =>
    props.filled &&
    css`
      background-color: #ffffff;
      border: 0;
      color: #000;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
