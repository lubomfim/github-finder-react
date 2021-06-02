import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as C from 'styles/colors';
import * as T from 'styles/typography';

export const UserProfile = styled.div`
  padding: 90px 50px 0px;
  max-width: 320px;
  min-width: 320px;
  border-right: 1px solid ${C.SECONDARY_COLOR};
  height: 100%;
  position: relative;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
  }

  @media (max-width: 600px) {
    max-width: 100%;
    height: auto;
    padding: 80px 50px 30px;
    border: none;
  }
`;

export const UserProfileImgWrapper = styled.div`
  max-width: 204px;
  margin: 0px auto 25px;
`;

export const UserProfileImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${C.PRIMARY_COLOR};
`;

export const UserProfileName = styled.p`
  ${T.TITLE_LARGE};
`;
export const UserProfileLogin = styled.a`
  ${T.BODY_TEXT_LARGE};
  color: ${C.SECONDARY_COLOR};
  margin-bottom: 12px;
  display: inline-block;
`;

export const UserProfileBio = styled.p`
  font-family: ${T.SECONDARY_FONT};
  ${T.BODY_TEXT_SMALL}
  color: ${C.SECONDARY_COLOR};
  margin-bottom: 20px;
`;

export const UserProfileNumber = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const GoBackButton = styled(Link)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
  padding: 10px 20px;
  color: white;
  background-color: ${C.PRIMARY_COLOR};
  font-size: 1.6rem;
  text-transform: uppercase;

  @media (max-width: 600px) {
    top: 0px;
    bottom: auto;
  }
`;
