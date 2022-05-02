// Scientific Calculations Grammar, see https://pegjs.org/
// Based on arithmetic example at https://github.com/pegjs/pegjs/blob/master/examples/arithmetics.pegjs
// ==========================
//
// Accepts expressions like "1.45e-1 kg * 39.1666666667 m/s + 3.4 kgm/s" and computes their value.
//
// NOTE: We'll read from a global map named window.SCIPARSER_SYMBOLS_MAP to discover any
// global symbols which should be available to calculations.  If the global map does
// not exist, no symbols are defined.
{
  const UNTYPED = "untyped";

  function log() {
    //console.log(...arguments);
  }
}

Expression
  = head:Term tail:(ws ("+" / "-") ws Term)* {
      log("In SciGrammar add/subtract processing, head is ", head, ", tail is ", tail);
      return tail.reduce(function(result, element) {
        log("In SciGrammar add/subtract reduction, result is ", result, ", element is ", element);
        const numLeft = result[0];
        const numRight = element[3][0];
        const unitLeft = result[1];

        // The logic is somewhat circuitous here.  We're generally just combining units
        // syntactically in this file, e.g. "3 m * 4 m/s" becomes "12 m*m/s".  We're NOT
        // simplifying to "12 m^2/s"- that's done later, outside this grammar.
        //  However, for addition and subtraction, we want to check if units match.  To
        // do so, we'll call an external helper that has to simplify anyway, and it returns
        // the simplified units so that we can display a good error message.  We COULD use
        // the simplified units instead of the more complex "raw" units.
        if (window.SCIPARSER_UNITS_SIMPLIFIER !== undefined) {
          const unitsLeft = window.SCIPARSER_UNITS_SIMPLIFIER(result[1]);
          const unitsRight = window.SCIPARSER_UNITS_SIMPLIFIER(element[3][1]);
          if (unitsLeft !== unitsRight) {
            expected("units '" + unitsLeft + "' to match units '" + unitsRight + "'");
          }
        }
        var units = unitLeft;
        if (unitLeft == UNTYPED) {
          units = element[3][1];
        }
        units = units.replace(/ /g, '⋅').replace(/\*/g, '⋅');
        if (element[1] === "+") {
          return [numLeft + numRight, units];
        }
        if (element[1] === "-") {
          return [numLeft - numRight, units];
        }
      }, head);
    }

Term
  = head:Exponent tail:(ws ("*" / "/") ws Exponent)* {
      log("In SciGrammar multiply/divide processing, head is ", head, ", tail is ", tail);
      return tail.reduce(function(result, element) {
        log("In SciGrammar multiply/divide reduction, result is ", result, ", element is ", element);
        const numLeft = result[0];
        const numRight = element[3][0];
        const unitLeft = result[1];
        const unitRight = element[3][1];
        if (element[1] === "*") {
          var units;
          if (unitLeft == UNTYPED) {
            units = unitRight;
          } else if (unitRight == UNTYPED) {
            units = unitLeft;
          } else {
            units = '(' + unitLeft + ')⋅(' + unitRight + ')';
          }
          units = units.replace(/ /g, '⋅').replace(/\*/g, '⋅');
          return [numLeft * numRight, units];
        }
        if (element[1] === "/") {
          var units;
          if (unitRight == UNTYPED) {
            units = unitLeft;
          } else if (unitLeft == UNTYPED) {
            units = '(' + unitRight + ')^-1';
          } else {
            units = '(' + unitLeft + ')/(' + unitRight + ')';
          }
          units = units.replace(/ /g, '⋅').replace(/\*/g, '⋅');
          return [numLeft / numRight, units];
        }
      }, head);
    }

Exponent
  = head:Factor tail:(ws "^" ws Factor)* {
      log("In SciGrammar exponent processing, head is ", head, ", tail is ", tail);
      return tail.reduce(function(result, element) {
        log("In SciGrammar exponent reduction, result is ", result, ", element is ", element);
        const numLeft = result[0];
        const numRight = element[3][0];
        const unitLeft = result[1];
        var units = UNTYPED;
        if (unitLeft !== UNTYPED) {
          units = '(' + unitLeft + ')^' + numRight
        }
        return [Math.pow(numLeft, numRight), units];
      }, head);
    }

Factor
  = Grouped /TypedNumber /UnaryFunc /UntypedNumber /Symbol

Grouped "grouped"
  = "(" ws expr:Expression ws ")" {
    log("In SciGrammar group processing, expr is ", expr);
    return expr;
  }

UnaryFunc "unary function"
  = func:([a-z][a-z0-9]+) ws "(" ws expr:(Expression) close:(ws ")") {
    log("In SciGrammar unary function processing, func is ", func, ", expr is ", expr);
    const funcName = func[0] + func[1].join('');
    const value = expr[0];
    const units = expr[1];

    // TODO: Should we verify that value is unitless for most of these cases?
    switch (funcName) {
      case "sin":
        return [Math.sin(value), UNTYPED];
      case "cos":
        return [Math.cos(value), UNTYPED];
      case "tan":
        return [Math.tan(value), UNTYPED];
      case "abs":
        return [Math.abs(value), units];
      case "acos":
        return [Math.acos(value), UNTYPED];
      case "acosh":
        return [Math.acosh(value), UNTYPED];
      case "asin":
        return [Math.asin(value), UNTYPED];
      case "asinh":
        return [Math.asinh(value), UNTYPED];
      case "atan":
        return [Math.atan(value), UNTYPED];
      case "atanh":
        return [Math.atanh(value), UNTYPED];
      case "cbrt":
        return [Math.cbrt(value), '(' + units + ')^' + (1/3)];
      case "ceil":
        return [Math.ceil(value), units];
      case "clz32":
        return [Math.clz32(value), UNTYPED];
      case "cos":
        return [Math.cos(value), UNTYPED];
      case "cosh":
        return [Math.cosh(value), UNTYPED];
      case "exp":
        return [Math.exp(value), UNTYPED];
      case "expm1":
        return [Math.expm1(value), UNTYPED];
      case "floor":
        return [Math.floor(value), units];
      case "fround":
        return [Math.fround(value), units];
      case "log":
        return [Math.log(value), UNTYPED];
      case "log1p":
        return [Math.log1p(value), UNTYPED];
      case "log10":
        return [Math.log10(value), UNTYPED];
      case "log2":
        return [Math.log2(value), UNTYPED];
      case "round":
        return [Math.round(value), units];
      case "sin":
        return [Math.sin(value), UNTYPED];
      case "sinh":
        return [Math.sinh(value), UNTYPED];
      case "sqrt":
        return [Math.sqrt(value), '(' + units + ')^0.5'];
      case "tan":
        return [Math.tan(value), UNTYPED];
      case "tanh":
        return [Math.tanh(value), UNTYPED];
      case "trunc":
        return [Math.trunc(value), units];
      default:
        expected("unrecognized unary function '" + funcName + "'");
    }
  }

Symbol "symbol"
  = ws chars:([a-zA-Z][a-zA-Z0-9]*) {
    log("In SciGrammar symbol processing, chars is ", chars);
    if (window.SCIPARSER_SYMBOLS_MAP == undefined) {
      expected("predefined symbol");
    } else {
      const symbolName = chars[0] + chars[1].join('');

      if (window.SCIPARSER_SYMBOLS_MAP.has(symbolName)) {
        const constValue = window.SCIPARSER_SYMBOLS_MAP.get(symbolName)
        log("Found symbol " + symbolName + " with value ", constValue);
        return constValue;
      }
      log("In SciGrammar symbol processing, failed to find symbol " + symbolName);
      expected("predefined symbol");
    }
  }

TypedNumber "typed number"
  = num:Number [ \t\n\r]+ units:Units {
    log("In SciGrammar TypedNumber, ", text());
    return [num, units];
  }

Units "units"
  = head:(UngroupedUnits / GroupedUnits) tail:([*⋅/] (UngroupedUnits / GroupedUnits))* {
    log("In SciGrammar Units, ", text());
    return text();
  }

UngroupedUnits "ungrouped units"
  = head:Unit tail:([*⋅/]Unit)* {
    log("In SciGrammar UngroupedUnits, ", text());
    return text();
  }

GroupedUnits "grouped units"
  = "(" ws Units ws ")" ([^][+-]?[0-9]+)? {
    log("In SciGrammar GroupedUnits, ", text());
    return text();
  }

Unit "unit"
  = unit:([a-zA-Z]+ ([^][+-]?[0-9]+)?) {
    log("In SciGrammar Unit, ", text());
    return text();
  }
  
UntypedNumber "untyped number"
  = num:Number {
    log("In SciGrammar UntypedNumber processing, num is ", num);
    return [num, UNTYPED];
  }
  
Number "number"
  = Sci /Float /Integer

Integer "integer"
  = ws [-+]?[0-9]+ {
    log("In SciGrammar Integer processing, text is ", text());
    return parseInt(text(), 10);
  }
  
Float "float"
  = ws [-+]?[0-9]+ "." [0-9]* {
    log("In SciGrammar Float processing, text is ", text());
    return parseFloat(text(), 10);
  }
  
  
Sci "scientific notation"
  = ws [-+]?[0-9]+("." [0-9]*)? "e" [-+]?[0-9]+ {
    log("In SciGrammar Sci processing, text is ", text());
    const m = /([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(text());
    return parseFloat(m[1], 10) * Math.pow(10, parseInt(m[3]));
   }

ws "whitespace"
  = [ \t]*
