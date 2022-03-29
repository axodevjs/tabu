import styled from "styled-components";
import AddFavoriteBtn from "components/Molecules/AddFavoriteBtn";
import Flex from "components/Atoms/Flex";
import Button from "components/Atoms/Button";
import { setShareProduct } from "redux/reducers/productReducer";
import { default_sizes } from "components/helpers/sizes";
import SelectSize from "components/Molecules/SelectSize/SelectSize";
import Text from "components/Atoms/Text";
import { useDispatch, useSelector } from "react-redux";
import Share from "assets/svg/share.svg";
import Message from "assets/svg/message.svg";
import { setShowSizesModal } from "redux/reducers/appReducer";

const Container = styled.div``;

const ActionBlock = () => {
  const dispatch = useDispatch();
  const openedProduct = useSelector((state) => state.product.openedProduct);

  const openTableSizes = () => {
    dispatch(setShowSizesModal(true));
  };

  return (
    <Container>
      <Flex direction="column">
        <Text
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="12px"
          color="#717171"
        >
          {!openedProduct
            ? ""
            : openedProduct.category
            ? openedProduct.category.title
            : ""}
        </Text>

        <Text
          margin="32px 0 0 0"
          fontFamily="Gilroy"
          fontWeight="600"
          fontSize="14px"
          color="#191919"
          textTransform="uppercase"
        >
          {openedProduct ? openedProduct.title : ""}
        </Text>
        <Text
          margin="19px 0 0 0"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="12px"
          color="#191919"
          textTransform="uppercase"
        >
          {openedProduct ? openedProduct.description : ""}
        </Text>
        <Flex direction="row" margin="32px 0 0 0">
          <Text
            fontFamily="Gilroy"
            fontWeight="600"
            fontSize="14px"
            color="#191919"
          >
            {openedProduct ? "$ " + openedProduct.price : ""}
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
          <Flex justify="space-between">
            <Text
              fontFamily="Gilroy"
              fontWeight="600"
              fontSize="12px"
              color="#191919"
              textTransform="uppercase"
              cursor="pointer"
            >
              Размер:
            </Text>
            <Text
              fontFamily="Gilroy"
              fontWeight="400"
              fontSize="12px"
              color="#191919"
              decLine="1px solid #191919"
              cursor="pointer"
              onClick={openTableSizes}
            >
              Таблица размеров
            </Text>
          </Flex>

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
            onClick={() =>
              dispatch(setShareProduct({ link: "", showShare: true }))
            }
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
    </Container>
  );
};

export default ActionBlock;
