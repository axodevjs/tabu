import * as S from './Styled'
import ProductImg from 'assets/img/products/4.png'
import RightBlock from "../../../components/Molecules/ProductPage/Mobile/RightBlock/RightBlock";
import Subscribe from "../../../components/Molecules/HomePage/Desktop/Subscribe";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {URL} from "../../../config";
import TableSizes from "../../../components/Molecules/TableSizes/TableSizes";
import ShareProduct from "../../../components/Molecules/CategoryPage/ShareProduct/ShareProduct";

const MobileProductPage = (props) => {
    const dispatch = useDispatch();
    const openedProduct = useSelector((state) => state.product.openedProduct);
    const showSizesModal = useSelector((state) => state.app.showSizesModal);
    const showShare = useSelector((state) => state.product.shareProduct.showShare);

    return (
        <S.Container {...props}>
            <TableSizes active={showSizesModal}/>
            <ShareProduct active={showShare}/>
            <S.ImagesBlock>
                <S.Image src={URL + openedProduct?.images?.filter(x => x.main_image === true)[0]?.image}/>
                <S.Slides>
                    <S.Slide active/>
                </S.Slides>

            </S.ImagesBlock>
            <RightBlock/>
            <Subscribe/>
        </S.Container>
    );
};

export default MobileProductPage;