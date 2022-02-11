import styled from "styled-components";

const StyledText = styled.div`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  background: ${({ background }) => background || "none"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-family: ${({ fontFamily }) => fontFamily || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  cursor: ${({ cursor }) => cursor || "auto"};
  border-bottom: ${({ decLine }) => decLine || ""};
`;

const Text = (props) => {
  return <StyledText {...props}></StyledText>;
};

export default Text;
