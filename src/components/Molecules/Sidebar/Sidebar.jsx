import Flex from "components/Atoms/Flex";
import Hr from "components/Atoms/Hr";
import { optionsColored, optionsSize, optionsSizeSelect } from "data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandsOptions,
  getColorOptions,
  getSizeOptions,
} from "redux/actions/filterOptions";
import Category from "./Category/Category";

const Sidebar = () => {
  const dispatch = useDispatch();
  const brandOptions = useSelector((state) => state.filterOptions.brandOptions);
  const colorOptions = useSelector((state) => state.filterOptions.colorOptions);
  const sizeOptions = useSelector((state) => state.filterOptions.sizeOptions);

  useEffect(() => {
    // get options for filter
    dispatch(getBrandsOptions());
    dispatch(getColorOptions());
    dispatch(getSizeOptions());
  }, []);

  return (
    <Flex direction="column">
      <Hr color="#EEEEEE" />
      <Category name="БРЕНД" type="brand" search options={brandOptions} />
      <Category name="ЦВЕТ" type="colored" options={colorOptions} />
      <Category
        name="РАЗМЕР"
        type="size"
        select
        options={sizeOptions}
        optionsSelect={optionsSizeSelect}
      />
    </Flex>
  );
};

export default Sidebar;
