import React from 'react';
import { render, screen } from '@testing-library/react';
import ConstantsDisplay from './ConstantsDisplay';
import {SCIPARSER_CONSTANTS_MAP} from './Calculator';

test('renders constants area', () => {
  const constantsMap = new Map([
    ["Pi", [Math.PI, "untyped"], "Pi"],
    ["E", [Math.E, "untyped"], "Euler's Constant"],
    ["c", [2.99792e8, "m/s"], "Speed of Light"]
  ]);
  render(<ConstantsDisplay constants={constantsMap} />);
  const constantArea = screen.getByTestId("constants-display-area");
  expect(constantArea).toBeInTheDocument();
});
