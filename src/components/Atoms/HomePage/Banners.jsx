import styled from "styled-components";
import Grid from "../Grid";
import Men from "assets/img/banners/1.png";
import Ring from "assets/img/banners/2.png";
import Text from "../Text";

const StyledBanners = styled.div`
  padding: 64px 56px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const Banners = () => {
  return (
    <StyledBanners>
      <Grid columns="2fr 1fr" gap="0 31px">
        <img src={Men} alt="" />
        <Right>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="700"
            fontSize="32px"
            textAlign="center"
          >
            LOVE TOKENS
          </Text>
          <Text
            margin="32px 0 0 0"
            color="#191919"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
            textAlign="center"
          >
            Прикосновение роскоши и романтики для вашего Валентина.{" "}
          </Text>
          <Grid margin="97px 0 0 0">
            <img src={Ring} alt="" />
          </Grid>
          <Text
            margin="90px 0 0 0"
            cursor="pointer"
            color="#191919"
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="20px"
            textAlign="center"
            decLine="1px solid #191919"
            textTransform="uppercase"
          >
            Посмотреть
          </Text>
        </Right>
      </Grid>
    </StyledBanners>
  );
};

export default Banners;
