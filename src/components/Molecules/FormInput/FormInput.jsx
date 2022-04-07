import * as S from "./Styled";

const FormInput = ({ value, setValue, label }) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
    </S.Wrapper>
  );
};

export default FormInput;
