import React from 'react';
import { useParams } from 'react-router';

import { Wrapper } from 'components/Wrapper';
import UserProfile from 'modules/UserProfile';
import UserRepositories from 'modules/UserRepositories';

import * as S from './styled';

const User = () => {
  const { user } = useParams();
  return (
    <Wrapper>
      <S.UserWrapper>
        <UserProfile login={user} />
        <UserRepositories login={user} />
      </S.UserWrapper>
    </Wrapper>
  );
};

export default User;
