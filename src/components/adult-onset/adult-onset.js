import React from 'react';
import './adult-onset.css';

export default class AdultOnset extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    props.onLoad(true);
  }

  render() {
    return (
      <div class="adult-onset">
        <div class="d-flex justify-content-center align-items-center adult-img-container">
          <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/Group%2048095784.svg?raw=true"
          className="flow-img" />
        </div>
       
      </div>
    );
  }
}
