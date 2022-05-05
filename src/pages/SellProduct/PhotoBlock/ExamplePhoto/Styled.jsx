import styled, { css } from "styled-components";

export const ExamplePhoto = styled.div`
  width: 100%;
  height: auto;
  border-radius: 16px;
  margin-top: 72px;

  background-image: url(${(props) => props.src || ""});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 210px;
`;
