import React from 'react';
import { parse as UnitsParse } from './UnitsGrammar'

function runTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = UnitsParse(test.input);
    expect(result).toEqual(test.expectedResult);
  }
}

it('parses units', () => {
  runTests([
    {
      input: 'km',
      expectedResult: [{units: 'km', exponent: 1.0}]
    },
    {
      input: 'km*s',
      expectedResult: [{units: 'km', exponent: 1.0}, {units: 's', exponent: 1.0}]
    },
    {
      input: 'km s',
      expectedResult: [{units: 'km', exponent: 1.0}, {units: 's', exponent: 1.0}]
    },
    {
      input: 'km⋅s',
      expectedResult: [{units: 'km', exponent: 1.0}, {units: 's', exponent: 1.0}]
    },
    {
      input: 'km*km',
      expectedResult: [{units: 'km', exponent: 2.0}]
    },
    {
      input: 'km*km*s',
      expectedResult: [{units: 'km', exponent: 2.0}, {units: 's', exponent: 1.0}]
    },
    {
      input: 'km/s',
      expectedResult: [{units: 'km', exponent: 1.0}, {units: 's', exponent: -1.0}]
    },
    {
      input: 'km*km/s',
      expectedResult: [{units: 'km', exponent: 2.0}, {units: 's', exponent: -1.0}]
    },
    {
      input: 'km*km/km',
      expectedResult: [{units: 'km', exponent: 1.0}]
    },
    {
      input: 'km/km',
      expectedResult: []
    },
    {
      input: 'km^2/km',
      expectedResult: [{units: 'km', exponent: 1.0}]
    },
    {
      input: 'km^2/km^3',
      expectedResult: [{units: 'km', exponent: -1.0}]
    },
    {
      input: '(m s) s',
      expectedResult: [{units: 's', exponent: 2}, {units: 'm', exponent: 1.0}]
    },
    {
      input: '(m s)/s^2',
      expectedResult: [{units:'m', exponent: 1.0}, {units: 's', exponent: -1}]
    },
    {
      input: 's^2',
      expectedResult: [{units: 's', exponent: 2}]
    },
    {
      input: 'C^2/(J*m)',
      expectedResult: [{units: 'C', exponent: 2}, {units: 'J', exponent: -1}, {units: 'm', exponent: -1}]
    },
    {
      input: 'C^2/(J*m)^2',
      expectedResult: [{units: 'C', exponent: 2}, {units: 'J', exponent: -2}, {units: 'm', exponent: -2}]
    },
    {
      input: 'C^-2/(J*m)^2',
      expectedResult: [{units: 'C', exponent: -2}, {units: 'J', exponent: -2}, {units: 'm', exponent: -2}]
    },
    {
      input: 'C^2/(J*m)^-2',
      expectedResult: [{units: 'C', exponent: 2}, {units: 'J', exponent: 2}, {units: 'm', exponent: 2}]
    },
    {
      input: '1/mol',
      expectedResult: [{units: 'mol', exponent: -1}]
    },
    {
      input: '1/(m mol)',
      expectedResult: [{units: 'm', exponent: -1}, {units: 'mol', exponent: -1}]
    }
  ]);
});
