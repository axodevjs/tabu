import DivImage from "components/Atoms/DivImage";
import Grid from "components/Atoms/Grid";
import styled, { css } from "styled-components";
import product4 from "assets/img/products/4.png";
import ImageBlock from "components/Atoms/ImageBlock";
import Flex from "components/Atoms/Flex";
import Text from "components/Atoms/Text";

export const StyledWrapper = styled.div`
  position: fixed;
  display: grid;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.32);
  z-index: 10;

  ${(props) =>
    props.showModal === false &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;

export const StyledModal = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  background-color: #fff;
  grid-template-columns: 1fr 1fr;
  max-width: 52%;
`;

const ProductModal = (props) => {
  const showModal = props.showModal;
  const handleClose = props.handleClose;
  return (
    <StyledWrapper showModal={showModal} onClick={handleClose}>
      <StyledModal>
        <ImageBlock src={product4} />
        <Flex direction="column" padding="20px">
          <Text
            fontFamily="Gilroy"
            fontWeight="600"
            fontSize="12px"
            color="#717171"
          >
            Новинки
          </Text>
          <Text
            margin="32px 0 0 0"
            fontFamily="Gilroy"
            fontWeight="600"
            fontSize="14px"
            color="#191919"
            textTransform="uppercase"
          >
            Balenciaga
          </Text>
          <Text
            margin="19px 0 0 0"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="12px"
            color="#191919"
            textTransform="uppercase"
          >
            Куртка Upside Down Jacket из светло-голубого японского аутентичного
            денима
          </Text>
          <Flex direction="row" margin="32px 0 0 0">
            <Text
              fontFamily="Gilroy"
              fontWeight="600"
              fontSize="14px"
              color="#191919"
            >
              $1 089
            </Text>
            <Text
              margin="0 0 0 20px"
              fontFamily="Gilroy"
              fontWeight="600"
              fontSize="14px"
              color="#ababab"
              decoration="line-through"
            >
              $1 815
            </Text>
            <Text
              margin="0 0 0 20px"
              fontFamily="Gilroy"
              fontWeight="600"
              fontSize="14px"
              color="#EE1616"
            >
              -40%
            </Text>
          </Flex>
        </Flex>
      </StyledModal>
    </StyledWrapper>
  );
};

export default ProductModal;
