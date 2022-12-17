import React from 'react';
import './adult-onset.css';

export default class AdultOnset extends React.Component {
  constructor() {
    super();
    this.state = {};
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
