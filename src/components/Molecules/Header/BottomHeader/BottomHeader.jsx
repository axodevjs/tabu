import * as S from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { showHoverMenu, hideHoverMenu } from "redux/reducers/appReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategories } from "redux/actions/categories";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <S.BottomHeader>
      <S.BottomCategories>
        {categories.map((category) => {
          if (category.parent_category === 1) {
            return (
              <S.BottomCategory
                onMouseEnter={() => dispatch(showHoverMenu())}
                onMouseLeave={() => dispatch(hideHoverMenu())}
              >
                {category.title}
              </S.BottomCategory>
            );
          }
        })}
      </S.BottomCategories>
    </S.BottomHeader>
  );
};

export default BottomHeader;
