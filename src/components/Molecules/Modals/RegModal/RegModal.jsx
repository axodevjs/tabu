import Radio from "components/Atoms/Form/Radio";
import FormInput from "components/Molecules/FormInput/FormInput";
import { useState } from "react";
import * as S from "./Styled";

const RegModal = () => {
  const [favorite, setFavorite] = useState("private");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePrivateChange = () => {
    setFavorite("private");
  };

  const handleCompanyChange = () => {
    setFavorite("company");
  };

  return (
    <S.Wrapper>
      <S.Block>
        <S.Left>
          <S.Title>Зарегистрироваться</S.Title>
          <S.Description>Введите свои учетные данные</S.Description>
          <S.Radios>
            <Radio
              label="Частный продавец"
              value={favorite === "private"}
              onChange={handlePrivateChange}
            />
            <Radio
              label="Компания"
              value={favorite === "company"}
              onChange={handleCompanyChange}
              margin="0 0 0 27px"
            />
          </S.Radios>
          <FormInput
            value={username}
            setValue={setUsername}
            label="Имя пользователя"
          />
        </S.Left>
        <S.Right />
      </S.Block>
    </S.Wrapper>
  );
};

export default RegModal;
