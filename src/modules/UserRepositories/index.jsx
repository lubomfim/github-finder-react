import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { projectName } from 'utils/projectName';

import { useQuery } from '@apollo/client';
import { USER_REPOSITORIES } from 'services/graphql/queries';

import { Logo } from 'components/Logo';
import { Loader } from 'components/Loader';

import * as S from './styled';

const UserRepositories = ({ login }) => {
  const [userRepositories, setUserRepositories] = useState([]);
  const { loading, error, data } = useQuery(USER_REPOSITORIES, {
    variables: {
      login,
    },
    onCompleted: () => setUserRepositories(data.user.repositories.nodes),
  });

  console.log(userRepositories);
  return (
    <S.UserRepositories>
      {loading && <Loader />}
      <Logo />
      {!loading && userRepositories && (
        <S.UserRepositoriesList>
          {userRepositories.map((el, index) => {
            const languageName = el.languages.nodes[0]?.name;
            const languageColor = el.languages.nodes[0]?.color;

            return (
              <S.UserRepositoriesItem key={index}>
                <S.UserRepositoriesTitle>{projectName(el.name)}</S.UserRepositoriesTitle>
                <S.UserRepositoriesLanguage color={languageColor}>
                  {languageName || 'no language'}
                </S.UserRepositoriesLanguage>
                <S.UserRepositoriesSeeMoreWrapper>
                  <S.UserRepositoriesSeeMore href={el.url} target="blank">
                    see more
                  </S.UserRepositoriesSeeMore>
                </S.UserRepositoriesSeeMoreWrapper>
              </S.UserRepositoriesItem>
            );
          })}
        </S.UserRepositoriesList>
      )}
    </S.UserRepositories>
  );
};

UserRepositories.propTypes = {
  login: PropTypes.string.isRequired,
};

export default UserRepositories;
