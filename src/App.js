import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultDisplay from './ResultDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: ''
    };
  }

  render() {
    let result = this.state.formula; // TODO: Parse, transform
    return (
      <span>
        <FormulaInput onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        <ResultDisplay result={result} />
      </span>
    );
  }
}

export default App;