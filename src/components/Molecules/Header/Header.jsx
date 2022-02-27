import React from "react";
import * as S from "./Styled";
import Button from "../../Atoms/Button";

const Header = () => {
  return (
    <>
      <S.TopHeader>
        Hовая и почти новая одежда &nbsp; | &nbsp; Гарантия подлинности &nbsp; |
        &nbsp; Безопасная сделка &nbsp; | &nbsp; Доставка от двери до двери
      </S.TopHeader>
      <S.StyledHeader>
        <S.Categories>
          <S.Category>ДЛЯ НЕЕ</S.Category>
          <S.Category>ДЛЯ НЕГО</S.Category>
          <S.Category>ДЕТЯМ</S.Category>
        </S.Categories>
        <S.Logo>TABU</S.Logo>
        <S.UserBlock>
          <Button outlined={true}>Продать товар</Button>
          <S.Cart>
            <svg
              width={17}
              height={18}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 4.5H14.5L15.5 17.5H1.5L2.5 4.5Z"
                stroke="black"
                strokeLinecap="round"
              />
              <path
                d="M5.5 6.5V3.5C5.5 1.84315 6.84315 0.5 8.5 0.5C10.1569 0.5 11.5 1.84315 11.5 3.5V6.5"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
          </S.Cart>
          <S.Favorite>
            <svg
              width={21}
              height={18}
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5497 2.12403C17.493 1.08335 16.0694 0.5 14.5861 0.5C13.1031 0.5 11.6795 1.08335 10.6228 2.12403C10.5288 2.21797 10.4374 2.31538 10.3488 2.41643C10.2601 2.31556 10.1687 2.21797 10.0748 2.12403C9.01805 1.08335 7.59448 0.5 6.1114 0.5C4.62812 0.5 3.20456 1.08335 2.14785 2.12403C1.09351 3.16345 0.5 4.58208 0.5 6.06264C0.5 7.54321 1.09351 8.96184 2.14785 10.0013L10.3486 17.7952L18.5494 9.991C19.6012 8.95196 20.1933 7.53496 20.1933 6.05621C20.1933 4.57765 19.6012 3.16065 18.5494 2.12161L18.5497 2.12403ZM17.824 9.24163L10.3489 16.3541L2.88174 9.24955C2.02675 8.40696 1.54538 7.25666 1.54538 6.05612C1.54538 4.85576 2.02675 3.70546 2.88174 2.86268C3.85162 1.89756 5.20233 1.41688 6.56382 1.55238C7.92549 1.68783 9.15498 2.42503 9.91582 3.56219L10.3491 4.20963L10.7824 3.56237V3.56219C10.9509 3.3104 11.1442 3.07606 11.3592 2.86269C12.22 2.01497 13.3798 1.53998 14.5879 1.53998C15.7959 1.53998 16.9557 2.01497 17.8165 2.86269C18.6691 3.70509 19.1489 4.85376 19.1489 6.0523C19.1489 7.25084 18.6691 8.39928 17.8165 9.24173L17.824 9.24163Z"
                fill="black"
              />
            </svg>
          </S.Favorite>
          <S.Profile>Мой Профиль</S.Profile>
        </S.UserBlock>
      </S.StyledHeader>
      <S.BottomHeader>
        <S.BottomCategories>
          <S.BottomCategory>Наша подборка</S.BottomCategory>
          <S.BottomCategory>Новинки</S.BottomCategory>
          <S.BottomCategory>Женская</S.BottomCategory>
          <S.BottomCategory>Мужская</S.BottomCategory>
          <S.BottomCategory>Бренды</S.BottomCategory>
          <S.BottomCategory>Аксессуары</S.BottomCategory>
          <S.BottomCategory>Бьюти</S.BottomCategory>
          <S.BottomCategory>Обувь</S.BottomCategory>
          <S.BottomCategory>Сумки</S.BottomCategory>
        </S.BottomCategories>
      </S.BottomHeader>
    </>
  );
};

export default Header;
