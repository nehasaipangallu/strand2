import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div class="home-page d-flex justify-content-end align-items-center">
      <div class="home-page-container">
        <h3> Get Health Insights Right</h3>
        <p class="para">
          Vivamus elementum dictum augue at fermentum. Proin non nisi at quam
          sollicitudin consectetur. Suspendisse tempus at diam at volutpat.
          Donec sit amet dui malesuada, tincidunt sem sed, tincidunt justo.
        </p>
        <button className="btn btn-view"> View Insights</button>
      </div>
    </div>
  );
}
