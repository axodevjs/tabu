import * as S from "./Styled";

const ExamplePhoto = (props) => {
  return <S.ExamplePhoto {...props} src={props?.src} alt="" />;
};

export default ExamplePhoto;
