import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsDisplay from './ResultsDisplay';

test('renders result area', () => {
  const results = [[3, 'm']];
  render(<ResultsDisplay results={results}/>);
  const resultsArea = screen.getByTestId("results-display-area");
  expect(resultsArea).toBeInTheDocument();
});
