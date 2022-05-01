import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideHoverMenu } from "redux/reducers/appReducer";
import * as S from "./Styled";
import { getProductsByCategory } from "redux/actions/product";
import React, { useEffect } from "react";

const HoverMenu = () => {
  const showHover = useSelector((state) => state.app.showHoverMenu);
  const category = useSelector((state) => state.categories.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const disableScrolling = () => {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  };

  const enableScrolling = () => {
    window.onscroll = function () {};
  };

  const onClickLink = () => {
    dispatch(hideHoverMenu());
  };

  useEffect(() => {
    if (showHover === true) {
      disableScrolling();
    } else {
      enableScrolling();
    }
  }, [showHover]);

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
                onClick={() => {
                  dispatch(getProductsByCategory(category.title));
                  onClickLink();
                }}
                to={`/categories/${category.title}`}
              >
                <S.SubCategoryName onClick={() => onClickLink()}>
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
                            onClick={() => {
                              dispatch(
                                getProductsByCategory(doubleSubCat.title)
                              );
                              onClickLink();
                            }}
                            to={`/categories/${doubleSubCat.title}`}
                          >
                            {doubleSubCat.title}
                          </Link>
                        </S.SubCategoryItem>
                      </React.Fragment>
                    ))}
              </S.SubCategoryItems>
              <S.OpenAll
                onClick={() => {
                  navigate(`/categories/${category.title}`);
                  dispatch(hideHoverMenu());
                }}
              >
                Открыть все
              </S.OpenAll>
            </S.SubCategory>
          </S.HoverMenu>
        </S.Wrapper>
      )}
    </>
  );
};

export default HoverMenu;
