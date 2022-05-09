import * as S from "./Styled";

const FormInput = ({ value, setValue, label, placeholder, type, disabled }) => {
  return (
    <S.Wrapper>
      <div>
        <S.Label>{label}</S.Label>
      </div>

      <S.Input
        value={value}
        onChange={(e) => !disabled && setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    </S.Wrapper>
  );
};

export default FormInput;
