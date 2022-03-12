import styled, { css } from "styled-components";
import product4 from "assets/img/products/4.png";
import Flex from "components/Atoms/Flex";
import Text from "components/Atoms/Text";
import SelectSize from "../SelectSize/SelectSize";
import { default_sizes } from "components/helpers/sizes";
import Button from "components/Atoms/Button";
import Share from "assets/svg/share.svg";
import Message from "assets/svg/message.svg";
import DivImage from "components/Atoms/DivImage";
import AddFavoriteBtn from "../AddFavoriteBtn";
import closeModal from "assets/svg/closeModal.svg";
import { useSelector } from "react-redux";

export const StyledWrapper = styled.div`
  position: fixed;
  justify-content: center;
  display: flex;
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

export const WrapperModal = styled.div`
  display: flex;
  min-width: 60%;
  align-self: center;
  justify-content: center;
`;

export const StyledModal = styled.div`
  background-color: #fff;
  width: 100%;
`;

export const GridModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CloseBlock = styled.div`
  display: grid;
  padding: 7px 0 0 31.33px;
`;

export const CloseImg = styled.img`
  cursor: pointer;
`;

const ProductModal = (props) => {
  const opened_product = useSelector((state) => state.product.openedProduct);

  const showModal = props.showModal;
  const handleClose = props.handleClose;

  return (
    <StyledWrapper showModal={showModal}>
      <WrapperModal>
        <StyledModal>
          <GridModal>
            <DivImage backgroundSize={"cover"} src={product4} />
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
                {opened_product ? opened_product.title : ""}
              </Text>
              <Text
                margin="19px 0 0 0"
                fontFamily="Mont"
                fontWeight="600"
                fontSize="12px"
                color="#191919"
                textTransform="uppercase"
              >
                {opened_product ? opened_product.description : ""}
              </Text>
              <Flex direction="row" margin="32px 0 0 0">
                <Text
                  fontFamily="Gilroy"
                  fontWeight="600"
                  fontSize="14px"
                  color="#191919"
                >
                  {opened_product ? "$ " + opened_product.price : ""}
                </Text>
                {/* Скидка */}
                {/* <Text
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
                </Text> */}
              </Flex>
              <Flex margin="32px 0 0 0" direction="column" cursor="pointer">
                <Text
                  fontFamily="Gilroy"
                  fontWeight="600"
                  fontSize="12px"
                  color="#191919"
                  textTransform="uppercase"
                  padding="0 0 16px 0"
                  cursor="pointer"
                >
                  Размер:
                </Text>
                <SelectSize sizes={default_sizes} />
              </Flex>
              <Flex name="buttons" margin="32px 0 0 0" direction="column">
                <Button
                  background="#F4F4F6"
                  fontFamily="Mont"
                  fontWeight="600"
                  color="#717171"
                  fontSize="14px"
                  padding="16px 0"
                  border="none"
                  w100
                >
                  Добавить в корзину
                </Button>
                <Button
                  margin="12px 0 0 0"
                  fontFamily="Mont"
                  fontWeight="600"
                  fontSize="14px"
                  padding="16px 0"
                  border="none"
                  dark_filled
                  w100
                >
                  Купить сейчас
                </Button>
                <Button
                  alignCenter
                  background="#ffffff"
                  fontFamily="Mont"
                  fontWeight="600"
                  color="#717171"
                  fontSize="14px"
                  padding="16px 0"
                  border="1px solid #e5e5e5"
                  margin="15px 0 0 0"
                  w100
                >
                  <img src={Share} />
                  <Flex margin="0 0 0 8.42px">Поделиться</Flex>
                </Button>
                <Button
                  alignCenter
                  background="#ffffff"
                  fontFamily="Mont"
                  fontWeight="600"
                  color="#717171"
                  fontSize="14px"
                  padding="16px 0"
                  border="1px solid #e5e5e5"
                  margin="12px 0 0 0"
                  w100
                >
                  <img src={Message} />
                  <Flex margin="0 0 0 8.42px">Свяжитесь с нами</Flex>
                </Button>
              </Flex>
              <AddFavoriteBtn />
            </Flex>
          </GridModal>
          <Flex w100 padding="19px 0" justify="center">
            <Text
              color="#191919"
              fontFamily="Gilroy"
              fontWeight="400"
              fontSize="14px"
              decLine="1px solid #191919"
              cursor="pointer"
            >
              Подробнее
            </Text>
          </Flex>
        </StyledModal>
        <CloseBlock>
          <CloseImg onClick={handleClose} src={closeModal} />
        </CloseBlock>
      </WrapperModal>
    </StyledWrapper>
  );
};

export default ProductModal;
