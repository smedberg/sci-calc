import React from 'react';
import { render, screen } from '@testing-library/react';
import VariablesDisplay from './VariablesDisplay';

test('renders variables area', () => {
  const variables =  new Map([
    ["Pi", [Math.PI, "untyped"]],
    ["One", [1, "untyped"]],
    ["c", [2.99792e8, "m/s"]]
  ]);
  render(<VariablesDisplay variables={variables} />);
  const variableArea = screen.getByTestId("variables-display-area");
  expect(variableArea).toBeInTheDocument();
});
