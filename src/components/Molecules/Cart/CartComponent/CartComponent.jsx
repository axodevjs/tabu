import Grid from "components/Atoms/Grid";
import Left from "./Left/Left";
import Right from "./Right/Right";
import * as S from "./Styled";

const CartComponent = (props) => {
  return (
    <S.Container {...props}>
      <S.Title>Корзина(2)</S.Title>
      <S.Description>Бесплатная доставка и возврат</S.Description>

      <Grid
        margin="56px 0 0 0"
        w100
        justify="start"
        columns="7fr 3fr"
        gap="0 96px"
      >
        <Left />
        <Right />
      </Grid>
    </S.Container>
  );
};

export default CartComponent;
