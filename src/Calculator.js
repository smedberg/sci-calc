import { parse as SciParse } from './SciGrammar'

// A global used in SciGrammar.pegjs.  We can't pass in
// arguments, but we share a global environment.
// We can also dynamically modify this map, e.g.
// by adding new constants at runtime.
window.SCIPARSER_CONSTANTS =  new Map([
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
  ["amu", [1.66054e-27, "kg"], "Atomic Mass"],
  ["eV", [1.60218e-19, "J"], "Electron Volt"],
  ["D", [3.336e-30, "Cm"], "Debye"]
]);

class Calculator {
  static calculate(text) {
    // TODO: If a line sets a constant, add it 
    // to window.SCIPARSER_CONSTANTS like this:
    // window.SCIPARSER_CONSTANTS.set("F", [3, "m/s"]);
    let result = [];
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      try {
        result.push(SciParse(lines[i]));
      } catch (error) {
        result.push([error.message, '']);
      }
    }
    return result;
  }
}

export default Calculator;
