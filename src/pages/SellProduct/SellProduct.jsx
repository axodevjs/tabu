import Button from "components/Atoms/Button";
import { useEffect, useState } from "react";
import { sizes } from "sizes";
import ContentBlock from "./ContentBlock/ContentBlock";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import * as S from "./Styled";

const SellProduct = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (window.innerWidth < sizes.mobile) {
      setIsMobile(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Продать товар</S.Title>
      <S.Description>
        Подарите своему гардеробу вторую жизнь - продайте то, что вы не носите
      </S.Description>
      <S.Blocks>
        <PhotoBlock showPhoto={showPhoto} setShowPhoto={setShowPhoto} />
        <ContentBlock />
      </S.Blocks>
      <S.Buttons>
        <Button grayBorder>Опубликовать этот товар</Button>
        <Button topGreen padding="14px 23px" margin="0 0 0 32px">
          Добавить еще товар
        </Button>
      </S.Buttons>
    </S.Wrapper>
  );
};

export default SellProduct;
