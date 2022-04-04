import React from 'react';
import './ResultDisplay.css';

class ResultDisplay extends React.Component {
  render() {
    return (
        <p className="Result" data-testid="result-display-area">
          Results displayed here
        </p>
    );
  }
}

export default ResultDisplay;