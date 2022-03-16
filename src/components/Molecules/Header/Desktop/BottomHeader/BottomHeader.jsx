import * as S from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { showHoverMenu, hideHoverMenu } from "redux/reducers/appReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "redux/actions/categories";
import { setCategory } from "redux/reducers/categoriesReducer";
import * as $ from "jquery";
import { getProductsByCategory } from "redux/actions/product";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onHover = (category) => {
    dispatch(setCategory(category.children));
    if (category.children.length) {
      dispatch(showHoverMenu());
    }
  };

  return (
    <S.BottomHeader>
      <S.BottomCategories>
        {categories.map((category) => (
          <S.BottomCategory onMouseEnter={() => onHover(category)}>
            <Link
              onClick={() => dispatch(getProductsByCategory(category.title))}
              to={`/categories/${category.title}`}
            >
              {category.title}
            </Link>
          </S.BottomCategory>
        ))}
      </S.BottomCategories>
    </S.BottomHeader>
  );
};

export default BottomHeader;
