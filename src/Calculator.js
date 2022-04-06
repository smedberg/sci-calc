import { parse as SciParse } from './SciGrammar'

// A global used in SciGrammar.pegjs.  We can't pass in
// arguments, but we share a global environment.
// We can also dynamically modify this map, e.g.
// by adding new constants at runtime.
const SCIPARSER_CONSTANTS =  new Map([
  ["Pi", [3.14159, "untyped"], "Pi"],
  ["c", [2.99792e8, "m/s"], "Speed of Light"],
  ["e", [1.60218e-19, "C"], "Elementary Charge"],
  ["Me", [9.10938e-31, "kg"], "Electron Mass"],
  ["Mp", [1.67262e-27, "kg"], "Proton Mass"],
  ["Mn", [1.67493e-27, "kg"], "Neutron Mass"],
  ["h", [6.62607e-34, "Js"], "Planck's Constant"],
  ["Na", [6.02214e23, "1/mol"], "Avogadro's Number"],
  ["R", [8.31446, "J/Kmol"], "Gas Constant"],
  ["kB", [1.38065e-23, "J/K"], "Boltzmann's Constant"],
  ["a0", [5.29177e-11, "m"], "Bohr Radius"],
  ["e0", [8.85419e-12, "C^2/Jm"], "Vacuum Permittivity"],
  ["Rh", [13.6057, "eV"], "Rydberg Constant"],
  ["amu", [1.66054e-27, "kg/amu"], "Atomic Mass"],
  ["eV", [1.60218e-19, "J/eV"], "Electron Volt"],
  ["D", [3.336e-30, "Cm"], "Debye"]
]);

const SETTER_LINE_REGEXP = /([a-zA-Z]+) *= *(.*)/;

class Calculator {
  static calculate(text) {
    // Copy the constant set of constants into a map that we
    // may modify. We do NOT want to modify the original.
    // We're setting it on "window" so that the parser
    // code can read it.
    window.SCIPARSER_CONSTANTS = new Map(SCIPARSER_CONSTANTS);
    let result = [];
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '') {
        result.push(['(blank)', '']);
      } else {
        try {
          const match = SETTER_LINE_REGEXP.exec(line);
          let parsedLine = [];
          if (match) {
            // We found a line that's a "setter"
            parsedLine = SciParse(match[2]);
            // Copy the value of the line to the global set of constants,
            // overwriting any existing value
            window.SCIPARSER_CONSTANTS.set(match[1], parsedLine);
          } else {
            parsedLine = SciParse(line);
          }
          result.push(parsedLine);
        } catch (error) {
          result.push([error.message, '']);
        }
      }
    }
    return [result, window.SCIPARSER_CONSTANTS];
  }
}

export {SCIPARSER_CONSTANTS, Calculator}
