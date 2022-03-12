import Text from "components/Atoms/Text";
import { useSelector } from "react-redux";
import * as S from "./Styled";

const HoverMenu = () => {
  const showHover = useSelector((state) => state.app.showHoverMenu);

  return (
    <>
      {showHover && (
        <S.Wrapper>
          <S.HoverMenu>
            <S.SubCategory>
              <S.SubCategoryName>Аксессуары</S.SubCategoryName>
              <S.SubCategoryItems>
                <S.SubCategoryItem>Визитницы</S.SubCategoryItem>
                <S.SubCategoryItem>Головные уборы</S.SubCategoryItem>
                <S.SubCategoryItem>Гошельки</S.SubCategoryItem>
                <S.SubCategoryItem>Ободки</S.SubCategoryItem>
                <S.SubCategoryItem>Очки</S.SubCategoryItem>
                <S.SubCategoryItem>Перчатки</S.SubCategoryItem>
                <S.SubCategoryItem>Повязки на голову</S.SubCategoryItem>
              </S.SubCategoryItems>
              <Text
                fontFamily="Mont"
                fontWeight="700"
                fontSize="12px"
                textTransform="uppercase"
                color="#191919"
                cursor="pointer"
                margin="40px 0 0 0"
              >
                Открыть все
              </Text>
            </S.SubCategory>
            <S.SubCategory>
              <S.SubCategoryName>Обувь</S.SubCategoryName>
              <S.SubCategoryItems>
                <S.SubCategoryItem>Визитницы</S.SubCategoryItem>
                <S.SubCategoryItem>Головные уборы</S.SubCategoryItem>
                <S.SubCategoryItem>Гошельки</S.SubCategoryItem>
                <S.SubCategoryItem>Ободки</S.SubCategoryItem>
                <S.SubCategoryItem>Очки</S.SubCategoryItem>
              </S.SubCategoryItems>
              <Text
                fontFamily="Mont"
                fontWeight="700"
                fontSize="12px"
                textTransform="uppercase"
                color="#191919"
                cursor="pointer"
                margin="40px 0 0 0"
              >
                Открыть все
              </Text>
            </S.SubCategory>

            <S.SubCategory>
              <S.SubCategoryName>Сумки</S.SubCategoryName>
              <S.SubCategoryItems>
                <S.SubCategoryItem>Визитницы</S.SubCategoryItem>
                <S.SubCategoryItem>Головные уборы</S.SubCategoryItem>
                <S.SubCategoryItem>Гошельки</S.SubCategoryItem>
                <S.SubCategoryItem>Ободки</S.SubCategoryItem>
                <S.SubCategoryItem>Очки</S.SubCategoryItem>
              </S.SubCategoryItems>
              <Text
                fontFamily="Mont"
                fontWeight="700"
                fontSize="12px"
                textTransform="uppercase"
                color="#191919"
                cursor="pointer"
                margin="40px 0 0 0"
              >
                Открыть все
              </Text>
            </S.SubCategory>
            <S.SubCategory>
              <S.SubCategoryName>одежда</S.SubCategoryName>
              <S.SubCategoryItems>
                <S.SubCategoryItem>Визитницы</S.SubCategoryItem>
                <S.SubCategoryItem>Головные уборы</S.SubCategoryItem>
                <S.SubCategoryItem>Повязки на голову</S.SubCategoryItem>
              </S.SubCategoryItems>
              <Text
                fontFamily="Mont"
                fontWeight="700"
                fontSize="12px"
                textTransform="uppercase"
                color="#191919"
                cursor="pointer"
                margin="40px 0 0 0"
              >
                Открыть все
              </Text>
            </S.SubCategory>
          </S.HoverMenu>
        </S.Wrapper>
      )}
    </>
  );
};

export default HoverMenu;
