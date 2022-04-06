import React from 'react';
import { render, screen } from '@testing-library/react';
import ConstantsDisplay from './ConstantsDisplay';
import {SCIPARSER_CONSTANTS} from './Calculator';

test('renders constants area', () => {
  render(<ConstantsDisplay constants={SCIPARSER_CONSTANTS} />);
  const constantArea = screen.getByTestId("constants-display-area");
  expect(constantArea).toBeInTheDocument();
});
