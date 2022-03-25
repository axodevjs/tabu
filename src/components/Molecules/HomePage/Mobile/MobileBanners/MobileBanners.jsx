import * as S from './Styled'
import ImageBlock from "../../../../Atoms/ImageBlock";
import Ring from 'assets/img/banners/2.png'

const MobileBanners = () => {
    return (
        <S.Wrapper>
            <S.FirstImg/>
            <S.Second>
                <S.Title>LOVE TOKENS </S.Title>
                <S.Description>Прикосновение роскоши и романтики для вашего Валентина.  </S.Description>
                <S.Ring>
                    <ImageBlock src={Ring}/>
                </S.Ring>
                <S.Button>Посмотреть</S.Button>
            </S.Second>
        </S.Wrapper>
    );
};

export default MobileBanners;