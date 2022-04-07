// Scientific Calculations Grammar, see https://pegjs.org/
// ==========================
//
// Accepts expressions like "1.45e-1 kg * 39.1666666667 m/s + 3.4 kgm/s" and computes their value.
//
// NOTE: We'll read from a global map named window.SCIPARSER_CONSTANTS to discover any
// global constants which should be available to calculations.  If the global map does
// not exist, no constants are defined.
{
  const UNTYPED = "untyped";
}

Expression
  = head:Term tail:(ws ("+" / "-") ws Term)* {
      return tail.reduce(function(result, element) {
        const numLeft = result[0];
        const numRight = element[3][0];
        const unitLeft = result[1];
        // TODO: Check if units of result[1] match units of element[3][1]
        console.log("Handling addition, assuming that type ", result[1], " matches type ", element[3][1]);
        var units = unitLeft;
        if (unitLeft == UNTYPED) {
        	units = element[3][1];
        }
        if (element[1] === "+") {
        	return [numLeft + numRight, units];
        }
        if (element[1] === "-") {
        	return [numLeft - numRight, units];
        }
      }, head);
    }

Term
  = head:Factor tail:(ws ("*" / "/") ws Factor)* {
      return tail.reduce(function(result, element) {
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
            	units = unitLeft + '⋅(' + unitRight + ')';
            }
        	return [numLeft * numRight, units];
        }
        if (element[1] === "/") {
        	var units;
        	if (unitLeft == UNTYPED) {
            	units = '1/(' + unitRight + ')';
            } else if (unitRight == UNTYPED) {
            	units = unitLeft;
            } else {
            	units = '(' + unitLeft + ')/(' + unitRight + ')';
            }
        	return [numLeft / numRight, units];
        }
      }, head);
    }

Factor
  = UnaryFunc /Grouped /TypedNumber /UntypedNumber /Constant

Grouped "grouped"
  = "(" ws expr:Expression ws ")" {
    return expr;
  }

UnaryFunc "unaryfunc"
  = func:([a-z][a-z0-9]+) ws "(" ws expr:(Expression) close:(ws ")") {
    const funcName = func[0] + func[1].join('');
    const value = expr[0];

    switch (funcName) {
      case "sin":
        return [Math.sin(value), UNTYPED];
      case "cos":
        return [Math.cos(value), UNTYPED];
      case "tan":
        return [Math.tan(value), UNTYPED];
      case "abs":
        return [Math.abs(value), UNTYPED];
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
        return [Math.cbrt(value), UNTYPED];
      case "ceil":
        return [Math.ceil(value), UNTYPED];
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
        return [Math.floor(value), UNTYPED];
      case "fround":
        return [Math.fround(value), UNTYPED];
      case "log":
        return [Math.log(value), UNTYPED];
      case "log1p":
        return [Math.log1p(value), UNTYPED];
      case "log10":
        return [Math.log10(value), UNTYPED];
      case "log2":
        return [Math.log2(value), UNTYPED];
      case "round":
        return [Math.round(value), UNTYPED];
      case "sin":
        return [Math.sin(value), UNTYPED];
      case "sinh":
        return [Math.sinh(value), UNTYPED];
      case "sqrt":
        return [Math.sqrt(value), UNTYPED];
      case "tan":
        return [Math.tan(value), UNTYPED];
      case "tanh":
        return [Math.tanh(value), UNTYPED];
      case "trunc":
        return [Math.trunc(value), UNTYPED];
      default:
        expected("unrecognized unary function '" + funcName + "'");
    }
  }

Constant "constant"
  = ws chars:([A-Za-z]+) {
    if (window.SCIPARSER_CONSTANTS  == undefined) {
      expected("predefined constant");
    } else {
      const constName = chars.join('');

      if (window.SCIPARSER_CONSTANTS.has(constName)) {
        const constValue = window.SCIPARSER_CONSTANTS.get(constName)
        return constValue;
      }
      expected("predefined constant");
    }
  }

TypedNumber "typednumber"
  = num:Number [ \t\n\r]+ units:([a-zA-Z][a-zA-Z/0-9-^]*) {
    const joinedUnits = units[0] + units[1].join('');
    return [num, joinedUnits];
  }
  
UntypedNumber "untypednumber"
  = num:Number {
    return [num, UNTYPED];
  }
  
Number "number"
  = Sci /Float /Integer

Integer "integer"
  = ws digits:[0-9]+ {
    return parseInt(text(), 10);
  }
  
Float "float"
  = ws [-+]?[0-9]+ "." [0-9]* {
    return parseFloat(text(), 10);
  }
  
  
Sci "scientific notation"
  = ws [-+]?[0-9]+("." [0-9]?)? "e"i [-+]?[0-9]+ {
  	const m = /([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(text());
    return parseFloat(m[1], 10) * Math.pow(10, parseInt(m[3]));
   }

ws "whitespace"
  = [ \t]*
