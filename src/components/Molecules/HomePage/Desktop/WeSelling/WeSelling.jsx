import Button from "components/Atoms/Button";
import * as S from "./Styled";

const WeSelling = () => {
  return (
    <S.Wrapper>
      <S.Title>Продаем товар за вас</S.Title>
      <S.Description>
        Продавая вещи, которые пылятся в гардеробе, вы не консервируете деньги у
        себя в шкафу, а зарабатываете на будущие покупки.
      </S.Description>
      <S.ButtonBlock>
        <Button padding="14px 24px" topGreen>
          Продать товар
        </Button>
      </S.ButtonBlock>
    </S.Wrapper>
  );
};

export default WeSelling;
