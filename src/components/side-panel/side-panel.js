import React, { useEffect } from 'react';
import './side-panel.css';

export default class Sidepanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  useEffect = () => {
    alert('hello');
  };
  render() {
    return (
      <div class="side-panel">
        <div class="d-flex align-items-center flex-column m-4">
          <h3 class="side-panel-heading">Know your Report</h3>
          <input type="text" class="search-text" />
          <h2 class="heading">BRCA1</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy take a type specimen book.</p>
          <h2 class="heading-2">Articles</h2>
          <p>BRCA1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    );
  }
}
