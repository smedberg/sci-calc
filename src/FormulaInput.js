import React from 'react';
import './FormulaInput.css';

class FormulaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: props.onChange
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onScrollChange = this.onScrollChange.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.lineNumberingRef= React.createRef();
    this.formulaRef= React.createRef();
  }

  onTextChange(event) {
    this.state.onChange(event.target.value);
  }

  onScrollChange() {
    this.lineNumberingRef.current.scrollTop = this.formulaRef.current.scrollTop;
  }

  onMouseUp(event) {
    this.lineNumberingRef.current.style.height = event.target.clientHeight + 'px';
  }

  render() {
    let numLines = this.props.formula.split(/\r|\r\n|\n/).length;
    const counts = [];
    for (let i = 0; i < numLines; i++) {
      counts.push((i + 1).toString());
    }
    let countsText = counts.join('\n');

    return (
        <span>
          <textarea
            value={countsText}
            className="LineNumbering"
            rows="10"
            cols="2"
            wrap="off"
            readOnly
            ref={this.lineNumberingRef} />
          <textarea
            value={this.props.formula}
            onChange={e => this.onTextChange(e)}
            onScroll={e => this.onScrollChange(e)}
            onMouseUp={e => this.onMouseUp(e)}
            className="FormulaInput"
            placeholder="Enter formula here, e.g.&#10;mass = 3 kg&#10;velocity = 4 m/s&#10;jouleConv = 1 (kg*(m/s)^2)/joule&#10;energy = 1/2 * mass * velocity^2 / jouleConv"
            rows="10"
            nowrap="nowrap"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            wrap="off"
            data-testid="formula-text-area"
            ref={this.formulaRef} />
        </span>
    );
  }
}

export default FormulaInput;