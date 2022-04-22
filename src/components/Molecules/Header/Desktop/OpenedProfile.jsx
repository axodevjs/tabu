import * as S from "./Styled";
import Flex from "components/Atoms/Flex";
import Text from "components/Atoms/Text";
import Button from "components/Atoms/Button";
import Expand from "assets/svg/expand_profile.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import {
  hideProfile,
  setShowAuthModal,
  setShowRegModal,
  showProfile,
} from "redux/reducers/appReducer";

const OpenedProfile = () => {
  const dispatch = useDispatch();

  return (
    <S.OpenedProfileWrapper>
      <S.OpenedProfile>
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch(hideProfile());
          }}
        >
          <Flex padding="14.5px 16px" justify="end" align="center">
            <Text
              cursor="pointer"
              color="#191919"
              fontFamily="Mont"
              fontWeight="600"
              fontSize="13px"
            >
              Мой профиль
            </Text>
            <Flex margin="0 0 0 2px">
              <img alt="" src={Expand} />
            </Flex>
          </Flex>
          <Flex direction="row" justify="center" padding="6px 0">
            <Button
              grid
              w100
              margin="0 0 0 20px"
              fontFamily="Mont"
              fontSize="12px"
              color="#191919"
              padding="8px 12px"
              topGreen
              onClick={() => {
                dispatch(setShowRegModal(true));
                dispatch(hideProfile(false));
              }}
            >
              Регистрация
            </Button>
            <Button
              grid
              w100
              margin="0 20px 0 6px"
              fontFamily="Mont"
              fontSize="12px"
              color="#ffffff"
              padding="8px 12px"
              dark_filled
              onClick={() => {
                dispatch(setShowAuthModal(true));
                dispatch(hideProfile());
              }}
            >
              Войти
            </Button>
          </Flex>
          <Text
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="13px"
            color="#000"
            padding="14px 20px"
            cursor="pointer"
          >
            Мои товары на продажу
          </Text>
          <Text
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="13px"
            color="#000"
            padding="14px 20px"
            cursor="pointer"
          >
            Мои заказы
          </Text>
          <Text
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="13px"
            color="#000"
            padding="14px 20px"
            cursor="pointer"
          >
            Список желаний
          </Text>
          <Text
            fontFamily="Gilroy"
            fontWeight="400"
            fontSize="13px"
            color="#000"
            padding="14px 20px"
            cursor="pointer"
          >
            Выйти
          </Text>
        </OutsideClickHandler>
      </S.OpenedProfile>
    </S.OpenedProfileWrapper>
  );
};

export default OpenedProfile;
