import React from 'react';
import './Cardio.js';
import { Link, useNavigate } from 'react-router-dom';

export default function Cardio() {
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/cardio');
  }
  <div className="d-flex flex-column mb-3">
    <div className="p-2 cardio-rep-box">
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardio%20(1)%202.svg?raw=true" />
        </div>
        <p className="p-2">
          Your Report is Ready. Please click to View Report.
        </p>
        <div class=" d-flex flex-column report-dates align-self-center">
          <p class="m-2">12/11/2022</p>
          <p class="m-2">02/08/2022</p>
        </div>
        <div class="d-flex flex-column report-buttons align-self-center">
          <button class="btn btn-report m-2" onClick={onVeiwReortClick}>
            View Report
          </button>
          <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
            View Report
          </button>
        </div>
      </div>
    </div>
    <div className="p-2">
      <h2>Inherited Cardiac Conditions (ICC)</h2>
      <div className="d-flex flex-row mb-3 cardic-condition-box">
        <img
          class="m-2"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/feb212285-fig-0001-m%201.svg?raw=true"
        />
        <h2>Tumor suppressor genes</h2>
        <ul class="m-2">
          <li>
            Inherited cardiac conditions (ICC) is a term that covers a variety
            of relatively rare diseases of the heart.
          </li>

          <li>They are also referred to as genetic cardiac conditions.</li>
          <li>
            ICCS are caused by a fault - also known as a mutation - in one or
            more of our genes.
          </li>

          <li>
            If someone has a faulty gene, there's a 50/50 chance it can be
            passed on to your children.
          </li>

          <li>
            These conditions can - in some cases - become life-threatening.
          </li>

          <li>
            These conditions do not always have symptoms, so you can be unaware
            you have the conditions.
          </li>

          <li>
            However, great improvements are being made in the detection of ICCs
            and also how you can live with your condition. There are effective
            treatments which allow you to lead a normal life.
          </li>
        </ul>
      </div>
    </div>
    <div className="p-2">Flex item 3</div>
  </div>;
}
