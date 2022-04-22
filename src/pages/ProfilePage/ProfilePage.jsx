import ProfileContent from "components/Molecules/ProfilePage/ProfileContent/ProfileContent";
import ProfileMenu from "components/Molecules/ProfilePage/ProfileMenu/ProfileMenu";
import TopBackground from "components/Molecules/ProfilePage/TopBackground/TopBackground";
import * as S from "./Styled";

const ProfilePage = () => {
  return (
    <S.Wrapper>
      <TopBackground />
      <S.Container>
        <ProfileMenu />
        <ProfileContent />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfilePage;
