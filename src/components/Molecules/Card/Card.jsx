import React, { useState } from "react";
import Text from "../../Atoms/Text";
import * as S from "./Styled";
import styled from "styled-components";
import Grid from "components/Atoms/Grid";
import Button from "components/Atoms/Button";
import { useDispatch } from "react-redux";
import { showModal } from "redux/reducers/productReducer";

export const HoverWrapper = styled.div`
  position: relative;
`;
export const HoverCard = styled.div`
  position: absolute;
  left: -8%;
  z-index: 3;
  width: ${({ width }) => width || ""};
  height: auto;
  padding: 24px 22px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const Card = (props) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [widthHoverBlock, setWidthHoverBlock] = useState();

  const onHover = () => {
    const cardWidth = document.getElementsByClassName("card")[0].offsetWidth;
    setWidthHoverBlock(cardWidth * 1.08);
    setHover(true);
  };

  return (
    <S.StyledCard
      className="card"
      onMouseEnter={onHover}
      onMouseLeave={() => setHover(false)}
    >
      {/* onMouseLeave={() => setHover(false)} */}
      {hover && (
        <HoverWrapper>
          <HoverCard width={`${widthHoverBlock}px`}>
            <Grid>
              <S.HoverFavoriteIcon>
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
              </S.HoverFavoriteIcon>
            </Grid>

            <S.HoverImageBlock>
              <S.Image src={props.img} alt="" />
            </S.HoverImageBlock>
            <S.Details>
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
            </S.Details>
            <Button
              dark_filled
              width="100%"
              fontFamily="Mont"
              fontWeight="600"
              fontSize="12px"
              margin="8px 0 0 0"
              onClick={() => dispatch(showModal())}
            >
              ПРОСМОТР
            </Button>
          </HoverCard>
        </HoverWrapper>
      )}

      <S.FavoriteIcon>
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
      </S.FavoriteIcon>

      <S.ImageBlock>
        <S.Image src={props.img} alt="" />
      </S.ImageBlock>
      <S.Details>
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
      </S.Details>
    </S.StyledCard>
  );
};

export default Card;
