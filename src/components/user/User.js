import React from 'react';
import './User.css';

export default class User extends React.Component {
  render() {
    return (
      <div class="user-page d-flex justify-content-center align-items-center">
        <div class="user-background  d-flex flex-column justify-content-center align-items-center">
          <h3> Please Select User</h3>
          <button
          className="btn user-name-btn" 
          onClick={(e) => {
            e.preventDefault();
            window.location.href='#/dashboard';
            }}
            >Virat</button>
          <button class="btn user-name-btn"
           onClick={(e) => {
            e.preventDefault();
            window.location.href='#/dashboard';
            }}
          >Hardik</button>
          <button class="btn user-name-btn"
           onClick={(e) => {
            e.preventDefault();
            window.location.href='#/dashboard';
            }}>Dhoni</button>
        </div>
      </div>
    );
  }
}
