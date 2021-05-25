import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

export const SearchInput = ({ placeholder, onChange, value, disabled }) => {
  return <S.Input placeholder={placeholder} onChange={onChange} value={value} type="text" disabled={disabled} />;
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
