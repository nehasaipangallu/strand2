import React from 'react';
import './Carrier.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Carrier(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/crrier-risk');
  }
  return (
    <div className="d-flex flex-column mb-3">
      <div className="p-2 cardio-rep-box">
        <div className="d-flex flex-row mb-3">
          <div className="p-2">
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%202.svg?raw=true"
              className="cardio-img"
            />
          </div>
          <p className="p-2">
            Your Report is Ready. Please click to View Report.
          </p>
          <div className=" d-flex flex-column report-dates align-self-center">
            <p className="m-2">12/11/2022</p>
            <p className="m-2">02/08/2022</p>
            <p className="m-2">20/08/2022</p>
          </div>
        </div>
        <div class="d-flex flex-column report-buttons align-self-center">
          <button class="btn btn-report m-2" onClick={onVeiwReortClick}>
            View Report
          </button>
          <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
            View Report
          </button>
          <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
            View Report
          </button>
        </div>
      </div>
    </div>
  );
}
