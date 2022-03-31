import Card from "components/Molecules/Card/Card";
import CartProductCard from "./CartProductCard/CartProductCard";
import * as S from "./Styled";

const Left = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Head>ТОВАР</S.Head>
        <S.Head>ОПИСАНИЕ</S.Head>
        <S.Head>ЦЕНА</S.Head>
      </S.Header>
      <S.Cards>
        <CartProductCard />
        <CartProductCard />
      </S.Cards>
    </S.Container>
  );
};

export default Left;
