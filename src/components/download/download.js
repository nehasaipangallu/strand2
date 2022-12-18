import React from 'react';
import './download.css';

export default class Download extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    props.onLoad(true);
  }

  render() {
    return (
      <div class="download-container m-3">
        <table class="table download-table">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>Health Insights</th>
              <th style={{ width: '20%' }}>Sample Collection Date</th>
              <th style={{ width: '15%' }}>Report Date</th>
              <th style={{ width: '15%' }}>Report Status</th>
              <th style={{ width: '15%' }}>View Report</th>
              <th style={{ width: '15%' }}>Download Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cancer</td>
              <td>12/08/2022</td>
              <td>20/08/2022</td>
              <td>Positive</td>
              <td class="icon-report">
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/report%20orange.svg?raw=true"
                />
              </td>
              <td class="icon-download">
                {' '}
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/download%20orange.svg?raw=true"
                />
              </td>
            </tr>
            <tr>
              <td>Cardio</td>
              <td>12/08/2022</td>
              <td>20/08/2022</td>
              <td>Negative</td>
              <td class="icon-report">
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/report%20orange.svg?raw=true"
                />
              </td>
              <td class="icon-download">
                {' '}
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/download%20orange.svg?raw=true"
                />
              </td>
            </tr>
            <tr>
              <td>Carrier Risk</td>
              <td>20/06/2022</td>
              <td>28/06/2022</td>
              <td>Positive</td>
              <td class="icon-report">
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/report%20orange.svg?raw=true"
                />
              </td>
              <td class="icon-download">
                <img
                  alt=""
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/download%20orange.svg?raw=true"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
