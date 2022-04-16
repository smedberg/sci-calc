import { parse as UnitsParse } from './UnitsGrammar'

class TypeSimplifier {
  static simplify(text) {
    const parsed = UnitsParse(text);
    let numerator = [];
    let denominator = [];
    let inNumerator = true;
    for (let i = 0; i < parsed.length; ++i) {
      let parsedItem = parsed[i];

      if (parsedItem.exponent < 0 && inNumerator && i === 0) {
        numerator = ['1'];
      }

      if (parsedItem.exponent < 0 && inNumerator) {
        inNumerator = false;
      }

      let destination = numerator;
      if (!inNumerator) {
        destination = denominator;
      }

      const absoluteExponent = Math.abs(parsedItem.exponent);
      if (1 === absoluteExponent) {
        destination.push(parsedItem.units);
      } else {
        destination.push(parsedItem.units + '^' + absoluteExponent);
      }
    }

    let retval;
    if (inNumerator) {
      retval = numerator.join('⋅');
    } else {
      retval = numerator.join('⋅') + '/' + denominator.join('⋅');
    }
    
    return retval;
  }
}

export default TypeSimplifier
