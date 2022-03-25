import * as S from './Styled'
import Card from "../../../Card/Card";
import product1 from 'assets/img/products/1.png'

const MobileNewProducts = () => {
    return (
        <S.Wrapper>
            <S.Title>Новинки</S.Title>

            <S.Products>
                <Card title={"Balenciaga"} description={"Шаровые серьги из золота"} price={1720} img={product1}/>
                <Card title={"Balenciaga"} description={"Шаровые серьги из золота"} price={1720} img={product1}/>
                <Card title={"Balenciaga"} description={"Шаровые серьги из золота"} price={1720} img={product1}/>
                <Card title={"Balenciaga"} description={"Шаровые серьги из золота"} price={1720} img={product1}/>
            </S.Products>
        </S.Wrapper>
    );
};

export default MobileNewProducts;