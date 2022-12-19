import React from 'react';
import './User.css';

export default class User extends React.Component {
  constructor(props) {
    super();
    props.onLoad(false);
  }
  render() {
    return (
      <div class="user-page d-flex justify-content-center align-items-center">
        <div class="user-background  d-flex flex-column justify-content-center align-items-center">
          <h3 className="use-heading"> Please Select User</h3>
          <button
            className="btn user-name-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '#/adult-onset';
            }}
          >
            Virat
          </button>
          <button
            class="btn user-name-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '#/adult-onset';
            }}
          >
            Hardik
          </button>
          <button
            class="btn user-name-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '#/adult-onset';
            }}
          >
            Dhoni
          </button>
        </div>
      </div>
    );
  }
}
