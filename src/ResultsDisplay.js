import React from 'react';
import './ResultsDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    let resultValue = this.props.resultValue;
    if (!isNaN(resultValue) && '' !== resultValue) {
      resultValue = resultValue.toExponential();
    }
    return (
        <tr className="Result">
          <td>{this.props.index + 1}</td><td>{resultValue}</td><td>{this.props.units}</td>
        </tr>
    );
  }
}

class ResultsDisplay extends React.Component {
  render() {
    const results = this.props.results;

    if (0 === results.length) {
      return (<span />);
    }

    const resultsDisplays = [];

    for (let i = 0; i < results.length; i++) {
      resultsDisplays.push(<ResultDisplay index={i} resultValue={results[i][0]} units={results[i][1]} key={i}/>);
    }


    return (
      <div  id='results' data-testid="results-display-area">
        <h1>Results</h1>
        <table>
          <thead><tr>
            <th>row</th><th>value</th><th>units</th>
          </tr></thead>
          <tbody>
            {resultsDisplays}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultsDisplay;