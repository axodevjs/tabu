import { sizes } from "sizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;
  transition: 300ms;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  position: relative;
  width: 65%;
  height: 50%;
`;

export const Avatar = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-image: url(${({ src }) => src || ""});
  background-size: cover;
  background-position: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
  }
`;

export const AvatarText = styled.div`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background: #f9f9f9;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #e5e5e5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${sizes.mobile}px) {
    border: 6px solid #ffffff;
  }
`;

export const Slice = styled.div``;

export const Form = styled.div``;

export const Title = styled.div``;
