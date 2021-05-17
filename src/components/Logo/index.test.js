import React from 'react';
import { render, screen } from '@testing-library/react';

import { Logo } from '.';
import { MemoryRouter } from 'react-router-dom';

const Component = (prop) => {
  return (
    <MemoryRouter>
      <Logo $home={prop ? prop : false} />
    </MemoryRouter>
  );
};

it('should render correctly', () => {
  const { asFragment } = render(Component());

  const link = screen.getByRole('link');
  const img = screen.getByRole('img', 'github Logo');

  expect(link).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(asFragment(Component())).toMatchSnapshot();
});

it('should render style correctly when condition is true', () => {
  const { container } = render(Component(true));
  expect(container).toMatchSnapshot();
});
