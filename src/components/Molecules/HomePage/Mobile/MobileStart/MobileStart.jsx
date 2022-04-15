import * as S from "./Styled";

const MobileStart = (props) => {
  return (
    <S.Wrapper {...props}>
      <S.Title>Dior x Shawn Stussy</S.Title>
      <S.SubTitle>ОСЕННЯЯ КОЛЛЕКЦИЯ</S.SubTitle>
      <S.Image />
      <S.Description>
        Dior  выпускает эксклюзивную мужскую капсулу, переосмысливающую
        мощный...
      </S.Description>
      <S.Bottom>
        <S.Slides>
          <S.Slide active />
        </S.Slides>
        <S.Button>Посмотреть</S.Button>
      </S.Bottom>
    </S.Wrapper>
  );
};

export default MobileStart;
