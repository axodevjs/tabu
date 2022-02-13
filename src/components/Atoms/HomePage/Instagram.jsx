import styled from "styled-components";
import Grid from "../Grid";
import DivImage from "../DivImage";
import Text from "../Text";
import InstImage1 from "assets/img/instagram/1.png";
import InstImage2 from "assets/img/instagram/2.png";
import InstImage3 from "assets/img/instagram/3.png";
import InstImage4 from "assets/img/instagram/4.png";
import InstImage5 from "assets/img/instagram/5.png";
import InstImage6 from "assets/img/instagram/6.png";
import FavoriteIcon from "../Icons/FavoriteIcon";

const Instagram = () => {
  return (
    <Grid padding="80px 0" margin="20px 0 0 0">
      <Text
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="32px"
        textAlign="center"
        textTransform="uppercase"
      >
        Наш инстаграм
      </Text>
      <Grid
        name="Gallery"
        margin="64px 0 0 0"
        columns="1fr 1fr"
        gap="2px"
        height="612px !important"
      >
        <Grid name="Left" columns="2fr 1fr" gap="2px">
          <DivImage src={InstImage1}>
            <div style={{ margin: "33.33px 0 0 33.33px" }}>
              <FavoriteIcon></FavoriteIcon>
            </div>
          </DivImage>
          <Grid gap="2px">
            <DivImage src={InstImage2}>
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
            <DivImage src={InstImage3}>
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
          </Grid>
        </Grid>
        <Grid name="Right" columns="2fr 1fr" gap="2px">
          <DivImage src={InstImage4}>
            <div style={{ margin: "33.33px 0 0 33.33px" }}>
              <FavoriteIcon></FavoriteIcon>
            </div>
          </DivImage>
          <Grid gap="2px">
            <DivImage src={InstImage5}>
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
            <DivImage src={InstImage6}>
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Instagram;
