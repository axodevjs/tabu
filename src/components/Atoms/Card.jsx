import styled from "styled-components";
import Text from "./Text";

const StyledCard = styled.div`
  display: grid;
`;

const Details = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const ImageBlock = styled.div`
  display: grid;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const FavoriteIcon = styled.div`
  display: grid;
  justify-self: end;
  position: absolute;
  margin: 20px 20px 0 0;
  cursor: pointer;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <FavoriteIcon>
        <svg
          width={20}
          height={18}
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 5.50003C19 11.7444 10.0004 17 10.0004 17C10.0004 17 1 11.6667 1 5.51268C1 3.00003 3 1.00003 5.5 1.00003C8 1.00003 10 4.00003 10 4.00003C10 4.00003 12 1.00003 14.5 1.00003C17 1.00003 19 3.00003 19 5.50003Z"
            stroke="#191919"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </FavoriteIcon>

      <ImageBlock>
        <Image src={props.img} alt="" />
      </ImageBlock>
      <Details>
        <div>
          <Text
            color="#191919"
            fontFamily="Mont"
            fontWeight="700"
            fontSize="16px"
          >
            Balenciaga
          </Text>
          <Text
            color="#717171"
            margin="6px 0 0 0"
            fontFamily="Mont"
            fontWeight="600"
            fontSize="16px"
          >
            Balenciaga
          </Text>
        </div>
        <Text
          color="#191919"
          fontFamily="Mont"
          fontWeight="700"
          fontSize="16px"
        >
          $1 720
        </Text>
      </Details>
    </StyledCard>
  );
};

export default Card;
