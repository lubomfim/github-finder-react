import React, { useState } from 'react';
import { USER_PROFILE } from 'services/graphql/queries';

import { Wrapper } from 'components/Wrapper';
import { Loader } from 'components/Loader';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import * as S from './styled';
import { Logo } from 'components/Logo';

const User = () => {
  const { user } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const { loading, error, data } = useQuery(USER_PROFILE, {
    variables: {
      login: user,
    },
    onCompleted: () => setUserProfile(data.user),
  });
  return (
    <Wrapper>
      {loading && <Loader />}
      {
        <S.UserWrapper>
          <S.UserProfile>
            <S.UserProfileImgWrapper>
              <S.UserProfileImg src={userProfile.avatarUrl} alt={userProfile.login} />
            </S.UserProfileImgWrapper>
            <S.UserProfileName>{userProfile.name}</S.UserProfileName>
            <S.UserProfileLogin href={userProfile.url} target="blank">
              @{userProfile.login}
            </S.UserProfileLogin>
            <S.UserProfileBio>{userProfile.bio}</S.UserProfileBio>
            <S.UserProfileNumber>{userProfile.followers?.totalCount} Followers</S.UserProfileNumber>
            <S.UserProfileNumber>{userProfile.following?.totalCount} Following</S.UserProfileNumber>
            <S.UserProfileNumber>{userProfile.starredRepositories?.totalCount} Stars</S.UserProfileNumber>

            <S.GoBackButton to="/"> Search a new user</S.GoBackButton>
          </S.UserProfile>
          <S.UserRepositories>
            <Logo />
            <S.UserRepositoriesList></S.UserRepositoriesList>
          </S.UserRepositories>
        </S.UserWrapper>
      }
    </Wrapper>
  );
};

export default User;
