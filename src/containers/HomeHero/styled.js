import styled from 'styled-components';

import * as C from 'styles/colors';
import * as T from 'styles/typography';

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
