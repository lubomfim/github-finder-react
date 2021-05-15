import React from 'react';

import Container from 'components/Wrapper';
import { SearchUser } from 'containers/SearchUser';
import { HomeHero } from 'containers/HomeHero';

function Home() {
  return (
    <Container>
      <HomeHero text="You can search and discover lots of things about github users!" title="GitHub Finder" />
      <SearchUser />
    </Container>
  );
}

export default Home;
