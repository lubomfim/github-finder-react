import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export const Logo = ({ $home }) => {
  return (
    <S.LogoWrapper $home={$home}>
      <S.LogoLink $home={$home} to="/">
        <S.LogoImg src="images/logo/github.png" alt="github logo" />
      </S.LogoLink>
    </S.LogoWrapper>
  );
};

Logo.defaultProps = {
  $home: false,
};

Logo.propTypes = {
  $home: PropTypes.bool.isRequired,
};
