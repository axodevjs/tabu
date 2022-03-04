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
  height: auto;
  padding-top: 25px;
`;

export const HoverImageBlock = styled.div`
  display: grid;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
