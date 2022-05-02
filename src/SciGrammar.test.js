import React from 'react';
import { parse as SciParse } from './SciGrammar'

function runTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = SciParse(test.input);
    //console.log("In SciGrammar test, test: ", test, ", result: ", result);
    expect(result[0]).toEqual(test.expectedCalcs[0]);
    expect(result[1]).toEqual(test.expectedCalcs[1]);
  }
}

function failTests(tests) {
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    expect(() => { SciParse(test.input)}).toThrow();
  }
}

it('handles numbers', () => {
  runTests([
    {
      input: '1',
      expectedCalcs: [1, 'untyped']
    },
    {
      input: '-1',
      expectedCalcs: [-1, 'untyped']
    },
    {
      input: '2.',
      expectedCalcs: [2.0, 'untyped']
    },
    {
      input: '-2.',
      expectedCalcs: [-2.0, 'untyped']
    },
    {
      input: '3.1',
      expectedCalcs: [3.1, 'untyped']
    },
    {
      input: '-3.1',
      expectedCalcs: [-3.1, 'untyped']
    },
    {
      input: '4.11',
      expectedCalcs: [4.11, 'untyped']
    },
    {
      input: '-4.11',
      expectedCalcs: [-4.11, 'untyped']
    },
    {
      input: '5e2',
      expectedCalcs: [500, 'untyped']
    },
    {
      input: '-5e2',
      expectedCalcs: [-500, 'untyped']
    },
    {
      input: '6.1e-2',
      expectedCalcs: [0.061, 'untyped']
    },
    {
      input: '-6.1e-2',
      expectedCalcs: [-0.061, 'untyped']
    }
  ]);
});

it('handles addition', () => {
  runTests([
    {
      input: '1 m + 1 m',
      expectedCalcs: [1 + 1, 'm']
    },
    {
      input: '1 k + 1.1 k',
      expectedCalcs: [1 + 1.1, 'k']
    },
    {
      input: '1.1 + 1',
      expectedCalcs: [1.1 + 1, 'untyped']
    },
    {
      input: '1.1 + 1.1',
      expectedCalcs: [1.1 + 1.1, 'untyped']
    },
    {
      input: '1.1 + -0.9',
      expectedCalcs: [1.1 - 0.9, 'untyped']
    },
    {
      input: '2.2e3 + 500',
      expectedCalcs: [2.2e3 + 500, 'untyped']
    },
    {
      input: '2.2e3 k + 500 k + 800 k',
      expectedCalcs: [2.2e3 + 500 + 800, 'k']
    },
  ]);
});

it('handles subtraction', () => {
  runTests([
    {
      input: '1 m - 1 m',
      expectedCalcs: [1 - 1, 'm']
    },
    {
      input: '1 k - 1.1 k',
      expectedCalcs: [1 - 1.1, 'k']
    },
    {
      input: '1.1 - 1',
      expectedCalcs: [1.1 - 1, 'untyped']
    },
    {
      input: '1.1 - 1.1',
      expectedCalcs: [1.1 - 1.1, 'untyped']
    },
    {
      input: '1.1 - -0.9',
      expectedCalcs: [1.1 - -0.9, 'untyped']
    },
    {
      input: '2.2e3 - 500',
      expectedCalcs: [2.2e3 - 500, 'untyped']
    },
    {
      input: '2.2e3 k - 500 k - 800 k',
      expectedCalcs: [2.2e3 - 500 - 800, 'k']
    },
  ]);
});

it('handles multiplication', () => {
  runTests([
    {
      input: '2 m * 2 s',
      expectedCalcs: [2 * 2, '(m)⋅(s)']
    },
    {
      input: '2 m * 0.5',
      expectedCalcs: [2 * 0.5, 'm']
    },
    {
      input: '0.5 * 2 s',
      expectedCalcs: [0.5 * 2, 's']
    },
    {
      input: '1.1 * 1.1',
      expectedCalcs: [1.1 * 1.1, 'untyped']
    },
    {
      input: '1.1 * -0.9',
      expectedCalcs: [1.1 * -0.9, 'untyped']
    },
    {
      input: '2.2e3 * 500',
      expectedCalcs: [2.2e3 * 500, 'untyped']
    },
    {
      input: '2.2e3 * 500 * 800',
      expectedCalcs: [2.2e3 * 500 * 800, 'untyped']
    },
  ]);
});

it('handles division', () => {
  runTests([
    {
      input: '2 m / 2 s',
      expectedCalcs: [2 / 2, '(m)/(s)']
    },
    {
      input: '2 m / 0.5',
      expectedCalcs: [2 / 0.5, 'm']
    },
    {
      input: '0.5 / 2 s',
      expectedCalcs: [0.5 / 2, '(s)^-1']
    },
    {
      input: '1.1 / 1.1',
      expectedCalcs: [1.1 / 1.1, 'untyped']
    },
    {
      input: '1.1 / -0.9',
      expectedCalcs: [1.1 / -0.9, 'untyped']
    },
    {
      input: '2.2e3 / 500',
      expectedCalcs: [2.2e3 / 500, 'untyped']
    },
    {
      input: '2.2e3 / 500 / 800',
      expectedCalcs: [2.2e3 / 500 / 800, 'untyped']
    },
  ]);
});

it('handles exponentiation', () => {
  runTests([
    {
      input: '2 m ^ 2',
      expectedCalcs: [Math.pow(2, 2), '(m)^2']
    },
    {
      input: '(2 m * 5 s) ^ (2 + 3 * 4)',
      expectedCalcs: [Math.pow(2 * 5, (2 + 3 * 4)), '((m)⋅(s))^14']
    },
    {
      input: '2 + 3 ^ 4 * 5',
      expectedCalcs: [2 + Math.pow(3, 4) * 5, 'untyped']
    }
  ]);
});

it('includes symbols', () => {
  window.SCIPARSER_SYMBOLS_MAP =  new Map([["Pi", [Math.PI, "untyped"], "Pi"]]);

  runTests([
    {
      input: '2 * Pi',
      expectedCalcs: [2 * Math.PI, 'untyped']
    }
  ]);
});

it('handles grouping', () => {
  runTests([
    {
      input: '(2 + 3) * 4',
      expectedCalcs: [(2 + 3) * 4, 'untyped']
    },
    {
      input: '2 + (3 * 4)',
      expectedCalcs: [2 + (3 * 4), 'untyped']
    },
    {
      input: '3 C^2/(J*m)',
      expectedCalcs: [3, 'C^2/(J*m)']
    },
    {
      input: '3 C^2/(J*m)^2',
      expectedCalcs: [3, 'C^2/(J*m)^2']
    },
    {
      input: '3 C^-2/(J*m)^2',
      expectedCalcs: [3, 'C^-2/(J*m)^2']
    },
    {
      input: '3 C^2/(J*m)^-2',
      expectedCalcs: [3, 'C^2/(J*m)^-2']
    },
    {
      input: '8.854e-12 C^2/(J*m) * 3',
      expectedCalcs: [2.6561999999999998e-11, 'C^2/(J⋅m)']
    }
  ]);
});

it('handles unary functions', () => {
  runTests([
    {
      input: 'sin(234)',
      expectedCalcs: [Math.sin(234), 'untyped']
    },
    {
      input: 'acos(0.123)',
      expectedCalcs: [Math.acos(0.123), 'untyped']
    },
    {
      input: 'sqrt(4 m^2)',
      expectedCalcs: [2, '(m^2)^0.5']
    },
    {
      input: 'cbrt(4 m^3)',
      expectedCalcs: [Math.cbrt(4), '(m^3)^0.3333333333333333']
    },
    {
      input: 'abs(-4 m^2)',
      expectedCalcs: [4, 'm^2']
    },
    {
      input: 'ceil(1.23 m^2)',
      expectedCalcs: [2, 'm^2']
    },
    {
      input: 'floor(1.23 m^2)',
      expectedCalcs: [1, 'm^2']
    },
    {
      input: 'fround(1.23 m^2)',
      expectedCalcs: [Math.fround(1.23), 'm^2']
    },
    {
      input: 'round(1.23 m^2)',
      expectedCalcs: [1, 'm^2']
    },
    {
      input: 'trunc(1.99 m^2)',
      expectedCalcs: [1, 'm^2']
    }
  ]);
});

it('handles other cases', () => {
  runTests([
    {
      input: '1 (kg*(m/s)^2)/joule',
      expectedCalcs: [1, '(kg*(m/s)^2)/joule']
    }
  ]);
});

it('calls helper to check units for addition and subtraction', () => {
  // SciParser should fail when helper function returns items that don't match
  let counter = 0;
  window.SCIPARSER_UNITS_SIMPLIFIER = () => { counter = counter + 1; return 'testing: ' + (num % 2 == 0); };
  failTests([
    {
      input: '1 + 2',
      expectedCalcs: [3, 'untyped']
    }
  ]);

  // SciParser should succeed when helper function returns items that do match
  window.SCIPARSER_UNITS_SIMPLIFIER = () => { return 'testing'; };
  runTests([
    {
      input: '1 + 2',
      expectedCalcs: [3, 'untyped']
    }
  ]);

  // SciParser should succeed when helper function is undefined
  window.SCIPARSER_UNITS_SIMPLIFIER = undefined;
  runTests([
    {
      input: '1 + 2',
      expectedCalcs: [3, 'untyped']
    }
  ]);
});
