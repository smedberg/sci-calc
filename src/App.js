import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultDisplay from './ResultDisplay';
import Calculator from './Calculator';

const FORMULA_STORAGE_KEY = 'SciCalcFormula';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: localStorage.getItem(FORMULA_STORAGE_KEY) || ''
    };
  }

  render() {
    const display = [];
    if (this.state.formula !== '') {
      localStorage.setItem(FORMULA_STORAGE_KEY, this.state.formula );
      const result = Calculator.calculate(this.state.formula);
      for (let i = 0; i < result.length; i++) {
        display.push(<ResultDisplay resultValue={result[i][0]} units={result[i][1]} key={i}/>);
      }
    }
    return (
      <span>
        <FormulaInput formula={this.state.formula} onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        {display}
      </span>
    );
  }
}

export default App;