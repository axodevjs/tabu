import styled from "styled-components";

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
  position: relative;
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
  display: flex;
  align-items: center;
  margin-left: 34.31px;
  font-family: "Mont";
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
`;

export const OpenedProfileWrapper = styled.div`
  position: relative;
  width: 254px;
  margin-left: 16px;
`;

export const OpenedProfile = styled.div`
  position: absolute;
  top: -28px;
  width: 254px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const ProfileBlock = styled.div`
  position: relative;
  display: flex;
`