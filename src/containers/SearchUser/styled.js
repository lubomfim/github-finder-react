import { Input } from 'components/SearchInput/styled';
import styled from 'styled-components';

import * as C from 'styles/colors';

export const SearchWrapper = styled.div`
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
