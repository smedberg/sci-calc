import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div id='footer' data-testid='footer-display-area'>
        <a href='https://github.com/smedberg/sci-calc/issues/new' target='_blank'>Feedback</a>
      </div>
    );
  }
}

export default Footer;
