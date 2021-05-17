import React from 'react';
import { render, screen } from '@testing-library/react';
import { Wrapper } from '.';

const ChildComponent = () => {
  return <div>Child Component</div>;
};

const WrapperComponent = () => {
  return (
    <Wrapper>
      <ChildComponent />
    </Wrapper>
  );
};

it('should render child component', () => {
  render(<WrapperComponent />);

  const child = screen.getByText('Child Component');
  expect(child).toBeInTheDocument();
});

it('should render correctly', () => {
  const { asFragment } = render(<WrapperComponent />);
  expect(asFragment(<WrapperComponent />)).toMatchSnapshot();
});
