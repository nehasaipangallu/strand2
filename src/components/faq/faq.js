import React from 'react';
import './faq.css';

export default class Faq extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class="faq-containers m-4">
        <div class="p-5">
          <h2 class="faq-heading">FAQ</h2>
          <div class="d-flex justify-content-between header"></div>
        </div>
      </div>
    );
  }
}
