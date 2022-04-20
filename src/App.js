import React from 'react';
import './App.css';
import FormulaInput from './FormulaInput';
import ResultsDisplay from './ResultsDisplay';
import ConstantsDisplay from './ConstantsDisplay';
import VariablesDisplay from './VariablesDisplay';
import Calculator from './Calculator';

class App extends React.Component {
  constructor() {
    super();
    // If there was a formula in the hash when we were instantiated, use it.
    // This supports sharing of formula via sharing URL.
    const formulaFromHash = decodeURIComponent((new URL(document.URL).hash).substring(1));
    this.state = {
      formula: formulaFromHash || ''
    };

    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange, false);
  }

  onHashChange() {
    const changedFormula = decodeURIComponent((new URL(document.URL).hash).substring(1));
    this.setState({formula: changedFormula })
  }

  render() {
    let results = [];
    let variables = [];
    if (this.state.formula !== '') {

      // Store the formula into the URL hash, so that it can be shared, etc.
      const url_ob = new URL(document.URL);
      url_ob.hash = '#' + encodeURIComponent(this.state.formula);
      document.location.href = url_ob.href;

      const calculated = Calculator.calculate(this.state.formula);
      results = calculated[0];
      variables = calculated[1];
    }
    return (
      <span>
        <FormulaInput formula={this.state.formula} results={results} onChange={ changedFormula => { this.setState({formula: changedFormula }) } } />
        <ResultsDisplay results={results} />
        <VariablesDisplay variables={variables} />
        <ConstantsDisplay/>
      </span>
    );
  }
}

export default App;
