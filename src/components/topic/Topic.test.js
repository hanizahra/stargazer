import { render, screen } from '@testing-library/react';
import Topic from './Topic';
import mockResponse from '../../tests/mockResponse';

test('renders Topic component', () => {
  render(<Topic name={mockResponse.name} stargazerCount={mockResponse.stargazerCount} />);
  const buttonElement = screen.getByRole('button', {name: 'react'})
  expect(buttonElement).toBeInTheDocument();
});
