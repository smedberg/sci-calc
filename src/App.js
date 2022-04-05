import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultDisplay from './ResultDisplay';
import parse from './SciGrammer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formula: ''
    };
  }

  render() {
    var resultText, units;
    try {
      const parsed = parse.parse(this.state.formula);
      resultText = parsed[0];
      units = parsed[1];
    } catch(error) {
      console.log(error);
      resultText = error.message;
      units = '';
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