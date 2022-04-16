import React from 'react';
import {Calculator} from './Calculator';

function runTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = Calculator.calculate(test.input);
    expect(result[0]).toEqual(test.expectedCalcs);
  }
}

it('handles numbers', () => {
  runTests([
    {
      input: '1',
      expectedCalcs: [[1, 'untyped']]
    },
    {
      input: '-1',
      expectedCalcs: [[-1, 'untyped']]
    },
    {
      input: '2.',
      expectedCalcs: [[2.0, 'untyped']]
    },
    {
      input: '-2.',
      expectedCalcs: [[-2.0, 'untyped']]
    },
    {
      input: '3.1',
      expectedCalcs: [[3.1, 'untyped']]
    },
    {
      input: '-3.1',
      expectedCalcs: [[-3.1, 'untyped']]
    },
    {
      input: '4.11',
      expectedCalcs: [[4.11, 'untyped']]
    },
    {
      input: '-4.11',
      expectedCalcs: [[-4.11, 'untyped']]
    },
    {
      input: '5e2',
      expectedCalcs: [[500, 'untyped']]
    },
    {
      input: '-5e2',
      expectedCalcs: [[-500, 'untyped']]
    },
    {
      input: '6.1e-2',
      expectedCalcs: [[0.061, 'untyped']]
    },
    {
      input: '-6.1e-2',
      expectedCalcs: [[-0.061, 'untyped']]
    }
  ]);
});

it('handles addition', () => {
  runTests([
    {
      input: '1 m + 1 s',
      expectedCalcs: [[1 + 1, 'm']]
    },
    {
      input: '1 k + 1.1',
      expectedCalcs: [[1 + 1.1, 'k']]
    },
    {
      input: '1.1 + 1',
      expectedCalcs: [[1.1 + 1, 'untyped']]
    },
    {
      input: '1.1 + 1.1',
      expectedCalcs: [[1.1 + 1.1, 'untyped']]
    },
    {
      input: '1.1 + -0.9',
      expectedCalcs: [[1.1 - 0.9, 'untyped']]
    },
    {
      input: '2.2e3 + 500',
      expectedCalcs: [[2.2e3 + 500, 'untyped']]
    },
    {
      input: '2.2e3 k + 500 + 800',
      expectedCalcs: [[2.2e3 + 500 + 800, 'k']]
    },
  ]);
});

it('handles subtraction', () => {
  runTests([
    {
      input: '1 m - 1 s',
      expectedCalcs: [[1 - 1, 'm']]
    },
    {
      input: '1 k - 1.1',
      expectedCalcs: [[1 - 1.1, 'k']]
    },
    {
      input: '1.1 - 1',
      expectedCalcs: [[1.1 - 1, 'untyped']]
    },
    {
      input: '1.1 - 1.1',
      expectedCalcs: [[1.1 - 1.1, 'untyped']]
    },
    {
      input: '1.1 - -0.9',
      expectedCalcs: [[1.1 - -0.9, 'untyped']]
    },
    {
      input: '2.2e3 - 500',
      expectedCalcs: [[2.2e3 - 500, 'untyped']]
    },
    {
      input: '2.2e3 k - 500 m - 800 f',
      expectedCalcs: [[2.2e3 - 500 - 800, 'k']]
    },
  ]);
});

it('handles multiplication', () => {
  runTests([
    {
      input: '2 m * 2 s',
      expectedCalcs: [[2 * 2, 'm⋅s']]
    },
    {
      input: '2 m * 0.5',
      expectedCalcs: [[2 * 0.5, 'm']]
    },
    {
      input: '0.5 * 2 s',
      expectedCalcs: [[0.5 * 2, 's']]
    },
    {
      input: '1.1 * 1.1',
      expectedCalcs: [[1.1 * 1.1, 'untyped']]
    },
    {
      input: '1.1 * -0.9',
      expectedCalcs: [[1.1 * -0.9, 'untyped']]
    },
    {
      input: '2.2e3 * 500',
      expectedCalcs: [[2.2e3 * 500, 'untyped']]
    },
    {
      input: '2.2e3 * 500 * 800',
      expectedCalcs: [[2.2e3 * 500 * 800, 'untyped']]
    },
    {
      input: 'Na = 6.02214e23 mol^-1\n' +
        '8.854e-12 C^2/(J*m) * 3',
      expectedCalcs: [[6.02214e+23, '1/mol'], [2.6561999999999998e-11, 'C^2/(J⋅m)']]
    },
    {
      input: 'Na = 6.02214e23 mol^-1\n' +
        'Na * 8.854e-12 C^2/(J*m)',
      expectedCalcs: [[6.02214e+23, '1/mol'], [5332002755999.999, 'C^2/(J⋅m⋅mol)']]
    }
  ]);
});

it('handles division', () => {
  runTests([
    {
      input: '2 m / 2 s',
      expectedCalcs: [[2 / 2, 'm/s']]
    },
    {
      input: '2 m / 0.5',
      expectedCalcs: [[2 / 0.5, 'm']]
    },
    {
      input: '0.5 / 2 s',
      expectedCalcs: [[0.5 / 2, '1/s']]
    },
    {
      input: '1.1 / 1.1',
      expectedCalcs: [[1.1 / 1.1, 'untyped']]
    },
    {
      input: '1.1 / -0.9',
      expectedCalcs: [[1.1 / -0.9, 'untyped']]
    },
    {
      input: '2.2e3 / 500',
      expectedCalcs: [[2.2e3 / 500, 'untyped']]
    },
    {
      input: '2.2e3 / 500 / 800',
      expectedCalcs: [[2.2e3 / 500 / 800, 'untyped']]
    },
  ]);
});

it('handles exponentiation', () => {
  runTests([
    {
      input: '2 m ^ 2',
      expectedCalcs: [[Math.pow(2, 2), 'm^2']]
    },
    {
      input: '(2 m * 5 s) ^ (2 + 3 * 4)',
      expectedCalcs: [[Math.pow(2 * 5, (2 + 3 * 4)), 'm^14⋅s^14']]
    },
    {
      input: '2 + 3 ^ 4 * 5',
      expectedCalcs: [[2 + Math.pow(3, 4) * 5, 'untyped']]
    }
  ]);
});

it('includes constants', () => {
  runTests([
    {
      input: 'x = 2 * Pi\n3 * x',
      expectedCalcs: [[2 * Math.PI, 'untyped'], [3 * 2 * Math.PI, 'untyped']]
    }
  ]);
});

it('handles grouping', () => {
  runTests([
    {
      input: '(2 + 3) * 4',
      expectedCalcs: [[(2 + 3) * 4, 'untyped']]
    },
    {
      input: '2 + (3 * 4)',
      expectedCalcs: [[2 + (3 * 4), 'untyped']]
    }
  ]);
});

it('handles unary functions', () => {
  runTests([
    {
      input: 'sin(234)',
      expectedCalcs: [[Math.sin(234), 'untyped']]
    },
    {
      input: 'acos(0.123)',
      expectedCalcs: [[Math.acos(0.123), 'untyped']]
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
        [Math.sin(234), 'untyped'],
        ['(blank)', ''],
        [345, 'untyped'],
        ['(blank)', ''],
        [456, 'untyped'],
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
        [2, 'untyped'],
        [4, 'untyped'],
        [-5.4496951065e-19, 'J'],
        ['(blank)', ''],
        [3.645053050895848e-7, 'm'],
        ["(blank)", ""],
        [1, "untyped"],
        [4, "untyped"],
        [-1.362423776625e-19, "J"]
      ]
    }
  ]);
});
