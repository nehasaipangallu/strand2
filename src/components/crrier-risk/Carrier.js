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
              className="carrier-img"
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
      <div className="p-2 carrier-risk-rep">
        <h2>What is Carrier Risk Screening?</h2>
        <p>A test done on a person without signs or symptoms to find out whether he or she carries a gene for a genetic disorder. Genetic disorders can be caused by a mutation in one gene (monogenic), by mutations in multiple genes (multigenic), by a combination of gene mutations and environmental factors, or by damage to chromo- somes (Somatic).</p>

<p>Those planning to get married or start a family, or have children in the same life stage, would benefit from knowing if they are carriers of a genetic disease</p>
      </div>
      <div className="p-2 mono-disorders">
      <h2>What are Single Gene Disorders (Monogenic Disorders)?</h2>
      <div className="d-flex flex-row mb-3">
      {/* <div className="p-2"> */}
      <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/genetic%201.svg?raw=true" />
        <p>They are caused by defects in a single gene</p>
        {/* </div> */}
        <div className="p-2">
       <p>50% of which disorders have childhood onset</p>
        </div>
      </div>
    </div>
    </div>
  );
}
