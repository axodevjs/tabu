import styled from "styled-components";
import Grid from "../Grid";
import Steps from "../Steps";
import Tab from "../Tab";
import Text from "../Text";

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 41px;
`;

const HowWorks = () => {
  return (
    <div>
      <Grid padding="64px 169px">
        <Grid alignSelf="center">
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="32px"
            textAlign="center"
          >
            КАК РАБОТАЕТ СЕРВИС?
          </Text>
          <Tabs>
            <Tab active>Для покупателей</Tab>
            <Tab>Для продавцов</Tab>
          </Tabs>
          <Steps />
        </Grid>
      </Grid>
    </div>
  );
};

export default HowWorks;
