import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'components/Logo';

import * as S from './styled';

export const HomeHero = ({ title, text }) => {
  return (
    <React.Fragment>
      <Logo $home={true} />
      <S.HomeHeroWrapper>
        <S.HomeHeroTitle>{title}</S.HomeHeroTitle>
        <S.HomeHeroText>{text}</S.HomeHeroText>
      </S.HomeHeroWrapper>
    </React.Fragment>
  );
};

HomeHero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
