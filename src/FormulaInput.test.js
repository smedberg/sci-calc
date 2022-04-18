import React from 'react';
import { render, screen } from '@testing-library/react';
import FormulaInput from './FormulaInput';

test('renders text area', () => {
  const testFormula = '2 kg'
  const results = [[2, 'kg', null]];
  render(<FormulaInput formula={testFormula} results={results}/>);
  const formulaInput = screen.getByTestId("formula-input");
  expect(formulaInput).toBeInTheDocument();
});
