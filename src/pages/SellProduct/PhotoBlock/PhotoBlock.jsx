import ExamplePhoto from "./ExamplePhoto/ExamplePhoto";
import MainPhoto from "./MainPhoto/MainPhoto";
import * as S from "./Styled";

const PhotoBlock = () => {
  return (
    <S.PhotoBlock>
      <S.TitleBlock>ФОТО</S.TitleBlock>
      <S.TwoSections>
        <S.LeftSection>
          <S.TitleSection>ОСНОВНОЕ ФОТО</S.TitleSection>
          <MainPhoto main_text="Фотография спереди" />
          <MainPhoto main_text="Фотография сзади" />
          <MainPhoto main_text="Фотография фирменной бирки" />
          <MainPhoto main_text="Фото сбоку" />
          <MainPhoto main_text="Фото изнутри" />
        </S.LeftSection>
        <S.RightSection>
          <S.TitleSection>ПРИМЕР ФОТО</S.TitleSection>
          <ExamplePhoto first src="/img/product-views/front.png" />
          <ExamplePhoto src="/img/product-views/back.png" />
          <ExamplePhoto src="/img/product-views/brand.png" />
          <ExamplePhoto src="/img/product-views/side.png" />
          <ExamplePhoto src="/img/product-views/inside.png" />
        </S.RightSection>
      </S.TwoSections>
    </S.PhotoBlock>
  );
};

export default PhotoBlock;
