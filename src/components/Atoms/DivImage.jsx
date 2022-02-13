import styled from "styled-components";

const StyledImage = styled.div`
  background: url(${(props) => props.src});
  background-position: center center;
  background-repeat: no-repeat;
`;

const DivImage = (props) => {
  return <StyledImage {...props}>{props.children}</StyledImage>;
};

export default DivImage;
