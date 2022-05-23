import { render, screen } from '@testing-library/react';
import TopicList from './TopicList';

test('renders learn react link', () => {
  render(<TopicList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
