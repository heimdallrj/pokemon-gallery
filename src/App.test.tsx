import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Application insdie AppLayout', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pokémon Gallery/i);
  expect(linkElement).toBeInTheDocument();
});
