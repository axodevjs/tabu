import LogoutModal from "components/Molecules/ProfilePage/LogoutModal/LogoutModal";
import ProfileContent from "components/Molecules/ProfilePage/ProfileContent/ProfileContent";
import ProfileMenu from "components/Molecules/ProfilePage/ProfileMenu/ProfileMenu";
import TopBackground from "components/Molecules/ProfilePage/TopBackground/TopBackground";
import { useState } from "react";
import * as S from "./Styled";

const ProfilePage = () => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <S.Wrapper>
      <LogoutModal show={showLogout} setShow={setShowLogout} />
      <TopBackground />
      <S.Container>
        <ProfileMenu setShowLogout={setShowLogout} />
        <ProfileContent />
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfilePage;
