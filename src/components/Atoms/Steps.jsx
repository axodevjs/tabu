import styled from "styled-components";
import Text from "./Text";

const StyledSteps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: 87px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

const NumberStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  border-radius: 80px;
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  margin-top: 56px;

  color: #191919;
  font-family: Gilroy;
  font-weight: 400;
  font-size: 24px;
`;

const Line = styled.div`
  display: grid;
  align-self: center;
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-left: 20px;
`;

const Steps = () => {
  return (
    <StyledSteps>
      <Step>
        <NumberStep>01</NumberStep>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          textAlign="center"
          textTransform="uppercase"
          margin="24px 0 0 0"
        >
          Выбор и оплата
        </Text>
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="14px"
          textAlign="center"
          margin="24px 0 0 0"
        >
          Выбрать и оплачивать товар можно посредством сайта или в нашем
          мобильном приложении для операционных систем Android и iOS
        </Text>
      </Step>
      <Step>
        <NumberStep>02</NumberStep>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          textAlign="center"
          textTransform="uppercase"
          margin="24px 0 0 0"
        >
          Проверка подлинности
        </Text>
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="14px"
          textAlign="center"
          margin="24px 0 0 0"
        >
          Мы забираем товар у продавца и проверяем его у нашего эксперта. После
          мы прикрепляем к посылке сертификат подлинности и качества
        </Text>
      </Step>
      <Step>
        <NumberStep>01</NumberStep>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          textAlign="center"
          textTransform="uppercase"
          margin="24px 0 0 0"
        >
          Отправка товара
        </Text>
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="600"
          fontSize="14px"
          textAlign="center"
          margin="24px 0 0 0"
        >
          После проверки курьер привозит посылку к вам домой или в офис
          в течение 3-х рабочих дней. За доставкой можно следить в личном
          кабинете
        </Text>
      </Step>
    </StyledSteps>
  );
};

export default Steps;
