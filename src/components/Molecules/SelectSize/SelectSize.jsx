import Flex from "components/Atoms/Flex";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export const StyledSize = styled.div`
  padding: 11px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-family: Mont;
  font-size: 14px;
  color: #717171;
  margin-left: 16px;

  &:nth-child(1) {
    margin-left: 0;
  }

  ${(props) =>
    props.active === true &&
    css`
      border: 1px solid #191919;
      color: #191919;
    `}
`;

const SelectSize = (props) => {
  const [sizes, setSizes] = useState();
  const [now, setNow] = useState();

  useEffect(() => {
    setSizes(props.sizes);
  }, []);

  return (
    <Flex>
      {sizes &&
        props.sizes.map((size, i) => (
          <StyledSize
            key={i}
            onClick={() => setNow(size.name)}
            active={now === size.name}
          >
            {size.name}
          </StyledSize>
        ))}
    </Flex>
  );
};

export default SelectSize;
