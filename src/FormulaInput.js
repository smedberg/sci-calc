import React from 'react';
import './FormulaInput.css';

class FormulaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: props.onChange
    };
  }

  render() {
    return (
        <textarea
          value={this.props.formula}
          onChange={e => this.state.onChange(e.target.value)}
          className="FormulaInput"
          placeholder="Enter formula here, e.g.&#10;mass = 3 kg&#10;velocity = 0.5 * c&#10;momentum = mass * velocity"
          rows="10"
          data-testid="formula-text-area">
        </textarea>
    );
  }
}

export default FormulaInput;