import { SearchInput } from 'components/SearchInput';
import React, { useState } from 'react';

import { useLazyQuery } from '@apollo/react-hooks';
import { USER } from 'services/graphql/queries';

import * as S from './styled';
import { Loader } from 'components/Loader';
import { Warming } from 'components/Warming';

export const SearchUser = () => {
  /* const [error, setError] = useState(false); */
  const [search, setSearch] = useState('');
  const [runQuery, { called, loading, data, error }] = useLazyQuery(USER);

  const handleClick = () => {
    runQuery({
      variables: {
        login: search,
      },
      onError: (err) => console.log(err.message),
    });
  };

  return (
    <React.Fragment>
      <S.SearchWrapper>
        <SearchInput
          placeholder="Type the username ( e.g lubomfim)"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          disabled={loading ? true : false}
        />
        <S.SearchButton onClick={() => handleClick()} disabled={loading ? true : false}>
          <S.SearchIcon src="images/icons/search.svg" alt="Search Icon" />
        </S.SearchButton>
      </S.SearchWrapper>
      {loading && <Loader />}
      {error && <Warming text={'oi'} type={error.graphQLErrors[0].type} />}
    </React.Fragment>
  );
};
