import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 40;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.32);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;
  transition: 0.3s;

  ${(props) =>
    props.active &&
    css`
      visibility: inherit;
      opacity: 1;
    `}
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 740px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  padding: 56px 37px 156px 37px;
`;

export const Close = styled.div`
  margin-left: 24px;
  display: flex;
  align-items: start;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  margin-top: 56px;
`;
