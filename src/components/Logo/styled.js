import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  ${({ $home }) => {
    if ($home) {
      return css`
        padding-top: 50px;
        justify-content: center;
      `;
    } else {
      return css`
        padding-top: 20px;
        justify-content: flex-end;
      `;
    }
  }}
`;

export const LogoLink = styled(Link)`
  ${({ $home }) => {
    if ($home) {
      return css`
        max-width: 50px;
      `;
    } else {
      return css`
        max-width: 35px;
      `;
    }
  }}
`;

export const LogoImg = styled.img``;
