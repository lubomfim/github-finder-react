import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { USER_PROFILE } from 'services/graphql/queries';
import { Loader } from 'components/Loader';

import * as S from './styled';

const UserProfile = ({ login }) => {
  const [userProfile, setUserProfile] = useState({});
  const { loading, error, data } = useQuery(USER_PROFILE, {
    variables: {
      login,
    },
    onCompleted: () => setUserProfile(data.user),
  });
  return (
    <S.UserProfile>
      {loading && <Loader />}
      {!loading && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </S.UserProfile>
  );
};

UserProfile.propTypes = {
  login: PropTypes.string.isRequired,
};

export default UserProfile;
