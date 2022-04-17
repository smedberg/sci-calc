import React from 'react';
import './ResultsDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    let resultValue = this.props.resultValue;
    if (!isNaN(resultValue) && '' !== resultValue) {
      resultValue = resultValue.toExponential();
    }
    return (
        <li className="Result" data-testid="result-display-area">
          {resultValue} {this.props.units}
        </li>
    );
  }
}

class ResultsDisplay extends React.Component {
  render() {
    const results = this.props.results;

    if (0 === results.length) {
      return (<span />);
    }

    const display = [];

    for (let i = 0; i < results.length; i++) {
      display.push(<ResultDisplay resultValue={results[i][0]} units={results[i][1]} key={i}/>);
    }


    return (
      <div data-testid="results-display-area">
        <h1>Calculations</h1>
        <ul>
          {display}
        </ul>
      </div>
    );
  }
}

export default ResultsDisplay;