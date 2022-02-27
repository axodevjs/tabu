import Flex from "../Flex";
import Text from "../Text";
import styled from "styled-components";

const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

const CheckBox = (props) => {
  return (
    <CheckWrapper>
      <input type="checkbox" className="check_box" id={props.name} />
      <label className="check-label" htmlFor={props.name}></label>
      {props.color && (
        <>
          <Flex
            margin="0 0 0 15px"
            radius="50%"
            width="20px"
            height="20px"
            background={props.color}
          />
          <Text
            color="#191919"
            fontFamily="Gilroy"
            fontSize="14px"
            fontWeight="400"
            margin="0 0 0 14px"
          >
            {props.name}
          </Text>
        </>
      )}
      {!props.color && (
        <Text
          color="#191919"
          fontFamily="Gilroy"
          fontSize="14px"
          fontWeight="400"
          margin="0 0 0 14px"
        >
          {props.name}
        </Text>
      )}
    </CheckWrapper>
  );
};

export default CheckBox;
