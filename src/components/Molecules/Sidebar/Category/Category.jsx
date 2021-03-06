import Flex from "components/Atoms/Flex";
import CheckBox from "components/Atoms/Form/CheckBox";
import DefaultSelect from "components/Atoms/Form/DefaultSelect";
import SearchInput from "components/Atoms/Form/SearchInput";
import Hr from "components/Atoms/Hr";
import ExpandIcon from "components/Atoms/Icons/ExpandIcon";
import Text from "components/Atoms/Text";
import MultiRangeSlider from "components/Molecules/multiRangeSlider/MultiRangeSlider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "redux/actions/product";
import {
  setBrandOptions,
  setColorOptions,
  setMaterialOptions,
  setSizeOptions,
} from "redux/reducers/filterOptionsReducer";
import styled from "styled-components";

const StyledCategory = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryName = styled.div`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 14px;
  color: #191919;
`;

const Options = styled.div`
  margin-top: 4px;
`;

const Checks = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || "164px"};
  overflow: auto;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 56px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #fff;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-radius: 16px;
  }
`;

const Category = (props) => {
  let query = "";
  const dispatch = useDispatch();
  const params = useParams();
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const materialOptions = useSelector(
    (state) => state.filterOptions.materialOptions
  );

  const getProductsByFilter = () => {
    dispatch(
      getProductsByCategory(
        params.category_name,
        brandOptions.filter((x) => x.selected === true),
        colorOptions.filter((x) => x.selected === true),
        sizeOptions.filter((x) => x.selected === true),
        materialOptions.filter((x) => x.selected === true)
      )
    );
  };

  const toggleCheckbox = (type, title) => {
    // ?????????????????? ?? ??????????????
    if (type === "brand") {
      let brandOption = brandOptions.find((x) => x.title === title);
      let brandOptionsCopy = brandOptions;
      let foundBrandIndex = brandOptions.findIndex((x) => x.title === title);

      if (brandOption) {
        brandOption.selected = !brandOption.selected;
        brandOptionsCopy[foundBrandIndex] = brandOption;

        dispatch(setBrandOptions(brandOptionsCopy));
        getProductsByFilter();
      }
    }

    if (type === "material") {
      let option = materialOptions.find((x) => x.title === title);
      let optionsCopy = materialOptions;
      let foundIndex = materialOptions.findIndex((x) => x.title === title);

      if (option) {
        option.selected = !option.selected;
        optionsCopy[foundIndex] = option;

        dispatch(setMaterialOptions(optionsCopy));
        getProductsByFilter();
      }
    }

    if (type === "color") {
      let colorOption = colorOptions.find((x) => x.title === title);
      let colorOptionsCopy = colorOptions;
      let foundColorIndex = colorOptions.findIndex((x) => x.title === title);

      if (colorOption) {
        colorOption.selected = !colorOption.selected;
        colorOptionsCopy[foundColorIndex] = colorOption;

        dispatch(setColorOptions(colorOptionsCopy));
        getProductsByFilter();
      }
    }

    if (type === "size") {
      let sizeOption = sizeOptions.find((x) => x.title === title);
      let sizeOptionsCopy = sizeOptions;
      let foundSizeIndex = sizeOptions.findIndex((x) => x.title === title);

      if (sizeOption) {
        sizeOption.selected = !sizeOption.selected;
        sizeOptionsCopy[foundSizeIndex] = sizeOption;

        dispatch(setSizeOptions(sizeOptionsCopy));
        getProductsByFilter();
      }
    }
  };

  return (
    <StyledCategory>
      <Flex justify="space-between" align="center" width="100%">
        <CategoryName>{props.name}</CategoryName>
        <ExpandIcon />
      </Flex>
      <Options {...props}>
        {/* ???????? ???????????? ??????????, ?????????????????????? ?????????? */}
        {props.search && <SearchInput placeholder="?????????? ????????????????????" />}

        {/* ???????? ???????????? select, ?????????????????????? select */}
        {props.select && <DefaultSelect optionsSelect={props.optionsSelect} />}
        {/* ???????????? ?????????????? ?????? */}
        <div>
          <Text
            fontFamily="Gilroy"
            fontWeight="600"
            fontSize="14px"
            color="#191919"
            margin="25px 0 0 0"
            decLine="1px solid #191919"
            inlineGrid
            cursor="pointer"
          >
            ?????????????? ??????
          </Text>
        </div>

        <Checks>
          {props?.type === "category" &&
            props &&
            props?.option &&
            props?.options?.map((option, i) => (
              <CheckBox
                onClick={(e) => toggleCheckbox("category", option.title)}
                key={i}
                name={option.title}
              />
            ))}

          {/* ???????? ?????? ?????????????????? default, ?????????????????? ?????????????? ???????????????? */}
          {props.type === "brand" &&
            props.options.map((option, i) => (
              <CheckBox
                onClick={(e) => toggleCheckbox("brand", option.title)}
                key={i}
                name={option.title}
              />
            ))}

          {props.type === "size" &&
            props.options.map((option, i) => (
              <CheckBox
                onClick={() => toggleCheckbox("size", option.title)}
                key={i}
                name={option.title}
              />
            ))}

          {/* ???????? ?????? ?????????????????? colored, ?????????????????? ?????????????? ???????????????? */}
          {props.type === "colored" &&
            props.options.map((option, i) => (
              <CheckBox
                key={i}
                onClick={() => toggleCheckbox("color", option.title)}
                color={option.color_code}
                name={option.title}
              />
            ))}

          {/* ???????? ?????? ?????????????????? material, ?????????????????? ?????????????? ???????????????? */}
          {props.type === "material" &&
            props.options.map((option, i) => (
              <CheckBox
                onClick={(e) => toggleCheckbox("material", option.title)}
                key={i}
                name={option.title}
              />
            ))}

          {/* ???????? ?????? ?????????????????? price, ?????????????????? ?????????? ?? ?????????? */}
          {props.type === "price" && (
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          )}
        </Checks>
      </Options>
      <Hr margin="24px 0 0 0" color="#EEEEEE" />
    </StyledCategory>
  );
};

export default Category;
