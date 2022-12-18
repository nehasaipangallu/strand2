import React from 'react';
import './articles.css';

export default class Articles extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    props.onLoad(true);
  }
  render() {
    return (
      <div class="articles-container m-3">
        <div class="p-5">
          <div class="d-flex justify-content-between header">
            <h1 class="header-text">All Articles</h1>
            <div class="search-container">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
