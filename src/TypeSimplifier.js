import { parse as UnitsParse } from './UnitsGrammar'
import { UNTYPED } from './Calculator'

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
      if (UNTYPED === parsedItem.units) {
        // Don't include untyped items, e.g. "untyped^0.5"
      } else if (1 === absoluteExponent) {
        destination.push(parsedItem.units);
      } else {
        destination.push(parsedItem.units + '^' + absoluteExponent);
      }
    }

    if (0 === numerator.length && 0 === denominator.length) {
      return UNTYPED;
    }

    let retval;
    if (inNumerator) {
      retval = numerator.join('⋅');
    } else {
      let numeratorStr = numerator.join('⋅');
      if (1 < numerator.length) {
        numeratorStr = '(' + numeratorStr + ')';
      }
      let denominatorStr = denominator.join('⋅');
      if (1 < denominator.length) {
        denominatorStr = '(' + denominatorStr + ')';
      }
      retval = numeratorStr + '/' + denominatorStr;
    }
    
    return retval;
  }
}

export default TypeSimplifier
