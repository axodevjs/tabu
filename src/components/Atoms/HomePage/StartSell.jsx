import styled from "styled-components";
import Background from "assets/img/startSell.png";
import Text from "../Text";
import Button from "../Button";

const StyledStartSell = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  background-position: center center;
  margin-top: 30px;
  width: 100%;
  height: 430px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
`;

const StartSell = () => {
  return (
    <StyledStartSell>
      <Wrapper>
        <Text
          color="#ffffff"
          fontFamily="Gilroy"
          fontWeight="700"
          fontSize="40px"
          textTransform="uppercase"
        >
          Начните продавать
        </Text>
        <Text
          color="#ffffff"
          margin="32px 0 0 0"
          fontFamily="Manrope"
          fontWeight="400"
        >
          Продавая вещи, которые пылятся в гардеробе, вы не консервируете <br />{" "}
          деньги у себя в шкафу, а зарабатываете на будущие покупки. На нашем{" "}
          <br /> сайте достаточно двух кликов, чтобы выставить свои вещи на
          продажу.
        </Text>
        <Button
          filled
          margin="48px 0 0 0"
          padding="14px 24px"
          fontSize="15px"
          fontWeight="400"
          fontFamily="Manrope"
        >
          Продать товар
        </Button>
      </Wrapper>
    </StyledStartSell>
  );
};

export default StartSell;
