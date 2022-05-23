import { render, screen } from '@testing-library/react';
import Topic from './Topic';

test('renders learn react link', () => {
  render(<Topic />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
