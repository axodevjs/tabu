import LogoutModal from "components/Molecules/ProfilePage/LogoutModal/LogoutModal";
import ProfileContent from "components/Molecules/ProfilePage/ProfileContent/ProfileContent";
import ProfileMenu from "components/Molecules/ProfilePage/ProfileMenu/ProfileMenu";
import TopBackground from "components/Molecules/ProfilePage/TopBackground/TopBackground";
import { useEffect, useState } from "react";
import { sizes } from "sizes";
import * as S from "./Styled";

const ProfileWishListPage = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < sizes.mobile) {
      setIsMobile(true);
    }
  }, []);

  return (
    <S.Wrapper>
      <LogoutModal show={showLogout} setShow={setShowLogout} />
      <TopBackground />
      <S.Container>
        <ProfileMenu setShowLogout={setShowLogout} />

        {isMobile ? "" : <ProfileContent />}
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileWishListPage;
