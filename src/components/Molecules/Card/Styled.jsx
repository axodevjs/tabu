import { sizes } from "sizes";
import styled from "styled-components";

export const StyledCard = styled.div`
  display: grid;
`;

export const Details = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ImageBlock = styled.div`
  display: grid;
  height: 300px;
  justify-items: center;
  padding-top: 25px;

  @media (max-width: ${sizes.mobile}px) {
    height: 150px;
  }
`;

export const HoverImageBlock = styled.div`
  display: grid;
  height: 300px;
  justify-items: center;

  @media (max-width: ${sizes.mobile}px) {
    height: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const FavoriteIcon = styled.div`
  display: grid;
  justify-self: end;
  position: absolute;
  z-index: 2;
  margin: 20px 20px 0 0;
  cursor: pointer;
  margin-top: 40px;
`;

export const HoverFavoriteIcon = styled.div`
  display: grid;
  justify-self: end;
  position: absolute;
  z-index: 2;
  margin: 20px 20px 0 0;
  cursor: pointer;
  margin-top: 20px;
`;
