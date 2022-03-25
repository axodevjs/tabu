import styled from "styled-components";
import Grid from "components/Atoms/Grid";
import DivImage from "components/Atoms/DivImage";
import Text from "components/Atoms/Text";
import InstImage1 from "assets/img/instagram/1.png";
import InstImage2 from "assets/img/instagram/2.png";
import InstImage3 from "assets/img/instagram/3.png";
import InstImage4 from "assets/img/instagram/4.png";
import InstImage5 from "assets/img/instagram/5.png";
import InstImage6 from "assets/img/instagram/6.png";
import FavoriteIcon from "components/Atoms/Icons/FavoriteIcon";

const MobileInstagram = () => {
  return (
    <Grid padding="48px 0 0">
      <Text
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="20px"
        textAlign="center"
        textTransform="uppercase"
      >
        Наш инстаграм
      </Text>
      <Grid
        name="Gallery"
        margin="32px 0 0 0"
        columns="2fr 1fr"
        gap="2px"
        height="250px !important"
      >
        <Grid name="Left" columns="2fr 1fr" gap="2px">
          <DivImage backgroundSize="cover" src={InstImage1}>
            <div style={{ margin: "33.33px 0 0 33.33px" }}>
              <FavoriteIcon></FavoriteIcon>
            </div>
          </DivImage>
          <Grid gap="2px">
            <DivImage backgroundSize="cover" src={InstImage2}>
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
            <DivImage
              backgroundSize="cover"
              backgroundPosition="center 0%"
              src={InstImage3}
            >
              <div style={{ margin: "33.33px 0 0 33.33px" }}>
                <FavoriteIcon></FavoriteIcon>
              </div>
            </DivImage>
          </Grid>
        </Grid>
        <Grid name="Right" gap="2px">
          <DivImage backgroundSize="cover" src={InstImage4}>
            <div style={{ margin: "33.33px 0 0 33.33px" }}>
              <FavoriteIcon></FavoriteIcon>
            </div>
          </DivImage>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileInstagram;
