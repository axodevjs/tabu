import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;

  width: ${({ width }) => width || ""};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  color: ${({ color }) => color || ""};
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

    ${(props) =>
    props.dark_filled &&
    css`
      background-color: #191919;
      border: 0;
      color: #fff;
    `}

    ${(props) =>
    props.w100 &&
    css`
      width: 100%;
    `}

    ${(props) =>
    props.grid &&
    css`
      display: grid;
    `}

    ${(props) =>
    props.alignCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

    ${(props) =>
    props.green &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #025b37;
      color: #fff;
      border: none;
    `}
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
