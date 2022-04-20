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

    if (0 === variables.length) {
      return (<span />);
    }

    const variableDisplays = [];
    for (let i = 0; i < variables.length; i++) {
      const variable = variables[i];
      const variableKey = variable[0];
      const variableInfo = variable[1];
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