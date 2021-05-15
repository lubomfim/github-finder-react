import { SearchInput } from 'components/SearchInput';
import React from 'react';

import * as S from './styled';

export const SearchUser = () => {
  return (
    <S.SearchWrapper>
      <SearchInput placeholder="Type the username ( e.g lubomfim)" />
      <S.SearchButton />
    </S.SearchWrapper>
  );
};
