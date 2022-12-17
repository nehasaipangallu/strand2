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
    return <div class="side-panel"></div>;
  }
}
