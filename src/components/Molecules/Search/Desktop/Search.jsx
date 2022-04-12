import TopHeader from "components/Molecules/Header/Desktop/TopHeader/TopHeader";
import Header from "./Header/Header";
import Input from "./Input/Input";
import * as S from "./Styled";
import Tabs from "./Tabs/Tabs";

const Search = () => {
  return (
    <S.Wrapper>
      <S.Block>
        <TopHeader />
        <Header />
        <Input />
        <Tabs />
      </S.Block>
      <S.Background />
    </S.Wrapper>
  );
};

export default Search;
