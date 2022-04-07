import React from 'react';
import './ConstantsDisplay.css';

class ConstantDisplay extends React.Component {
  render() {
    return (
        <tr className="Constant">
          <td>{this.props.symbol}</td><td>=</td><td>{this.props.value}</td><td>{this.props.units}</td>
        </tr>
    );
  }
}

class ConstantsDisplay extends React.Component {
  render() {
    const constants = [];
    const currentConstants = this.props.constants;
    const currentConstantNames = [...currentConstants.keys()].sort();
    for (let i = 0; i < currentConstantNames.length; i++) {
      const constantKey = currentConstantNames[i];
      const constantInfo = currentConstants.get(constantKey);
      const constantValue = constantInfo[0];
      const constantUnits = constantInfo[1];
      constants.push(<ConstantDisplay symbol={constantKey} value={constantValue} units={constantUnits} key={i}/>);
    }

    return (
      <div>
        Constants:
        <table data-testid="constants-display-area">
          <thead><tr>
            <th colSpan="2">Symbol</th><th>value</th><th>units</th>
          </tr></thead>
          <tbody>
            {constants}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConstantsDisplay;