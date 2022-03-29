import ImageBlock from "components/Atoms/ImageBlock";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "redux/actions/product";
import * as S from "./Styled";
import { URL } from "config";
import * as $ from "jquery";

const ProductPage = (props) => {
  const [selectedImage, setSelectedImage] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();
  const openedProduct = useSelector((state) => state.product.openedProduct);

  useEffect(() => {
    if (params.product_id !== undefined) {
      dispatch(getProductById(params.product_id));
    }
  }, []);

  useEffect(() => {
    if (openedProduct.images) {
      setSelectedImage(openedProduct.images[0].image);
    }
  }, [openedProduct]);

  const scrollTo = (id) => {
    $("html,body").animate(
      {
        scrollTop: $("#" + id).offset().top - $(window).height() / 2,
      },
      300
    );
  };

  const onPreviewClick = (image) => {
    scrollTo(image.id + "mainImage");

    setSelectedImage(image.image);
  };

  return (
    <S.Container {...props}>
      <S.BreadCrumb>Главная / Для нее / Новинки / Толстовка</S.BreadCrumb>

      <S.TwoBlocks>
        <S.ImagesBlock>
          <S.PreviewImages>
            {openedProduct
              ? openedProduct.images
                ? openedProduct.images.map((image, i) => (
                    <S.PreviewImage
                      key={i}
                      active={selectedImage === image.image ? true : false}
                      d={image.id + "previewImage"}
                      src={URL + image.image}
                      onClick={() => onPreviewClick(image)}
                    />
                  ))
                : ""
              : ""}
          </S.PreviewImages>
          <S.MainImages>
            {/* Вывод остальных картинок */}
            {openedProduct
              ? openedProduct.images
                ? openedProduct.images.map((image, i) => (
                    <ImageBlock
                      key={i}
                      id={image.id + "mainImage"}
                      src={URL + image.image}
                    />
                  ))
                : ""
              : ""}
          </S.MainImages>
        </S.ImagesBlock>
        <S.ActionBlock>234</S.ActionBlock>
      </S.TwoBlocks>
    </S.Container>
  );
};

export default ProductPage;
