import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultsDisplay from './ResultsDisplay';
import ConstantsDisplay from './ConstantsDisplay';
import {Calculator, SCIPARSER_CONSTANTS} from './Calculator';

const FORMULA_STORAGE_KEY = 'SciCalcFormula';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: localStorage.getItem(FORMULA_STORAGE_KEY) || ''
    };
  }

  render() {
    let results = [];
    let constants = SCIPARSER_CONSTANTS;
    if (this.state.formula !== '') {
      localStorage.setItem(FORMULA_STORAGE_KEY, this.state.formula );
      const calculated = Calculator.calculate(this.state.formula);
      results = calculated[0];
      constants = calculated[1];
    }
    return (
      <span>
        <FormulaInput formula={this.state.formula} onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        <ResultsDisplay results={results} />
        <ConstantsDisplay constants={constants} />
      </span>
    );
  }
}

export default App;