import React from 'react';
import { render, screen } from '@testing-library/react';

import { SearchInput } from './index';

const props = {
  onChange: () => {},
  disabled: true,
  value: 'userlogin',
};

const component = <SearchInput onChange={props.onChange} disabled={props.disabled} value={props.value} />;

it('should render correctly', () => {
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});

it('should be disabled', () => {
  render(component);
  expect(screen.getByRole('textbox')).toBeDisabled();
});
