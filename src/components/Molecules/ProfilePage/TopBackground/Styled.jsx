import styled from "styled-components";

export const TopBackground = styled.div`
  width: 100%;
  height: 185px;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;
`;
