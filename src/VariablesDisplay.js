import React from 'react';
import './VariablesDisplay.css';

class VariableDisplay extends React.Component {
  render() {
    return (
        <tr className="Variable">
          <td>{this.props.symbol}</td><td>{this.props.value}</td><td>{this.props.units}</td>
        </tr>
    );
  }
}

class VariablesDisplay extends React.Component {
  render() {
    const variables = this.props.variables;

    if (0 === variables.size) {
      return (<span />);
    }

    const variableDisplays = [];
    const variableNames = [...variables.keys()].sort();
    for (let i = 0; i < variableNames.length; i++) {
      const variableKey = variableNames[i];
      const variableInfo = variables.get(variableKey);
      const variableValue = variableInfo[0];
      const variableUnits = variableInfo[1];
      variableDisplays.push(<VariableDisplay symbol={variableKey} value={variableValue} units={variableUnits} key={variableKey}/>);
    }

    return (
      <span id='variables'>
        <h1>Variables</h1>
        <table data-testid="variables-display-area">
          <thead><tr>
            <th>name</th><th>value</th><th>units</th>
          </tr></thead>
          <tbody>
            {variableDisplays}
          </tbody>
        </table>
      </span>
    );
  }
}

export default VariablesDisplay;