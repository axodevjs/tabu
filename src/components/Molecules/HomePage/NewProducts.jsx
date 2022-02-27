import Grid from "../../Atoms/Grid";
import Card from "../../Atoms/Card";
import product1 from "assets/img/products/1.png";
import product2 from "assets/img/products/2.png";
import product3 from "assets/img/products/3.png";
import Text from "../../Atoms/Text";

// const StyledNewProducts = styled.div`
//   display:
// `;

const NewProducts = () => {
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
        Новинки
      </Text>
      <Grid
        padding="40px 56px"
        alignSelf="center"
        columns="1fr 1fr 1fr"
        gap="0 32px"
        justifyContent="center"
      >
        <Card img={product1} />
        <Card img={product2} />
        <Card img={product3} />
      </Grid>
    </Grid>
  );
};

export default NewProducts;
