import styled from "styled-components";

const StyledImageBlock = styled.div`
  width: 100%;
  height: auto;
`;

const ImageRef = styled.img`
  width: 100%;
  height: auto;
`;

const ImageBlock = (props) => {
  return (
    <StyledImageBlock>
      <ImageRef src={props.src} />
    </StyledImageBlock>
  );
};

export default ImageBlock;
