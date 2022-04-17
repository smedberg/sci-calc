import React from 'react';
import { render, screen } from '@testing-library/react';
import FormulaInput from './FormulaInput';

test('renders text area', () => {
  const testFormula = '2 kg'
  render(<FormulaInput  formula={testFormula}/>);
  const formulaInput = screen.getByTestId("formula-text-area");
  expect(formulaInput).toBeInTheDocument();
});
