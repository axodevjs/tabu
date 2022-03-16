import * as S from './Styled'
import ImageBlock from "../../../Atoms/ImageBlock";
import Logo from 'assets/img/logo.png'
import MobileTopHeader from "./MobileTopHeader/MobileTopHeader";

const MobileHeader = () => {
    return (
        <>
            <MobileTopHeader/>
            <S.StyledMobileHeader>
                <S.Burger>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20" stroke="black" stroke-linecap="round"/>
                        <path d="M4 6H20" stroke="black" stroke-linecap="round"/>
                        <path d="M4 18H20" stroke="black" stroke-linecap="round"/>
                    </svg>
                </S.Burger>
                <S.Logo>
                    <ImageBlock src={Logo}/>
                </S.Logo>
                <S.UserBlock>
                    <S.Search>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="14" height="14" rx="7" stroke="black" stroke-linecap="round"/>
                            <path d="M15 15L21 21" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </S.Search>
                    <S.Cart>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 7H18L19 20H5L6 7Z" stroke="black" stroke-linecap="round"/>
                            <path d="M9 9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V9" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </S.Cart>
                </S.UserBlock>
            </S.StyledMobileHeader></>

    );
};

export default MobileHeader;
