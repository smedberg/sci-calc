// Scientific Units Grammar, see https://pegjs.org/
// Based on arithmetic example at https://github.com/pegjs/pegjs/blob/master/examples/arithmetics.pegjs
// ==========================
//
// Accepts expressions like "kg m/(m*s)" and turns into standardized format

{
  function log() {
    // This is for development/testing.  For prod, comment this line out.
    //console.log(...arguments);
  }

  function reduceUnits(unitsArray) {
    // We accept an array with units and powers, like [{units: 'm', exponent: 2}, {units: 's', exponent: 1}, {units: 'm', exponent: 2}].
    // We combine any redundant units, to return something like [{units: 'm', exponent: 4}, {units: 's', exponent: 1}].
    log("In reduceUnits, unitsArray is ", unitsArray);
    const combined = new Map();

    // Find duplicate units, combine them
    for (let i = 0; i < unitsArray.length; ++i) {
      const unit = unitsArray[i];
      log("In reduceUnits, unit is ", unit);
      if (combined.has(unit.units)) {
        combined.set(unit.units, combined.get(unit.units) + unit.exponent);
      } else {
        combined.set(unit.units, unit.exponent);
      }
    }
    const res = Array.from(combined, function (item) {
      const exponent = item[1];
      if (exponent !== 0) {
        return { units: item[0], exponent: exponent };
      } else {
        return null;
      }
    }).filter(Boolean);

    res.sort(function(x, y) {
      if (x.exponent !== y.exponent) {
        return y.exponent - x.exponent;
      }
      return x.units.localeCompare(y.units)
    });
    log("In reduceUnits, returning ", res);

    return res;
  }
}

Term
  = head:Exponent tail:(("*" /" " /"⋅" /"/") ws Exponent)* {
      log("In UnitsGrammar multiply/divide processing, head is ", head, ", tail is ", tail);
      return tail.reduce(function(result, element) {
        log("In UnitsGrammar multiply/divide processing, result is ", result, ", element is ", element);
        const operator = element[0];
        const leftUnits = result;
        const rightUnits = element[2];
        log("In UnitsGrammar multiply/divide processing, operator is ", operator, ", leftUnits is ", leftUnits, ", rightUnits is ", rightUnits);
        if (operator === "*" || operator === " " || operator === "⋅") {
          log("In UnitsGrammar multiply/divide, multiplying");
          const concatted = leftUnits.concat(rightUnits);
          log("In UnitsGrammar multiply/divide, returning reduction of ", concatted);
          const retval = reduceUnits(concatted);
          log("In UnitsGrammar multiply/divide processing, returning ", retval);
          return retval;
        } else {
          // division
          for (let i = 0; i < rightUnits.length; i++) {
            const rightUnit = rightUnits[i];
            rightUnit.exponent = -1 * rightUnit.exponent;
          }
          log("In UnitsGrammar multiply/divide processing, concatenating ", leftUnits, " with ", rightUnits);
          const concatenated = leftUnits.concat(rightUnits);
          log("In UnitsGrammar multiply/divide processing, concatenated is ", concatenated);
          const retval = reduceUnits(concatenated);
          log("In UnitsGrammar multiply/divide processing, returning ", retval);
          return reduceUnits(retval);
        }
      }, head);
    }

Exponent
  = head:Factor tail:(ws "^" ws Integer)* {
      log("In UnitsGrammar exponent processing, head is ", head, ", tail is ", tail);
      return tail.reduce(function(result, element) {
        log("In UnitsGrammar exponent processing, result is ", result, ", element is ", element, ", type: ", typeof(element[3]));
        const power = element[3];
        for (let i = 0; i < result.length; i++) {
          const resultItem = result[i];
          resultItem.exponent = resultItem.exponent * power;
        }
        log("In UnitsGrammar exponent processing, returning ", result);
        return result;
      }, head);
    }

Factor
  = Grouped /Units /Reciprocal

// This is a special case for units like "1/mol".  We do NOT handle things like "2/mol".
Reciprocal
  = "1/" groupedOrUnits:(Grouped /Units) {
    for (var i = 0; i < groupedOrUnits.length; i++) {
      const groupOrUnit = groupedOrUnits[i];
      groupOrUnit.exponent = -1 * groupOrUnit.exponent;
    }
    return groupedOrUnits;
  }

Grouped "grouped"
  = "(" ws expr:Term ws ")" {
    log("In UnitsGrammar group processing, expr is ", expr);
    return expr;
  }

Units "units"
  = units:[a-zA-Z]+ {
    log("In UnitsGrammar Units processing, text: ", text());
    //const joinedUnits = units[0] + units[1].join('');
    //log("In UnitsGrammar Units, joinedUnits: ", joinedUnits);
    const ret = [{units: text(), exponent: 1}];
    log("In UnitsGrammar Units processing, returning: ", ret);
    return ret;
  }

Integer "integer"
  = ws [-+]?[0-9]+ {
    log("In UnitsGrammar Integer processing, text is ", text());
    return parseInt(text(), 10);
  }

ws "whitespace"
  = [ \t]*
