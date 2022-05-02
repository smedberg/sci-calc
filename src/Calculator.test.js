import React from 'react';
import Calculator from './Calculator';

function runTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = Calculator.calculate(test.input);
    expect(result[0]).toEqual(test.expectedCalcs);
  }
}

function failTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = Calculator.calculate(test.input)[0];
    expect(result.length).toEqual(test.expectedErrors.length);
    for (let j = 0; j < test.expectedErrors.length; j++) {
      const expectedErrorInfo = test.expectedErrors[j];
      expect(result[j][0]).toEqual(expectedErrorInfo[0]);
      const expectedError = expectedErrorInfo[1];
      if (expectedError !== null) {
        expect(result[j][2]).toEqual(expectedError);
      }
    }
  }
}

it('handles numbers', () => {
  runTests([
    {
      input: '1',
      expectedCalcs: [[1, 'untyped', null]]
    },
    {
      input: '-1',
      expectedCalcs: [[-1, 'untyped', null]]
    },
    {
      input: '2.',
      expectedCalcs: [[2.0, 'untyped', null]]
    },
    {
      input: '-2.',
      expectedCalcs: [[-2.0, 'untyped', null]]
    },
    {
      input: '3.1',
      expectedCalcs: [[3.1, 'untyped', null]]
    },
    {
      input: '-3.1',
      expectedCalcs: [[-3.1, 'untyped', null]]
    },
    {
      input: '4.11',
      expectedCalcs: [[4.11, 'untyped', null]]
    },
    {
      input: '-4.11',
      expectedCalcs: [[-4.11, 'untyped', null]]
    },
    {
      input: '5e2',
      expectedCalcs: [[500, 'untyped', null]]
    },
    {
      input: '-5e2',
      expectedCalcs: [[-500, 'untyped', null]]
    },
    {
      input: '6.1e-2',
      expectedCalcs: [[0.061, 'untyped', null]]
    },
    {
      input: '-6.1e-2',
      expectedCalcs: [[-0.061, 'untyped', null]]
    }
  ]);
});

it('handles addition', () => {
  runTests([
    {
      input: '1 m + 1 m',
      expectedCalcs: [[1 + 1, 'm', null]]
    },
    {
      input: '1 k + 1.1 k',
      expectedCalcs: [[1 + 1.1, 'k', null]]
    },
    {
      input: '1.1 + 1',
      expectedCalcs: [[1.1 + 1, 'untyped', null]]
    },
    {
      input: '1.1 + 1.1',
      expectedCalcs: [[1.1 + 1.1, 'untyped', null]]
    },
    {
      input: '1.1 + -0.9',
      expectedCalcs: [[1.1 - 0.9, 'untyped', null]]
    },
    {
      input: '2.2e3 + 500',
      expectedCalcs: [[2.2e3 + 500, 'untyped', null]]
    },
    {
      input: '2.2e3 k + 500 k + 800 k',
      expectedCalcs: [[2.2e3 + 500 + 800, 'k', null]]
    },
  ]);
});

it('handles subtraction', () => {
  runTests([
    {
      input: '1 m - 1 m',
      expectedCalcs: [[1 - 1, 'm', null]]
    },
    {
      input: '1 k - 1.1 k',
      expectedCalcs: [[1 - 1.1, 'k', null]]
    },
    {
      input: '1.1 - 1',
      expectedCalcs: [[1.1 - 1, 'untyped', null]]
    },
    {
      input: '1.1 - 1.1',
      expectedCalcs: [[1.1 - 1.1, 'untyped', null]]
    },
    {
      input: '1.1 - -0.9',
      expectedCalcs: [[1.1 - -0.9, 'untyped', null]]
    },
    {
      input: '2.2e3 - 500',
      expectedCalcs: [[2.2e3 - 500, 'untyped', null]]
    },
    {
      input: '2.2e3 k - 500 k - 800 k',
      expectedCalcs: [[2.2e3 - 500 - 800, 'k', null]]
    },
  ]);
});

it('handles multiplication', () => {
  runTests([
    {
      input: '2 m * 2 s',
      expectedCalcs: [[2 * 2, 'm⋅s', null]]
    },
    {
      input: '2 m * 0.5',
      expectedCalcs: [[2 * 0.5, 'm', null]]
    },
    {
      input: '0.5 * 2 s',
      expectedCalcs: [[0.5 * 2, 's', null]]
    },
    {
      input: '1.1 * 1.1',
      expectedCalcs: [[1.1 * 1.1, 'untyped', null]]
    },
    {
      input: '1.1 * -0.9',
      expectedCalcs: [[1.1 * -0.9, 'untyped', null]]
    },
    {
      input: '2.2e3 * 500',
      expectedCalcs: [[2.2e3 * 500, 'untyped', null]]
    },
    {
      input: '2.2e3 * 500 * 800',
      expectedCalcs: [[2.2e3 * 500 * 800, 'untyped', null]]
    },
    {
      input: 'Na = 6.02214e23 mol^-1\n' +
        '8.854e-12 C^2/(J*m) * 3',
      expectedCalcs: [[6.02214e+23, '1/mol', null], [2.6561999999999998e-11, 'C^2/(J⋅m)', null]]
    },
    {
      input: 'Na = 6.02214e23 mol^-1\n' +
        'Na * 8.854e-12 C^2/(J*m)',
      expectedCalcs: [[6.02214e+23, '1/mol', null], [5332002755999.999, 'C^2/(J⋅m⋅mol)', null]]
    }
  ]);
});

it('handles division', () => {
  runTests([
    {
      input: '2 m / 2 s',
      expectedCalcs: [[2 / 2, 'm/s', null]]
    },
    {
      input: '2 m / 0.5',
      expectedCalcs: [[2 / 0.5, 'm', null]]
    },
    {
      input: '0.5 / 2 s',
      expectedCalcs: [[0.5 / 2, '1/s', null]]
    },
    {
      input: '1.1 / 1.1',
      expectedCalcs: [[1.1 / 1.1, 'untyped', null]]
    },
    {
      input: '1.1 / -0.9',
      expectedCalcs: [[1.1 / -0.9, 'untyped', null]]
    },
    {
      input: '2.2e3 / 500',
      expectedCalcs: [[2.2e3 / 500, 'untyped', null]]
    },
    {
      input: '2.2e3 / 500 / 800',
      expectedCalcs: [[2.2e3 / 500 / 800, 'untyped', null]]
    },
    {
      input: '60.1 K / 303 K',
      expectedCalcs: [[60.1 / 303, 'untyped', null]]
    },
  ]);
});

it('handles exponentiation', () => {
  runTests([
    {
      input: '2 m ^ 2',
      expectedCalcs: [[Math.pow(2, 2), 'm^2', null]]
    },
    {
      input: '(2 m * 5 s) ^ (2 + 3 * 4)',
      expectedCalcs: [[Math.pow(2 * 5, (2 + 3 * 4)), 'm^14⋅s^14', null]]
    },
    {
      input: '2 + 3 ^ 4 * 5',
      expectedCalcs: [[2 + Math.pow(3, 4) * 5, 'untyped', null]]
    }
  ]);
});

it('includes constants', () => {
  runTests([
    {
      input: 'x = 2 * Pi\n3 * x',
      expectedCalcs: [[2 * Math.PI, 'untyped', null], [3 * 2 * Math.PI, 'untyped', null]]
    }
  ]);
});

it('handles grouping', () => {
  runTests([
    {
      input: '(2 + 3) * 4',
      expectedCalcs: [[(2 + 3) * 4, 'untyped', null]]
    },
    {
      input: '2 + (3 * 4)',
      expectedCalcs: [[2 + (3 * 4), 'untyped', null]]
    }
  ]);
});

it('handles unary functions', () => {
  runTests([
    {
      input: 'sin(234)',
      expectedCalcs: [[Math.sin(234), 'untyped', null]]
    },
    {
      input: 'acos(0.123)',
      expectedCalcs: [[Math.acos(0.123), 'untyped', null]]
    }
  ]);
});

it('handles leading whitespace, blank lines and comments', () => {
  runTests([
    {
      input: '   sin(234)\n' +
        '\n' +
        '\t345\n' +
        '//  Commented out!\n' +
        '456',
      expectedCalcs: [
        [Math.sin(234), 'untyped', null],
        ['', '', null],
        [345, 'untyped', null],
        ['//  Commented out!', '', null],
        [456, 'untyped', null],
      ]
    }
  ]);
});

it('handles complex calculations', () => {
  runTests([
    {
      input: 'Z = 2\n' +
        'n=4\n' +
        'energy = -1 * Rh * eV * Z^2 / (n^2)\n' +
        '// energy = 5.4496951065e-19 J\n' +
        'lambda = h * c / (-1 * energy)\n' +
        '// lambda = 3.645053050895848e-7  m\n' +
        'Z=1\n' +
        'n = 4\n' +
        'energyH = -1 * Rh * eV * Z^2 /(n^2)',
      expectedCalcs: [
        [2, 'untyped', null],
        [4, 'untyped', null],
        [-5.4496951065e-19, 'J', null],
        ['// energy = 5.4496951065e-19 J', '', null],
        [3.645053050895848e-7, 'm', null],
        ["// lambda = 3.645053050895848e-7  m", "", null],
        [1, "untyped", null],
        [4, "untyped", null],
        [-1.362423776625e-19, "J", null]
      ]
    }
  ]);
});

it('handles invalid unit combinations', () => {
  failTests([
    {
      input: '2 m + 3 s\n' +
        '2 m + 3 m',
      expectedErrors: [
        ["Expected units 'm' to match units 's' but \"2 m + 3 s\" found. (column 1)", new SyntaxError("Expected units 'm' to match units 's' but \"2 m + 3 s\" found.")],
        [5, null]
      ]
    },
    {
      input: '2 m/s + 3 m/s\n' +
        '2 s - 3 m',
      expectedErrors: [
        [5, null],
        ["Expected units 's' to match units 'm' but \"2 s - 3 m\" found. (column 1)", new SyntaxError("Expected units 's' to match units 'm' but \"2 s - 3 m\" found.")]
      ]
    }
  ]);
});
