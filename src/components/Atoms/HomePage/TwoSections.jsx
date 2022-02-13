import React from "react";
import Grid from "../Grid";
import First from "assets/img/twoSections/1.png";
import Second from "assets/img/twoSections/2.png";
import Text from "../Text";

const TwoSections = () => {
  return (
    <Grid columns="1fr 1fr" gap="0 32px" padding="64px 56px">
      <div style={{ display: "grid", justifyItems: "center" }}>
        <img src={First} />
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="800"
          margin="20px 0 0 0"
          textAlign="center"
          fontSize="14px"
          textTransform="uppercase"
        >
          Louis Vuitton
        </Text>

        <Text
          color="#717171"
          fontFamily="Mont"
          fontWeight="600"
          margin="12px 0 0 0"
          textAlign="center"
          fontSize="14px"
          textTransform="uppercase"
          decLine="1px solid #717171"
          inlineGrid
          justifySelf="center"
          cursor="pointer"
        >
          Новое поступление
        </Text>
      </div>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <img src={Second} />
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="800"
          margin="20px 0 0 0"
          textAlign="center"
          fontSize="14px"
          textTransform="uppercase"
        >
          Louis Vuitton
        </Text>

        <Text
          color="#717171"
          fontFamily="Mont"
          fontWeight="600"
          margin="12px 0 0 0"
          textAlign="center"
          fontSize="14px"
          textTransform="uppercase"
          decLine="1px solid #717171"
          inlineGrid
          justifySelf="center"
          cursor="pointer"
        >
          Новое поступление
        </Text>
      </div>
    </Grid>
  );
};

export default TwoSections;
