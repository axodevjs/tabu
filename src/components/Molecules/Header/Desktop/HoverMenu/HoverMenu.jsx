import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hideHoverMenu } from "redux/reducers/appReducer";
import * as S from "./Styled";
import { getProductsByCategory } from "redux/actions/product";
import React, { useEffect } from "react";

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
            <S.SubCategory>
              <Link
                onClick={() => dispatch(getProductsByCategory(category.title))}
                to={`/categories/${category.title}`}
              >
                <S.SubCategoryName onClick={() => console.log(category)}>
                  {category.title}
                </S.SubCategoryName>
              </Link>
              <S.SubCategoryItems>
                {!category.children.length
                  ? ""
                  : category.children.map((doubleSubCat, i) => (
                      <React.Fragment key={i}>
                        <S.SubCategoryItem>
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
                      </React.Fragment>
                    ))}
              </S.SubCategoryItems>
              <S.OpenAll>Открыть все</S.OpenAll>
            </S.SubCategory>
          </S.HoverMenu>
        </S.Wrapper>
      )}
    </>
  );
};

export default HoverMenu;
