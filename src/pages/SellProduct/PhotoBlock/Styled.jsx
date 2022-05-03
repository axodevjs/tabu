import styled from "styled-components";

export const PhotoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const LeftSection = styled.div`
  width: 100%;
`;

export const RightSection = styled.div``;

export const TwoSections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  grid-column-gap: 20px;
  margin-top: 56px;
  width: 100%;
`;

export const TitleSection = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */

  text-transform: uppercase;

  color: #000000;
  margin-top: 56px;
`;

export const TitleBlock = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-transform: uppercase;

  /* Tabu/Black */

  color: #191919;
`;
