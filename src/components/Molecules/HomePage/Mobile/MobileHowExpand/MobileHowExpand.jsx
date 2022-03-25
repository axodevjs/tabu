import * as S from "./Styled";

const MobileHowExpand = () => {
  return (
    <S.Wrapper>
      <S.Title>Как работает сервис?</S.Title>
      <S.Tab>
        Кто может продавать товары на площадке TAABU ?
        <S.TabIcon>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.TabIcon>
      </S.Tab>
      <S.Tab>
        Какие преимущества для продавцов ?
        <S.TabIcon>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.TabIcon>
      </S.Tab>
      <S.Tab>
        Как начать действовать сегодня, чтобы обойти своих конкурентов ?
        <S.TabIcon>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.TabIcon>
      </S.Tab>
      <S.Tab>
        Какие преимущества для покупателей ?
        <S.TabIcon>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 10L12 14L8 10"
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.TabIcon>
      </S.Tab>
    </S.Wrapper>
  );
};

export default MobileHowExpand;
