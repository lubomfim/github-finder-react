import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export const SearchInput = ({ placeholder }) => {
  return <S.Input placeholder={placeholder} type="text" />;
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
