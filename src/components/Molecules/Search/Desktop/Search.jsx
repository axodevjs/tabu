import TopHeader from "components/Molecules/Header/Desktop/TopHeader/TopHeader";
import { useDispatch } from "react-redux";
import { setShowSearch } from "redux/reducers/searchReducer";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import Input from "./Input/Input";
import * as S from "./Styled";
import Tabs from "./Tabs/Tabs";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <S.Wrapper>
        <S.Block>
          <TopHeader />
          <Header />
          <Input />
          <Tabs />
          <Categories />
        </S.Block>
        <S.Background onClick={() => dispatch(setShowSearch(false))} />
      </S.Wrapper>
    </>
  );
};

export default Search;
