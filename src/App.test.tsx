import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const startButton = screen.getByText(/start/i);
  expect(startButton).toBeInTheDocument();
  const pauseButton = screen.getByText(/pause/i);
  expect(pauseButton).toBeInTheDocument();
  const resetButton = screen.getByText(/reset/i);
  expect(resetButton).toBeInTheDocument();
});
