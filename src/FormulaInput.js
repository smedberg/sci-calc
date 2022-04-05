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
          value={this.state.body}
          onChange={e => this.state.onChange(e.target.value)}
          className="FormulaInput"
          placeholder="Enter formula here, e.g.&#10;momentum = 4 kg * 3 m/s&#10;3 * momentum"
          rows="10"
          data-testid="formula-text-area">
        </textarea>
    );
  }
}

export default FormulaInput;