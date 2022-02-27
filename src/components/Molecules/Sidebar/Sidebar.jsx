import Flex from "components/Atoms/Flex";
import Hr from "components/Atoms/Hr";
import {
  optionsCategory,
  optionsColored,
  optionsSize,
  optionsSizeSelect,
} from "data";
import Category from "./Category/Category";

const Sidebar = () => {
  return (
    <Flex direction="column">
      <Hr color="#EEEEEE" />
      <Category name="КАТЕГОРИЯ" type="default" options={optionsCategory} />
      <Category name="БРЕНД" type="default" search options={optionsCategory} />
      <Category name="ЦВЕТ" type="colored" options={optionsColored} />
      <Category
        name="РАЗМЕР"
        type="default"
        select
        options={optionsSize}
        optionsSelect={optionsSizeSelect}
      />
    </Flex>
  );
};

export default Sidebar;
