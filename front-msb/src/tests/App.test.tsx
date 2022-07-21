import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/name/i);
  const linkElement2 = screen.getByText(/email/i);
  const linkElement3 = screen.getByText(/telefone/i);

  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});
