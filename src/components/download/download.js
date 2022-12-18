import React from 'react';
import './download.css';

export default class Download extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="download-container m-3">
        <table class="table download-table">
          <thead>
            <tr>
              <th scope="col">Health Insights</th>
              <th scope="col">Sample Collection Date</th>
              <th scope="col">Report Date</th>
              <th scope="col">Report Status</th>
              <th scope="col">View Report</th>
              <th scope="col">Download Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cancer</td>
              <td>12/08/2022</td>
              <td>20/08/2022</td>
              <td>Positive</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Cardio</td>
              <td>12/08/2022</td>
              <td>20/08/2022</td>
              <td>Negative</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Carrier Risk</td>
              <td>20/06/2022</td>
              <td>28/06/2022</td>
              <td>Positive</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
