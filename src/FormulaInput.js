import React from 'react';
import './FormulaInput.css';

class FormulaInput extends React.Component {
  render() {
    return (
        <textarea className="FormulaInput" placeholder="Enter formula here" rows="10" cols="60" data-testid="formula-text-area">
        </textarea>
    );
  }
}

export default FormulaInput;