import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '.';

it('should render correctly', () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment(<Loader />)).toMatchSnapshot();
});
