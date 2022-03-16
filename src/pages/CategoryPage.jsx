import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "redux/actions/product";
import BreadCrumbs from "components/Atoms/BreadCrumbs/BreadCrumbs";
import Flex from "components/Atoms/Flex";
import Grid from "components/Atoms/Grid";
import Hr from "components/Atoms/Hr";
import Text from "components/Atoms/Text";
import Sidebar from "components/Molecules/Sidebar/Sidebar";
import Card from "components/Molecules/Card/Card";
import product1 from "assets/img/products/1.png";
import Tags from "components/Molecules/Tags/Tags";
import { useEffect } from "react";
import SelectText from "components/Atoms/Form/SelectText";
import { getBrandsOptions } from "redux/actions/filterOptions";
import { URL } from "config";

const StyledProducts = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  align-self: start;
  grid-gap: 48px 32px;
  justify-content: start;
`;

const CategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  let newProducts = null;
  const optionsSort = [
    { id: 0, name: "Сначала новые" },
    { id: 1, name: "По убыванию цены" },
    { id: 2, name: "По возрастанию цены" },
    { id: 3, name: "По величине скидки" },
  ];

  useEffect(() => {
    if (params.category_name === undefined) {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategory(params.category_name));
    }
  }, []);

  return (
    <Grid padding="25px 56px">
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
          {params.category_name}
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
          <StyledProducts className="w100">
            {products.map((product) => (
              <Card
                key={product.id}
                product_id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                img={URL + product.images[0].image}
              />
            ))}
          </StyledProducts>
        </Flex>
      </Grid>
    </Grid>
  );
};

export default CategoryPage;
