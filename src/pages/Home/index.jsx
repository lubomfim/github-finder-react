import React from 'react';

import { Wrapper } from 'components/Wrapper';
import { SearchUser } from 'containers/SearchUser';
import { HomeHero } from 'containers/HomeHero';

function Home() {
  return (
    <Wrapper>
      <HomeHero text="You can search and discover lots of things about github users!" title="GitHub Finder" />
      <SearchUser />
    </Wrapper>
  );
}

export default Home;
