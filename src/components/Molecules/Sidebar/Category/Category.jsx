import Flex from "components/Atoms/Flex";
import CheckBox from "components/Atoms/Form/CheckBox";
import DefaultSelect from "components/Atoms/Form/DefaultSelect";
import SearchInput from "components/Atoms/Form/SearchInput";
import Hr from "components/Atoms/Hr";
import ExpandIcon from "components/Atoms/Icons/ExpandIcon";
import Text from "components/Atoms/Text";
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
`;

const Category = (props) => {
  return (
    <StyledCategory>
      <Flex justify="space-between" align="center" width="100%">
        <CategoryName>{props.name}</CategoryName>
        <ExpandIcon />
      </Flex>
      <Options {...props}>
        {/* Если указан поиск, добавляется поиск */}
        {props.search && <SearchInput placeholder="Поиск дизайнеров" />}

        {/* Если указан select, добавляется select */}
        {props.select && <DefaultSelect optionsSelect={props.optionsSelect} />}

        {/* Кнопка выбрать всё */}
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
            Выбрать все
          </Text>
        </div>

        <Checks>
          {/* Если тип категории default, выводятся обычные чекбоксы */}
          {props.type === "default" &&
            props.options.map((option) => <CheckBox name={option.name} />)}

          {/* Если тип категории colored, выводятся цветные чекбоксы */}
          {props.type === "colored" &&
            props.options.map((option) => (
              <CheckBox color={option.color} name={option.name} />
            ))}
        </Checks>
      </Options>
      <Hr margin="24px 0 0 0" color="#EEEEEE" />
    </StyledCategory>
  );
};

export default Category;
