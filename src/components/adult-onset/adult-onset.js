import React from 'react';
import './adult-onset.css';

export default class AdultOnset extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    props.onLoad(true);
  }

  onVeiwReortClick = () => {};

  render() {
    return (
      <div class="adult-onset">
        <div class="d-flex justify-content-end align-items-center adult-img-container">
          <img
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/Group%2048095784.svg?raw=true"
            className="flow-img m-4"
          />
        </div>
        <div class="d-flex adult-route-container">
        <h4>Adult Onset</h4>
          <div class="route-row-1 d-flex flex-row justify-content-center">
            
            <div class="row-1-card m-3">
              <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cancer.svg?raw=true" />
              <h3>Cancer</h3>
              <button
                class="btn btn-report m-2"
                onClick={this.onVeiwReortClick}
              >
                View Report
              </button>
            </div>
            <div class="row-1-card m-3">
              <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardio.svg?raw=true" />
              <h3>Cardio</h3>
              <button
                class="btn btn-report m-2"
                onClick={this.onVeiwReortClick}
              >
                View Report
              </button>
            </div>
            <div class="row-1-card m-3">
              <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/metabolism.svg?raw=true" />
              <h3>Metabolic</h3>
              <button
                class="btn btn-report m-2"
                onClick={this.onVeiwReortClick}
              >
                View Report
              </button>
            </div>
          </div>
          <div class="route-row-2"></div>
        </div>
      </div>
    );
  }
}
