import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 40% 30%;
  padding: 16px 16px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  grid-column-gap: 60px;
`;

export const Head = styled.div`
  display: grid;

  font-family: Gilroy;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  padding: ${({ padding }) => padding || ""};
  text-transform: uppercase;
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 40px;
`;
