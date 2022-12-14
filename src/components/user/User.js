import React from 'react';
import './User.css';

export default class User extends React.Component {
  render() {
    return (
      <div class="user-page d-flex justify-content-center align-items-center">
        <div class="user-background  d-flex flex-column justify-content-center align-items-center">
          <h3> Please Select User</h3>
          <button class="btn user-name-btn">Virat</button>
          <button class="btn user-name-btn">Hardik</button>
          <button class="btn user-name-btn">Dhoni</button>
        </div>
      </div>
    );
  }
}
