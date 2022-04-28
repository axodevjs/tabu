import { API_URL } from "config";
import { useSelector } from "react-redux";
import * as S from "./Styled";

const EditProfileModal = ({ show, setShow }) => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <S.Wrapper className={show ? "visible" : "hidden"}>
      <S.Block>
        {user?.avatar ? (
          <S.Avatar src={API_URL} />
        ) : (
          <S.AvatarText>
            {user?.first_name?.length ? user?.first_name[0]?.toUpperCase() : ""}
          </S.AvatarText>
        )}
        <S.Slice />
        <S.Form>
          <S.Title>Редактировать профиль</S.Title>
        </S.Form>
      </S.Block>
    </S.Wrapper>
  );
};

export default EditProfileModal;
