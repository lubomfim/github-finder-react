import React from 'react';
import { render } from '@testing-library/react';

import { Warming } from './index';

const WarmingComponent = () => {
  return <Warming type="test" />;
};

it('should render correctly', () => {
  const { asFragment } = render(<WarmingComponent />);

  expect(asFragment(<WarmingComponent />)).toMatchSnapshot();
});
