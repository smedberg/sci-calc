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
    const variables = [];
    const currentVariables = this.props.variables;
    const currentVariableNames = [...currentVariables.keys()].sort();
    for (let i = 0; i < currentVariableNames.length; i++) {
      const variableKey = currentVariableNames[i];
      const variableInfo = currentVariables.get(variableKey);
      const variableValue = variableInfo[0];
      const variableUnits = variableInfo[1];
      variables.push(<VariableDisplay symbol={variableKey} value={variableValue} units={variableUnits} key={variableKey}/>);
    }

    return (
      <div>
        Variables:
        <table data-testid="variables-display-area">
          <thead><tr>
            <th>name</th><th>value</th><th>units</th>
          </tr></thead>
          <tbody>
            {variables}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VariablesDisplay;