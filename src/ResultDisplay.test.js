import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultDisplay from './ResultDisplay';

test('renders result area', () => {
  render(<ResultDisplay />);
  const resultArea = screen.getByTestId("result-display-area");
  expect(resultArea).toBeInTheDocument();
});
