import ImageBlock from "components/Atoms/ImageBlock";
import { useDispatch } from "react-redux";
import { setShowSizesModal } from "redux/reducers/appReducer";
import * as S from "./Styled";
import Image from "assets/img/sizesTable.png";

const TableSizes = (props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setShowSizesModal(false));
  };

  return (
    <S.Container {...props}>
      <S.Block>
        <S.Left>
          <S.Title>Таблица размеров</S.Title>
          <S.ImageContainer>
            <ImageBlock src={Image} />
          </S.ImageContainer>
        </S.Left>
        <S.Close onClick={onClose}>
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
              fill="white"
            />
          </svg>
        </S.Close>
      </S.Block>
    </S.Container>
  );
};

export default TableSizes;
