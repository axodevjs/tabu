import BreadCrumbs from "components/Atoms/BreadCrumbs/BreadCrumbs";
import Flex from "components/Atoms/Flex";
import Select from "components/Atoms/Form/Select";
import Grid from "components/Atoms/Grid";
import Hr from "components/Atoms/Hr";
import Text from "components/Atoms/Text";
import Sidebar from "components/Molecules/Sidebar/Sidebar";
import Card from "components/Molecules/Card/Card";
import product1 from "assets/img/products/1.png";
import product2 from "assets/img/products/2.png";
import product3 from "assets/img/products/3.png";
import * as S from "./Styled";
import Tags from "components/Molecules/Tags/Tags";
import { useEffect } from "react";
import { getProducts } from "redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import SelectText from "components/Atoms/Form/SelectText";

const NewProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const optionsSort = [
    { id: 0, name: "Сначала новые" },
    { id: 1, name: "По убыванию цены" },
    { id: 2, name: "По возрастанию цены" },
    { id: 3, name: "По величине скидки" },
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
        <SelectText options={optionsSort} />
      </Flex>
      <Hr margin="15px 0 0 0" color="#E5E5E5" />
      <Grid columns="270px 1fr" gap="0 32px" margin="34px 0 0 0">
        <Sidebar />
        <Flex direction="column">
          <Tags />
          <Grid
            alignSelf="start"
            columns="repeat(auto-fit, minmax(300px, 350px))"
            gap="48px 32px"
            justifyContent="start"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                product_id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={product1}
              />
            ))}
          </Grid>
        </Flex>
      </Grid>
    </S.NewProducts>
  );
};

export default NewProducts;
