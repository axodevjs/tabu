import PhotoBlock from "./PhotoBlock/PhotoBlock";
import * as S from "./Styled";

const SellProduct = () => {
  return (
    <S.Wrapper>
      <S.Title>Продать товар</S.Title>
      <S.Description>
        Дайте своему гардеробу вторую жизнь. Продайте то, что вы не носите,
        мировому сообществу модников разместите объявление о продаже.
      </S.Description>
      <S.Blocks>
        <PhotoBlock />
        <S.ContentBlock>
          <S.TitleBlock>ДОБАВЛЕНИЕ ТОВАРА</S.TitleBlock>
        </S.ContentBlock>
      </S.Blocks>
    </S.Wrapper>
  );
};

export default SellProduct;
