import styled from 'styled-components';

import * as C from '../../styles/colors';
import * as T from 'styles/typography';

export const Title = styled.h1`
  color: ${C.WHITE};

  &:hover {
    color: blue;
  }
`;

export const HomeHeroWrapper = styled.div`
  text-align: center;
  margin: 140px 0px 45px;
`;

export const HomeHeroTitle = styled.h1`
  ${T.TITLE_EXTRA_LARGE};
  margin-bottom: 20px;
`;

export const HomeHeroText = styled.p`
  ${T.BODY_TEXT_LARGE_BOLD};
  color: ${C.SECONDARY_COLOR};
  font-family: ${T.SECONDARY_FONT};

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const SearchWrapper = styled.form`
  display: flex;
  margin: 0 auto 30px;
  max-width: 500px;
  width: 90%;
`;

export const SearchButton = styled.button`
  background-color: ${C.BLACK};
  width: 80px;
  height: 63px;
  position: relative;
  bottom: -3px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid ${C.BLACK};

  &:hover {
    width: 90px;
  }

  &:active {
    box-shadow: inset 3px 3px ${C.WHITE};
  }
`;

export const SearchIcon = styled.img``;
