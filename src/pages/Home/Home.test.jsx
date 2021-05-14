import { fireEvent, render, screen } from '@testing-library/react';
import Home from '.';

test('renders learn react link', () => {
  const { debug } = render(<Home />);

  const headingContainer = screen.getByRole('heading', { name: 'Hellou' });

  expect(headingContainer).toHaveStyleRule('color', 'purple');
});
