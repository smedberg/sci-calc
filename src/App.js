import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultDisplay from './ResultDisplay';
import Calculator from './Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: ''
    };
  }

  render() {
    var resultText = '', units = '';
    if (this.state.formula != '') {
      try {
        const result = Calculator.calculate(this.state.formula);
        console.log("Calculator result: ", result);
        resultText = result[0];
        units = result[1];
      } catch(error) {
        console.log(error);
        resultText = error.message;
        units = '';
      }
    }
    return (
      <span>
        <FormulaInput onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        <ResultDisplay resultText={resultText} units={units} />
      </span>
    );
  }
}

export default App;