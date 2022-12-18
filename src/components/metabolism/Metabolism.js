import React from 'react';
import './Cardio.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function Metabolism(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/metabolism');
  }
  return (
    <div className="d-flex flex-column mb-3">
    <div className="p-2 cardio-rep-box">
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardio%20(1)%202.svg?raw=true" 
          className= "cardio-img"/>
        </div>
        <p className="p-2">
          Your Report is Ready. Please click to View Report.
        </p>
        <div className=" d-flex flex-column report-dates align-self-center">
          <p className="m-2">12/11/2022</p>
          <p className="m-2">02/08/2022</p>
          <p className="m-2">20/08/2022</p>
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
    <div className="p-2">
      <h2>Inherited Cardiac Conditions (ICC)</h2>
      <div className="d-flex flex-row mb-3 cardic-condition-box">
        <img
          class="m-2"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/feb212285-fig-0001-m%201.svg?raw=true"
          className ="cardiac-condition"
        />
       
       <div className="p-2">
         <h2>Tumor suppressor genes</h2>

        <ul>
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
            These conditions do not always have symptoms, so you can be
            unaware you have the conditions.
          </li>

          <li>
            However, great improvements are being made in the detection of
            ICCs and also how you can live with your condition. There are
            effective treatments which allow you to lead a normal life.
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div className="p-2">
    <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
            <div className="p-2 car-img-item">
              <img
                src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12495-300%202.svg?raw=true"
                alt="First slide"
              />
            </div>
            <div className="p-5 carousel-cap">
              <h3>Tumor suppressor genes</h3>
              <p>
                These are protective genes under normal circumstances, and
                they limit cell growth. When a tumor suppressor gene mutates,
                control on cell growth is lost, resulting in the formation of
                a tumor. Examples of tumor suppres sor genes include BRCA1,
                BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2
                genes increase a wom ar's risk of developing hereditary breast
                or ovarian cancers and a man's risk of developing hereditary
                prostate or breast cancers. They also increase the risk of
                pancreatic cancer and melanoma in women and men.
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
            <div className="p-2 car-img-item">
              <img
                src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12494-150%202.svg?raw=true"
                alt="Second slide"
              />
            </div>
            <div className="p-5 carousel-cap">
              <h3>Oncogenes</h3>
              <p>
                These genes actively turn a healthy cell into a cancerous cell
                Mutations in these genes are NOT known to be inherited.
              </p>
            </div>
          </div>
        </Carousel.Item>
        </Carousel>
        <div className="p-2">
        <Carousel>
        <Carousel.Item>
          <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
            <div className="p-2 car-img-item">
              <img
                src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12495-300%202.svg?raw=true"
                alt="First slide"
              />
            </div>
            <div className="p-5 carousel-cap">
              <h3>Tumor suppressor genes</h3>
              <p>
                These are protective genes under normal circumstances, and
                they limit cell growth. When a tumor suppressor gene mutates,
                control on cell growth is lost, resulting in the formation of
                a tumor. Examples of tumor suppres sor genes include BRCA1,
                BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2
                genes increase a wom ar's risk of developing hereditary breast
                or ovarian cancers and a man's risk of developing hereditary
                prostate or breast cancers. They also increase the risk of
                pancreatic cancer and melanoma in women and men.
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
            <div className="p-2 car-img-item">
              <img
                src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12494-150%202.svg?raw=true"
                alt="Second slide"
              />
            </div>
            <div className="p-5 carousel-cap">
              <h3>Oncogenes</h3>
              <p>
                These genes actively turn a healthy cell into a cancerous cell
                Mutations in these genes are NOT known to be inherited.
              </p>
            </div>
          </div>
        </Carousel.Item>
        </Carousel>

        </div>

    </div>
    </div>
  );
}