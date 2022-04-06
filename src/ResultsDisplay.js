import React from 'react';
import './ResultsDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    let resultValue = this.props.resultValue;
    if (!isNaN(resultValue) && '' !== resultValue) {
      resultValue = resultValue.toExponential();
    }
    return (
        <p className="Result" data-testid="result-display-area">
          {resultValue} {this.props.units}
        </p>
    );
  }
}

class ResultsDisplay extends React.Component {
  render() {

    const display = [];

    const results = this.props.results;
    for (let i = 0; i < results.length; i++) {
      display.push(<ResultDisplay resultValue={results[i][0]} units={results[i][1]} key={i}/>);
    }


    return (
      <div data-testid="results-display-area">
        Results:
        {display}
      </div>
    );
  }
}

export default ResultsDisplay;