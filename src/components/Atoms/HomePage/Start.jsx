import styled from "styled-components";
import Grid from "../Grid";
import Text from "../Text";
import RightImg from "assets/img/start.png";
import startProduct from "assets/img/startProduct.png";
import Hr from "../Hr";
import MoreButton from "../MoreButton";

const Start = () => {
  return (
    <Grid columns="1fr 1fr" gap={"0 69px"} padding="80px 137px">
      <div>
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="72px"
        >
          Dior x Shawn <br /> Stussy
        </Text>

        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          margin="50px 0 0 0"
        >
          ОСЕННЯЯ КОЛЛЕКЦИЯ
        </Text>
        <Hr margin="25px 0 0 0" />
        <Grid columns="1fr 1fr" gap="0 52px" margin="48px 0 0 0">
          <img src={startProduct} alt="" />
          <Grid alignContent="center">
            <div>
              <Text
                color="#191919"
                fontFamily="Gilroy"
                fontWeight="600"
                fontSize="14px"
              >
                Dior  выпускает эксклюзивную мужскую капсулу, переосмысливающую
                мощный творческий диалог между Кимом Джонсом и художником Шоном
                Стусси.
              </Text>
              <MoreButton margin="66px 0 0 0">посмотреть</MoreButton>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid justifyItems="end">
        <img src={RightImg} alt="" />
      </Grid>
    </Grid>
  );
};

export default Start;
