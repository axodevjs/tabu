import Grid from "../../../Atoms/Grid";
import Card from "../../Card/Card";
import Text from "../../../Atoms/Text";
import trend1 from "assets/img/trends/1.png";
import trend2 from "assets/img/trends/2.png";
import trend3 from "assets/img/trends/3.png";
import TrendsSlider from "components/Molecules/TrendsSlider/TrendsSlider";
import { useSelector } from "react-redux";

const Trends = () => {
  const trendProducts = useSelector((state) => state.product.trends);

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
      <TrendsSlider products={trendProducts} />
    </Grid>
  );
};

export default Trends;
