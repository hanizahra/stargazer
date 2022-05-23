import { render, screen } from '@testing-library/react';
import TopicList from './TopicList';
import mockResponse from '../../tests/mockResponse';

test('renders learn TopicList component', () => {
  render(<TopicList />);
  const zeroResultElement = screen.getByText(/0 results/i);
  expect(zeroResultElement).toBeInTheDocument();
  render(
    <TopicList topic={mockResponse} />
  );
  const resultElement = screen.getByText(/react-native/i);
  expect(resultElement).toBeInTheDocument();
});
