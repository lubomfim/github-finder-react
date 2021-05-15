import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const possibleErrors = {
  NOT_FOUND: 'User not found! Try again, please.',
};

export const Warming = ({ type }) => {
  return (
    <S.WarmingWrapper>
      <S.WarmingText>{possibleErrors[type] || 'Server offline. Try again later, please.'}</S.WarmingText>
    </S.WarmingWrapper>
  );
};

Warming.propTypes = {
  type: PropTypes.string.isRequired,
};
