import styled, { css } from "styled-components";
import Grid from "../../../../Atoms/Grid";
import ExpandIcon from "../../../../Atoms/Icons/ExpandIcon";
import Text from "../../../../Atoms/Text";
import Question from "./Question";

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
  align-content: start;
  margin-top: 0px;
`;

const HalfLine = styled.div`
  display: flex;
  height: 20px;
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
        </Number>
      </Numbers>
      <Info>
        <Question
          first
          title="Кто может продавать товары на площадке TABU ?"
          description="Кто может продавать товары на площадке TABU ?Кто может продавать товары на площадке TABU ?"
        />
        <Question
          title="Кто может продавать товары на площадке TABU ?"
          description="Кто может продавать товары на площадке TABU ?Кто может продавать товары на площадке TABU ?"
        />
        <Question
          title="Кто может продавать товары на площадке TABU ?"
          description="Кто может продавать товары на площадке TABU ?Кто может продавать товары на площадке TABU ?"
        />
        <Question
          title="Кто может продавать товары на площадке TABU ?"
          description="Кто может продавать товары на площадке TABU ?Кто может продавать товары на площадке TABU ?"
        />
      </Info>
    </Grid>
  );
};

export default Questions;
