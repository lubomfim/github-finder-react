import * as S from './styled';

import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { USER } from 'services/graphql/queries';
import Container from 'components/Wrapper';
import { SearchUser } from 'containers/SearchUser';
import { HomeHero } from 'containers/HomeHero';

function Home() {
  /*   const { loading, error, data } = useQuery(USER, {
    variables: {
      login: 'lubomfim',
    },
  });

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <p>Error! {error.message}</p>;
  } */

  return (
    <Container>
      <HomeHero text="You can search and discover lots of things about github users!" title="GitHub Finder" />
      <SearchUser />
    </Container>
  );
}

export default Home;
