import React from 'react';
import './ResultDisplay.css';

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

export default ResultDisplay;