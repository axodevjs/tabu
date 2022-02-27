import styled, { css } from "styled-components";
import Grid from "./Atoms/Grid";
import ExpandIcon from "./Atoms/Icons/ExpandIcon";
import Text from "./Atoms/Text";

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  &:nth-child(1) {
    margin-top: 0;
  }
`;

const Info = styled.div`
  display: grid;
  margin-top: 0px;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 34.89px 0;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 32.9px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const HalfLine = styled.div`
  display: flex;
  height: 29px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.25);
  margin: ${({ margin }) => margin || ""};
  ${(props) =>
    props.active &&
    css`
      background-color: #000;
    `};
`;

const Questions = () => {
  return (
    <Grid columns="1fr 10fr" padding="64px 0 0 0">
      <Numbers>
        <Number>
          <Text color="#000" fontFamily="Mont" fontWeight="600" fontSize="18px">
            01
          </Text>
          <HalfLine margin="15px 0 0 0" active />
          <HalfLine />
        </Number>
        <Number>
          <Text
            color="rgba(0, 0, 0, 0.25)"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="18px"
          >
            02
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
        <Number>
          <Text
            color="rgba(0, 0, 0, 0.25)"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="18px"
          >
            03
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
        <Number>
          <Text
            color="rgba(0, 0, 0, 0.25)"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="18px"
          >
            04
          </Text>
          <HalfLine margin="15px 0 0 0" />
          <HalfLine />
        </Number>
      </Numbers>
      <Info>
        <Question>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
            flex
            width="100%"
          >
            Кто может продавать товары на площадке TABU ?
          </Text>
          <ExpandIcon />
        </Question>
        <Question>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
            flex
            width="100%"
          >
            Какие преимущества для продавцов ?
          </Text>
          <ExpandIcon />
        </Question>
        <Question>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
            flex
            width="100%"
          >
            Как начать действовать сегодня, чтобы обойти своих конкурентов ?
          </Text>
          <ExpandIcon />
        </Question>
        <Question>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
            flex
            width="100%"
          >
            Какие преимущества для покупателей ?
          </Text>
          <ExpandIcon />
        </Question>
      </Info>
    </Grid>
  );
};

export default Questions;
