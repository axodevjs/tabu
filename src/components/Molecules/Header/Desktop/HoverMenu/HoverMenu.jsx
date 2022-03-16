import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hideHoverMenu } from "redux/reducers/appReducer";
import * as S from "./Styled";
import { getProductsByCategory } from "redux/actions/product";

const HoverMenu = () => {
  const showHover = useSelector((state) => state.app.showHoverMenu);
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();

  return (
    <>
      {showHover && (
        <S.Wrapper>
          <S.HoverMenu
            id="hover_menu"
            onMouseLeave={() => dispatch(hideHoverMenu())}
          >
            {category.map((subcat, key) => (
              <S.SubCategory key={key}>
                <Link
                  onClick={() => dispatch(getProductsByCategory(subcat.title))}
                  to={`/categories/${subcat.title}`}
                >
                  <S.SubCategoryName>{subcat.title}</S.SubCategoryName>
                </Link>
                <S.SubCategoryItems>
                  {!subcat.children.length
                    ? ""
                    : subcat.children.map((doubleSubCat, key) => (
                        <>
                          <S.SubCategoryItem key={key}>
                            <Link
                              onClick={() =>
                                dispatch(
                                  getProductsByCategory(doubleSubCat.title)
                                )
                              }
                              to={`/categories/${doubleSubCat.title}`}
                            >
                              {doubleSubCat.title}
                            </Link>
                          </S.SubCategoryItem>
                        </>
                      ))}
                </S.SubCategoryItems>
                <S.OpenAll>Открыть все</S.OpenAll>
              </S.SubCategory>
            ))}
          </S.HoverMenu>
        </S.Wrapper>
      )}
    </>
  );
};

export default HoverMenu;
