import * as S from "./Styled";
import ProductImg from "assets/img/products/4.png";

const CartProductCard = () => {
  return (
    <S.Card>
      <S.LeftCol>
        <S.Profile>
          <S.ProfileAvatar
            src={
              "https://s3-alpha-sig.figma.com/img/069d/4993/effb9b18f14255a7118da3477ecc84db?Expires=1649635200&Signature=RTys6vM4E9Xmg7hJjb3xWi24G8ux6STDBTGPxBIbZZ-7gsb8lNW75CuUnu~JGLTvhQ8QJPYcbxqbKxGMJn857jySEbOKhvvTbG6L7yyPfG7OoI3sTGkraJcfphAaLw90DQs~IdMqxAi-F72bLsBCebrIrLGbpOgmrDLHwCEYpYdenIf7vVYnaaSnzGYE8RJXneIzxd-OxMaE4qBWuS9cAiR93ot7l~-jiUw8ompgM9kt38cigyX0zavTwcJfkRVDmAMWNgyd-XlJt0zAMIvuDWGl6jR~QujBDWbLllk9aEaaZQl93hk77R79~WYR2weIgpOGDSEtpJN9QhQIKHjpLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
          />
          <S.ProfileDetails>
            <S.ProfileName>itlissta</S.ProfileName>
            <S.ProfileRole>Частный продавец</S.ProfileRole>
          </S.ProfileDetails>
        </S.Profile>
        <S.ProductImage src={ProductImg} />
      </S.LeftCol>
      <S.DescriptionCol>
        <S.DescBlock>
          <S.DescriptionTitle>Balenciaga</S.DescriptionTitle>
          <S.DescriptionText>
            Куртка Upside Down Jacket из голубого японского аутентичного денима
          </S.DescriptionText>
        </S.DescBlock>
        <S.SizeBlock>S</S.SizeBlock>
      </S.DescriptionCol>
      <S.PriceCol>$1 089</S.PriceCol>
    </S.Card>
  );
};

export default CartProductCard;
