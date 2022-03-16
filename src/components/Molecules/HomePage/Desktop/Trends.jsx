import Grid from "../../../Atoms/Grid";
import Card from "../../Card/Card";
import Text from "../../../Atoms/Text";
import trend1 from "assets/img/trends/1.png";
import trend2 from "assets/img/trends/2.png";
import trend3 from "assets/img/trends/3.png";

const Trends = () => {
  return (
    <Grid>
      <Text
        color="#191919"
        fontFamily="Mont"
        fontWeight="600"
        margin="0 0 0 56px"
        fontSize="24px"
        textTransform="uppercase"
      >
        Сейчас в тренде
      </Text>
      <Grid
        padding="40px 56px"
        alignSelf="center"
        columns="1fr 1fr 1fr"
        gap="0 32px"
        justifyContent="center"
      >
        <Card img={trend1} />
        <Card img={trend2} />
        <Card img={trend3} />
      </Grid>
    </Grid>
  );
};

export default Trends;
