import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/test/i); // Sesuaikan dengan teks yang sebenarnya dalam komponen App
  expect(headingElement).toBeInTheDocument();
});
