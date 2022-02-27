import styled from "styled-components";

const StyledImage = styled.div`
  background: url(${(props) => props.src});
  background-position: ${({ backgroundPosition }) =>
    backgroundPosition || "center center"};
  background-repeat: no-repeat;
  background-size: ${({ backgroundSize }) => backgroundSize || "100%"};
`;

const DivImage = (props) => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};

export default DivImage;
