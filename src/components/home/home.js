import React from 'react';
import './home.css';

export default function Home(props) {
  props.onLoad(false);
  
  function onViewInsightClick(e) {
    e.preventDefault();
    if (localStorage.getItem('isLoggedin') == 'true') {
      window.location.href = '#/adult-onset';
    } else {
      window.location.href = '#/login';
    }
  }

  return (
    <div className="home-page d-flex justify-content-end align-items-center">
      <div className="home-page-container">
        <h2 className="para-heading"> Get Health Insights Right</h2>
        <p className="para">
          Vivamus elementum dictum augue at fermentum. Proin non nisi at quam
          sollicitudin consectetur. Suspendisse tempus at diam at volutpat.
          Donec sit amet dui malesuada, tincidunt sem sed, tincidunt justo.
        </p>
        <button className="btn btn-view" onClick={onViewInsightClick}>
          {' '}
          View Insights
        </button>
      </div>
    </div>
  );
}
