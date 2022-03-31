import Card from "components/Molecules/Card/Card";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard/CartProductCard";
import Order from "./Order/Order";
import * as S from "./Styled";

const Left = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <S.Container>
      <S.FirstCont>
        <S.Header>
          <S.Head>ТОВАР</S.Head>
          <S.Head>ОПИСАНИЕ</S.Head>
          <S.Head>ЦЕНА</S.Head>
        </S.Header>
        <S.Cards>
          {cartProducts?.map((product, i) => (
            <CartProductCard key={i} product={product} />
          ))}
        </S.Cards>
      </S.FirstCont>
      <Order />
      <S.Line />
    </S.Container>
  );
};

export default Left;
