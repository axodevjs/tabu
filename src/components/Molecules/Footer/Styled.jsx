import styled from "styled-components";

export const Footer = styled.footer`
  padding: 56px 80px 32px 80px;
  background-color: #191919;
`;

export const TitleColumn = styled.div`
  font-family: Manrope;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const TextColumn = styled.div`
  font-family: Manrope;
  font-weight: 300;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const DarkText = styled.div`
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Line = styled.div`
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  padding: 0 8px;
`;
