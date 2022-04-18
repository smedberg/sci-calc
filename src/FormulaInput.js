import React from 'react';
import './FormulaInput.css';

class FormulaInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: props.onChange
    };

    this.resultsRef= React.createRef();
    this.formulaRef= React.createRef();
  }

  onTextChange(event) {
    this.state.onChange(event.target.value);
  }

  onScrollChange() {
    this.resultsRef.current.scrollTop = this.formulaRef.current.scrollTop;
  }

  componentDidMount() {
    // const formulaInput = this;
    const resultsRef = this.resultsRef;
    // Observe resize events on the input textarea, and resize the output
    // textarea to match.
    // Test env doesn't have a ResizeObserver :(
    if (typeof(ResizeObserver) !== 'undefined') {
      const resizeOb = new ResizeObserver(function(entries) {
        // We're observing one element, but entries is an array- grab the first
        // item
        resultsRef.current.style.height = entries[0].contentRect.height + 'px';
      });

      // start observing for resize of the formula input
      resizeOb.observe(this.formulaRef.current);
    }
  }

  render() {
    let results = [];
    for (let i = 0; i < this.props.results.length; i++) {
      results.push(this.props.results[i][0] + ' ' + this.props.results[i][1]);
    }
    let countsText = results.join('\n');

    return (
        <div className="InputAndResults" data-testid="formula-input">
          <textarea
            value={this.props.formula}
            onChange={e => this.onTextChange(e)}
            onScroll={e => this.onScrollChange(e)}
            className="FormulaInput"
            placeholder="Enter formula here, e.g.&#10;mass = 3 kg&#10;velocity = 4 m/s&#10;jouleConv = 1 (kg*(m/s)^2)/joule&#10;energy = 1/2 * mass * velocity^2 / jouleConv"
            rows="10"
            nowrap="nowrap"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            wrap="off"
            data-testid="formula-text-area"
            ref={this.formulaRef} />
          <textarea
            value={countsText}
            className="Results"
            rows="10"
            wrap="off"
            readOnly
            ref={this.resultsRef} />
        </div>
    );
  }
}

export default FormulaInput;