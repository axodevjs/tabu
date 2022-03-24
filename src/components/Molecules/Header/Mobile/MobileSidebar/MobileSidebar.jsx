import * as S from './Styled'
import {useDispatch, useSelector} from "react-redux";
import {hideMobileSidebar} from "../../../../../redux/reducers/appReducer";
import MobileCategory from "./MobileCategory/MobileCategory";
import MobileCategories from "./MobileCategories/MobileCategories";

const MobileSidebar = (props) => {
    const dispatch = useDispatch();
    const menuCategory = useSelector(state => state.app.menuCategory)

    return (
        <S.Wrapper {...props}>
            <S.Background onClick={() => dispatch(hideMobileSidebar())}/>
            <S.AbsoluteSidebar>
                <S.MobileSidebar>
                    <S.Login>Регистрация / Войти</S.Login>
                    <S.Tabs>
                        <S.Tab active>Для нее</S.Tab>
                        <S.Tab>Для него</S.Tab>
                        <S.Tab>Детям</S.Tab>
                    </S.Tabs>
                    {
                        (menuCategory.active === false) ? (<MobileCategories/>) : (<MobileCategory/>)
                    }
                    <S.Space/>
                    <div>
                        <S.Favorite>Избранные</S.Favorite>
                    </div>

                </S.MobileSidebar>
            </S.AbsoluteSidebar>
        </S.Wrapper>
    );
};

export default MobileSidebar;