// Scientific Calculations Grammar, see https://pegjs.org/
// ==========================
//
// Accepts expressions like "1.45e-1 kg * 39.1666666667 m/s + 3.4 kgm/s" and computes their value.
{
	const UNTYPED = "untyped";
    var CONSTANTS =  new Map([
    	["C", [2.99792e8, "M/S"]],
        ["Pi", [3.14159, UNTYPED]],
        ["E", [1.60218e-19, "C"]]
    ]);
}

Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
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
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
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
  = "(" _ expr:Expression _ ")" { return expr; }
  /TypedNumber /UntypedNumber /Constant

Constant "constant"
  = _ chars:([A-Za-z]+) {
  	const constName = chars.join('');
  	console.log("In Constant, constName: ", constName);
    if (CONSTANTS.has(constName)) {
    	const constValue = CONSTANTS.get(constName)
  		console.log("In Constant, found value: ", constValue);
    	return constValue;
    }
    expected("predefined constant");
  }

TypedNumber
  = num:Number [ \t\n\r]* units:([a-zA-Z][a-zA-Z/0-9-^]*) {
    const joinedUnits = units[0] + units[1].join('');
  	console.log("In TypedNumber, number: ", num, ", units: ", joinedUnits);
    return [num, joinedUnits];
  }
  
UntypedNumber
  = num:Number {
    return [num, UNTYPED];
  }
  
Number
  = Sci /Float /Integer

Integer "integer"
  = _ digits:[0-9]+ { return parseInt(digits, 10); }
  
Float "float"
  = _ [-+]?[0-9]+(.[0-9]*) { return parseFloat(text(), 10); }
  
  
Sci "scientific notation"
  = _ [-+]?[0-9]+(.[0-9]+)? "e"i [-+]?[0-9]+ { 
  	//console.log(text());
  	const m = /([-+]?[0-9]+(.[0-9]+)?)[eE]([-+]?[0-9]+)/.exec(text());
    //console.log(m[1], m[2], m[3], m);
    return parseFloat(m[1], 10) * Math.pow(10, parseInt(m[3]));
   }

_ "whitespace"
  = [ \t\n\r]*