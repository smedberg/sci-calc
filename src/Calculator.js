import { parse as SciParse } from './SciGrammar'

// A global used in SciGrammar.pegjs.  We can't pass in
// arguments, but we share a global environment.
// We can also dynamically modify this map, e.g.
// by adding new constants at runtime.
window.SCIPARSER_CONSTANTS =  new Map([
  ["C", [2.99792e8, "M/S"]],
  ["Pi", [3.14159, "untyped"]],
  ["E", [1.60218e-19, "C"]]
]);

class Calculator {
  static calculate(text) {
    var resultText, units;
    try {
      // TODO: run each line separately.  If a line sets a constant, add it 
      // to window.SCIPARSER_CONSTANTS like this:
      // window.SCIPARSER_CONSTANTS.set("F", [3, "m/s"]);
      const parsed = SciParse(text);
      resultText = parsed[0];
      units = parsed[1];
    } catch(error) {
      console.log(error);
      resultText = error.message;
      units = '';
    }

    return [resultText, units];
  }
}

export default Calculator;
