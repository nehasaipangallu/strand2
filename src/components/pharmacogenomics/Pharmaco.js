import React from 'react';
import './Pharmaco.css'
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function pharmaco(props){
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/pharmacogenomis');
  }
  return(
    <div className="d-flex flex-column mb-3 container pt-5">
       <div className="carrier-report">
        <Row>
          <Col>
        <h2>
        Pharmacogenomics (PGx) Report
        </h2>
        <p><strong>A thorough Analysis of 14 genes and 190 drugs was conducted. Your detailed report is provided.</strong></p>
        </Col>
        <Col>
        <button class="btn btn-click align-self-end m-3">
        Click Here For Your Report{' '}
        {/* <img
          alt=""
          class="icon-download"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/download.svg?raw=true"
        /> */}
      </button>
      </Col>
      </Row>
      </div>
      
      <div className="p-2 Pharmaco-rep">
      <Row>
        <Col>
        <h2 className="c2">What is Pharmacogenomics(PGX)?</h2>
        <p className="c2">Pharmacogenomics (PGx) is a field of research that studies how a person’s genes affect how he or she responds to medications. Its long-term goal is to help doctors select the drugs and doses best suited for each person.</p>

{/* <p className="c2">Those planning to get married or start a family, or have children in the same life stage, would benefit from knowing if they are carriers of a genetic disease</p> */}
</Col>
<Col>
<img
              src=""
              className="carrier-img"
            />
            </Col>
            </Row>
      </div>
      
      <div className="">
      <h2> Benifits of PGX</h2>
      <p>Severe drug reactions cause several hundreds of thousands of hospitalizations each year.</p>
      <Row>
        <Col>
       <p> Pharmacogenomics may prevent hospitalisations due to a dverse drug reactions by identifying patients at risk.</p>
        </Col>
        <Col>
        <p>It may improve health care costs and efficiency</p>
        </Col>
        <Col>
        <p>Pharmacogenomics may help find appropriate medications and doses quicker.</p>

        </Col>
        </Row>
      </div>
     
      <div className="">
      <h2>Facts</h2>
      <ul className="pharma-list">
        <li>90-99% of the population has at least one actionable variant in an established pharmacogenomics (PGx) gene.</li>

<li>An estimated 64.8% of medical home patients in the United States would have been exposed to a medication with a known PGx-association within a 5 year period.</li>

<li>Variations in PGx genes can influence the absorption, distribution, metabolism and/or excretion of certain medications, leading to variations in efficacy or risk of side-effects.</li>
      </ul>
      </div>

      <div className="">
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col></Col>
          </Row>
      </div>
      <div className="">
        <h2>Key terms in the results</h2>
        <p>Ultra-Rapid Metabolizer: Increased enzyme activity compared to rapid metabolizers.</p>

<p>Rapid Metabolizer: Increased enzyme activity compared to normal metabolizers but less than ultrarapid metabolizers </p>

<p>Normal Metabolizer: Fully functional enzyme activity.</p>

<p>Intermediate Metabolizer: Decreased enzyme activity (activity between normal and poor me-tabolizer)</p>

<p>Poor Metabolizer: Little to no enzyme activity </p>

<p>Indeterminate: Allele contains a variant that has not yet been characterized</p>
      </div>
    </div>
    
  )
}