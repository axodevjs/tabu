import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-column-gap: 60px;
  grid-template-columns: 30% 40% 30%;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  display: flex;
  align-items: start;
`;

export const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 16px;
`;

export const ProfileName = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
`;

export const ProfileRole = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #717171;
  margin-top: 4px;
`;

export const ProductImage = styled.div`
  margin-top: 24px;
  width: 140px;
  height: 175px;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;
`;

export const DescriptionCol = styled.div`
  display: flex;
  margin-top: 60px;
`;

export const DescBlock = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

export const DescriptionTitle = styled.div`
  font-family: Gilroy;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
  text-transform: uppercase;
`;

export const DescriptionText = styled.div`
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
  margin-top: 16px;
`;

export const SizeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 60px;

  padding: 0px 20px;
  height: 37px;

  font-family: Mont;
  font-weight: 600;
  font-size: 14px;
  color: #717171;

  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #717171;
`;

export const PriceCol = styled.div`
  margin-top: 70px;
  font-family: Gilroy;
  font-weight: 600;
  font-size: 12px;
  color: #191919;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 24px;
  right: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
