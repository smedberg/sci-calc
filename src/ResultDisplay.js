import React from 'react';
import './ResultDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    return (
        <p className="Result" data-testid="result-display-area">
          {this.props.resultText} {this.props.units}
        </p>
    );
  }
}

export default ResultDisplay;