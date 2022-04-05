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
    const display = [];
    if (this.state.formula != '') {
      const result = Calculator.calculate(this.state.formula);
      for (let i = 0; i < result.length; i++) {
        display.push(<ResultDisplay resultText={result[i][0]} units={result[i][1]} />);
      }
    }
    return (
      <span>
        <FormulaInput onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        {display}
      </span>
    );
  }
}

export default App;