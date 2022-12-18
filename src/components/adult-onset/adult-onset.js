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
        <div class="d-flex m-4 container-1"></div>
        <div class="d-flex m-4 container-1"></div>
      </div>
    );
  }
}
