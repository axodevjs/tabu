import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "redux/actions/product";
import BreadCrumbs from "components/Atoms/BreadCrumbs/BreadCrumbs";
import Flex from "components/Atoms/Flex";
import Grid from "components/Atoms/Grid";
import Hr from "components/Atoms/Hr";
import * as S from "./StyledCategory";
import Sidebar from "components/Molecules/Sidebar/Sidebar";
import Card from "components/Molecules/Card/Card";
import Tags from "components/Molecules/Tags/Tags";
import { useEffect } from "react";
import SelectText from "components/Atoms/Form/SelectText";
import { URL } from "config";
import { sizes } from "../../sizes";
import SortButtons from "../../components/Molecules/CategoryPage/SortButtons/SortButtons";
import MobileFilter from "../../components/Molecules/MobileFilter/MobileFilter";
import MobileSort from "components/Molecules/MobileSort/MobileSort";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const optionsSort = [
    { id: 0, name: "Сначала новые" },
    { id: 1, name: "По убыванию цены" },
    {
      id: 2,
      name: "По возрастанию цены",
    },
    { id: 3, name: "По величине скидки" },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSort, setActiveSort] = useState(false);

  useEffect(() => {
    if (params.category_name === undefined) {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategory(params.category_name));
    }

    // check screen width
    if (window.innerWidth < sizes.mobile) {
      setIsMobile(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <MobileFilter active={activeFilter} setActive={setActiveFilter} />
      <MobileSort active={activeSort} setActive={setActiveSort} />
      <BreadCrumbs />
      <S.TitlePage>{params.category_name}</S.TitlePage>
      {!isMobile ? (
        <>
          <Flex margin="42px 0 0 0" width="100%" justify="end">
            <SelectText options={optionsSort} />
          </Flex>
          <Hr margin="15px 0 0 0" color="#E5E5E5" />
        </>
      ) : (
        <SortButtons
          setActiveFilter={setActiveFilter}
          setActiveSort={setActiveSort}
        />
      )}

      {!isMobile ? (
        <Grid columns="270px 1fr" gap="0 32px" margin="34px 0 0 0">
          <Sidebar />
          <Flex direction="column">
            <Tags />
            <S.StyledProducts className="w100">
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
            </S.StyledProducts>
          </Flex>
        </Grid>
      ) : (
        <S.StyledProducts>
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
        </S.StyledProducts>
      )}
    </S.Wrapper>
  );
};

export default CategoryPage;
