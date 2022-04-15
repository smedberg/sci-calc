import React from 'react';
import TypeSimplifier from './TypeSimplifier'

function runTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = TypeSimplifier.simplify(test.input);
    expect(result).toEqual(test.expected);
  }
}

it('simplifies', () => {
  runTests([
    {
      input: 'm',
      expected: 'm'
    },
    {
      input: 'km',
      expected: 'km'
    },
    {
      input: 'm/s',
      expected: 'm/s'
    },
    {
      input: 'm*s/s',
      expected: 'm'
    },
    {
      input: 'm*m/s',
      expected: 'm^2/s'
    },
    {
      input: 'm/(m*s)',
      expected: '1/s'
    },
    {
      input: 'm/(m⋅s)',
      expected: '1/s'
    },
    {
      input: 'm/(m s)',
      expected: '1/s'
    },
    {
      input: 'km J C C km',
      expected: 'C^2⋅km^2⋅J'
    },
    {
      input: '(km J C C km)/km^6',
      expected: 'C^2⋅J/km^4'
    },
    {
      input: '(km km km km km km)/km^6',
      expected: ''
    },
    {
      input: '((J⋅s)⋅(m/s))/((eV)⋅(J/eV))',
      expected: 'm'
    },
    {
      input: 'C^2/(J*m)',
      expected: 'C^2/J⋅m'
    },
    {
      input: 'C^2/(J*m)^2',
      expected: 'C^2/J^2⋅m^2'
    },
    {
      input: 'C^-2/(J*m)^2',
      expected: '1/C^2⋅J^2⋅m^2'
    },
    {
      input: 'C^2/(J*m)^-2',
      expected: 'C^2⋅J^2⋅m^2'
    }
  ]);
});
