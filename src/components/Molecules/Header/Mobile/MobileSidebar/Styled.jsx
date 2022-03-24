import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 35;
  width: 100%;
  height: 100%;
`

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.32);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 34;
`

export const AbsoluteSidebar = styled.div`
  position: fixed;
  width: 80%;
  height: 100%;
  z-index: 36;
`

export const MobileSidebar = styled.div`
  background-color: #fff;
  height: 100%;
`

export const Login = styled.div`
  padding: 64px 25px 40px 25px;
  font-family: Mont;
  font-size: 12px;
  font-weight: 600;
  color: #717171;
  cursor: pointer;
`
export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`

export const Tab = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  color: #717171;
  cursor: pointer;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  ${(props) =>
          props.active &&
          css`
            color: #191919;
            border-bottom: 2px solid #191919;
            font-weight: 700;
          `}
`

export const Space = styled.div`
  margin-top: 37px;
  width: 41px;
  height: 1px;
  background-color: #ababab;
  margin-left: 25px;
`
export const Favorite = styled.div`
  display: inline-block;
  font-family: Mont;
  font-weight: 600;
  font-size: 12px;
  color: #000;
  margin-left: 25px;
  border-bottom: 1px solid #000;
  margin-top: 32px;
  cursor: pointer;
`