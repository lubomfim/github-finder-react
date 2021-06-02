import React, { useCallback, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router';
import { USER } from 'services/graphql/queries';

import { Wrapper } from 'components/Wrapper';
import { Logo } from 'components/Logo';
import { Loader } from 'components/Loader';
import { Warming } from 'components/Warming';
import { SearchInput } from 'components/SearchInput';

import * as S from './styled';
import { homeData } from 'constants/pages/home';

function Home() {
  const [search, setSearch] = useState('');
  const [runQuery, { called, loading, data, error }] = useLazyQuery(USER);
  const history = useHistory();

  const handleChange = useCallback((e) => {
    setSearch(e);
  }, []);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      runQuery({
        variables: {
          login: search,
        },
        onError: (err) => console.log(err.message),
      });
    },
    [runQuery, search],
  );

  useEffect(() => {
    if (data?.user && called && !loading) {
      history.push(`/${search}`);
    }
  }, [data, called, loading, history, search]);

  return (
    <Wrapper>
      <Logo $home={true} />
      <S.HomeHeroWrapper>
        <S.HomeHeroTitle>{homeData.title}</S.HomeHeroTitle>
        <S.HomeHeroText>{homeData.text}</S.HomeHeroText>
      </S.HomeHeroWrapper>
      <S.SearchWrapper onKeyPress={(e) => (e.code === 'Enter' ? handleClick(e) : null)}>
        <SearchInput
          placeholder={homeData.placeholder}
          onChange={(e) => handleChange(e.target.value)}
          value={search}
          disabled={loading ? true : false}
        />
        <S.SearchButton onClick={(e) => handleClick(e)} disabled={loading ? true : false}>
          <S.SearchIcon src={homeData.icon} alt={homeData.alt} />
        </S.SearchButton>
      </S.SearchWrapper>
      {loading && <Loader />}
      {error && <Warming type={error.graphQLErrors[0].type} />}
    </Wrapper>
  );
}

export default Home;
