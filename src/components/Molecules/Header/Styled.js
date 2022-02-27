import styled from "styled-components";

export const TopHeader = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 42px;
  padding: 0 0;
  background-color: #191919;
  font-family: Manrope;
  font-weight: 400;
  font-size: 13px;
  color: #ffffff;
`;

export const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  height: 80px;
  padding: 0 56px;
  background-color: #ffffff;
  color: #000000;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;
`;

export const Category = styled.div`
  font-family: "Mont";
  font-size: 16px;
  font-weight: 700;
  margin-left: 24px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const Logo = styled.div`
  display: grid;
  justify-self: center;
  align-content: center;

  cursor: pointer;
  font-family: Gilroy;
  font-weight: 600;
  font-size: 40px;

  color: #000000;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  margin-left: 37px;
  cursor: pointer;
`;

export const Favorite = styled.div`
  display: flex;
  align-items: center;
  margin-left: 31px;
  cursor: pointer;
`;

export const Profile = styled.div`
  margin-left: 34.31px;
  font-family: "Mont";
  font-weight: 600;
  fint-size: 13px;
  cursor: pointer;
`;

export const BottomHeader = styled.div`
  display: grid;
  height: 49px;
  padding: 0 56px;
  background: #191919;
`;

export const BottomCategories = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomCategory = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;

  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  cursor: pointer;
  color: #ffffff;

  &:nth-child(1) {
    margin-left: 0;
  }
`;
