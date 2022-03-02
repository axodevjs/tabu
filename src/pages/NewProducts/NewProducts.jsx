import BreadCrumbs from "components/Atoms/BreadCrumbs/BreadCrumbs";
import Flex from "components/Atoms/Flex";
import Select from "components/Atoms/Form/Select";
import Grid from "components/Atoms/Grid";
import Hr from "components/Atoms/Hr";
import Text from "components/Atoms/Text";
import Sidebar from "components/Molecules/Sidebar/Sidebar";
import Card from "components/Atoms/Card";
import product1 from "assets/img/products/1.png";
import product2 from "assets/img/products/2.png";
import product3 from "assets/img/products/3.png";
import * as S from "./Styled";

const NewProducts = () => {
  return (
    <S.NewProducts>
      <BreadCrumbs />
      <Flex margin="8px 0 0 0" width="100%" justify="center">
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontWeight="400"
          fontSize="20px"
          textAlign="center"
          textTransform="uppercase"
        >
          Новинки
        </Text>
      </Flex>
      <Flex margin="42px 0 0 0" width="100%" justify="end">
        <Select />
      </Flex>
      <Hr margin="15px 0 0 0" color="#E5E5E5" />
      <Grid columns="270px 1fr" gap="0 32px" margin="34px 0 0 0">
        <Sidebar />
        <Grid
          padding="24px 0"
          alignSelf="start"
          columns="1fr 1fr 1fr"
          gap="48px 32px"
          justifyContent="center"
        >
          <Card img={product1} />
          <Card img={product2} />
          <Card img={product3} />
          <Card img={product1} />
          <Card img={product2} />
          <Card img={product3} />
        </Grid>
      </Grid>
    </S.NewProducts>
  );
};

export default NewProducts;
