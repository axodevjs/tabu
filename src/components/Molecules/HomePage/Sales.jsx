import styled from "styled-components";
import Banner from "assets/img/sales.png";
import Text from "components/Atoms/Text";

const StyledSales = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 194px;
  background: url(${Banner});
  background-position: center;
`;

const Title = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  font-family: Gilroy;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;

  color: #ffffff;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
`;

const Sales = () => {
  return (
    <StyledSales>
      <Title>Распродажа</Title>
      <Details>
        <Text
          fontFamily="Gilroy"
          fontSize={"32px"}
          textTransform="uppercase"
          fontWeight="600"
          color="#ffffff"
        >
          со скидкой до 70%
        </Text>
        <Text
          fontFamily="Gilroy"
          fontSize={"20px"}
          textTransform="uppercase"
          fontWeight="600"
          decLine="underline"
          color="#ffffff"
          margin="32px 0 0 0"
          cursor="pointer"
        >
          КУПИТЬ СЕЙЧАС
        </Text>
      </Details>
    </StyledSales>
  );
};

export default Sales;
