import React from 'react';
import './ResultsDisplay.css';

class ResultsDisplay extends React.Component {
  render() {
    const results = this.props.results;

    let result = null;
    // Display the last result- either a calculated value or
    // an error.  Do not display blank lines, comments, etc.
    for (let i = results.length - 1; i >= 0; i--) {
      if (typeof(results[i][0]) =='number' || results[i][2] !== null) {
        result = results[i];
        break;
      }
    }

    if (result === null) {
      return (<span />);
    }

    let valueClass = 'value';
    if (result[2] !== null) {
      // There is an error
      valueClass = 'error';
    }
    return (
      <div  id='results' data-testid="results-display-area">
        <span className={valueClass}>{result[0]} {result[1]}</span>
      </div>
    );
  }
}

export default ResultsDisplay;