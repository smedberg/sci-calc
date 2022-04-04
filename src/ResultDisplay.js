import React from 'react';
import './ResultDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    return (
        <p className="Result" data-testid="result-display-area">
          {this.props.result}
        </p>
    );
  }
}

export default ResultDisplay;