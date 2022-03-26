import * as S from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { showHoverMenu } from "redux/reducers/appReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "redux/actions/categories";
import { setCategory, setMainCategory } from "redux/reducers/categoriesReducer";
import { getProductsByCategory } from "redux/actions/product";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const main_category = useSelector((state) => state.categories.main_category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onHover = (category) => {
    dispatch(setCategory(category));
    dispatch(showHoverMenu());
  };

  return (
    <S.BottomHeader>
      <S.BottomCategories>
        {!main_category.children
          ? ""
          : main_category.children.map((category, i) => (
              <S.BottomCategory
                onMouseEnter={() => {
                  onHover(main_category.children[i]);
                }}
              >
                <Link
                  onClick={() =>
                    dispatch(getProductsByCategory(category.title))
                  }
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
