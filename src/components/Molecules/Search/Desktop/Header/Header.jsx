import ImageBlock from "components/Atoms/ImageBlock";
import * as S from "./Styled";
import Logo from "assets/img/logo.png";

const Header = () => {
  return (
    <S.Header>
      <div>
        <ImageBlock src={Logo} />
      </div>
    </S.Header>
  );
};

export default Header;
