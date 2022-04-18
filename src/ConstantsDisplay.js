import React from 'react';
import './ConstantsDisplay.css';
import {SCIPARSER_CONSTANTS} from './Calculator';

class ConstantDisplay extends React.Component {
  render() {
    return (
        <tr className="Constant">
          <td>{this.props.symbol}</td><td>{this.props.value}</td><td>{this.props.units}</td><td>{this.props.name}</td>
        </tr>
    );
  }
}

class ConstantsDisplay extends React.Component {
  render() {
    const constants = [];
    for (let i = 0; i < SCIPARSER_CONSTANTS.length; i++) {
      const constantInfo = SCIPARSER_CONSTANTS[i];
      const constantSymbol = constantInfo[0];
      const constantValue = constantInfo[1][0];
      const constantUnits = constantInfo[1][1];
      const constantName = constantInfo[2];
      constants.push(<ConstantDisplay symbol={constantSymbol} value={constantValue} units={constantUnits} name={constantName} key={constantSymbol}/>);
    }

    return (
      <span id='constants'>
        <h1>Constants</h1>
        <table data-testid="constants-display-area">
          <thead><tr>
            <th>constant</th><th>value</th><th>units</th><th>description</th>
          </tr></thead>
          <tbody>
            {constants}
          </tbody>
        </table>
      </span>
    );
  }
}

export default ConstantsDisplay;