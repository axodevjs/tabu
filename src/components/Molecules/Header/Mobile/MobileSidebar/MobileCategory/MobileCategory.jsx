import * as S from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { setMenuCategory } from "redux/reducers/appReducer";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../../../../../../redux/actions/product";

const MobileCategory = () => {
  const dispatch = useDispatch();
  const menuCategory = useSelector((state) => state.app.menuCategory);
  let navigate = useNavigate();

  const onCategoryClick = (category) => {
    navigate(`/categories/${category}`);
    dispatch(getProductsByCategory(category));
  };

  return (
    <S.Wrapper>
      <S.Back onClick={() => dispatch(setMenuCategory({ active: false }))}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 16L10 12L14 8"
            stroke="#191919"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <S.BackText>Назад</S.BackText>
      </S.Back>
      <S.Title>
        {!menuCategory.parentCategory ? "" : menuCategory.parentCategory.title}
      </S.Title>
      <S.Categories>
        {!menuCategory.parentCategory
          ? ""
          : menuCategory.parentCategory.children.map((subcat, i) => (
              <S.Category onClick={() => onCategoryClick(subcat.title)}>
                {subcat.title}
              </S.Category>
            ))}
      </S.Categories>
    </S.Wrapper>
  );
};

export default MobileCategory;
