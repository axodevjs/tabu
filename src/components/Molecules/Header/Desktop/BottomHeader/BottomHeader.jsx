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
      <S.SearchBtn>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33927 2.33989L9.42098 2.42415C11.0279 4.08132 11.2916 6.62316 10.0589 8.57485L9.88757 8.84615C7.93089 11.292 4.17859 11.3247 2.14686 8.94083C0.417167 6.91133 0.606198 3.83507 2.60805 2.07344C4.56365 0.352509 7.52582 0.469761 9.33927 2.33989Z"
            fill="#025B37"
          />
          <path
            d="M9.88757 8.84615V8.84615C7.93089 11.292 4.17858 11.3247 2.14686 8.94083V8.94083C0.417167 6.91133 0.606198 3.83507 2.60805 2.07344V2.07344C4.56365 0.35251 7.52581 0.469762 9.33927 2.33989L9.42098 2.42415C11.0279 4.08132 11.2916 6.62316 10.0589 8.57485L9.88757 8.84615ZM9.88757 8.84615L15 12.6331"
            stroke="white"
          />
        </svg>
      </S.SearchBtn>
    </S.BottomHeader>
  );
};

export default BottomHeader;
