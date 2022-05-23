import { render, screen } from '@testing-library/react';
import StargazerContent from './StargazerContent';
import ApiProvider from '../../api/ApiProvider';

test('renders StargazerContent component', () => {
  render(
    <ApiProvider>
      <StargazerContent />
    </ApiProvider>
  );
  const textElement = screen.getByText(/stargazer/i);
  expect(textElement).toBeInTheDocument();
});
