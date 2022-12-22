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
    naviage('/pharma-repo');
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
        <button class="btn btn-click align-self-end m-3"
        onClick={onVeiwReortClick}>
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
        <ul className="unsorted-pharam">
        <li>Ultra-Rapid Metabolizer: Increased enzyme activity compared to rapid metabolizers.</li>

<li>Rapid Metabolizer: Increased enzyme activity compared to normal metabolizers but less than ultrarapid metabolizers </li>

<li>Normal Metabolizer: Fully functional enzyme activity.</li>

<li>Intermediate Metabolizer: Decreased enzyme activity (activity between normal and poor me-tabolizer)</li>

<li>Poor Metabolizer: Little to no enzyme activity </li>

<li>Indeterminate: Allele contains a variant that has not yet been characterized</li>
</ul>
      </div>

      <div className="gene-table">
        <h2>
        Genes tested and variants reported
        </h2>
        <Table className="genes">
        <tbody>
        <tr>
          <td>CYP2D6</td>
          <td>*1, *2, *3, *4, *5, *6, *7, *8, *9, *10, *11, *12, *14A, *14B, *15, *17, *19, *29, *35, *41, *xN</td>
          
        </tr>
        <tr>
          <td>CYP2C19</td>
          <td>*1, *2, *3, *4A, *4B, *10, *17</td>
         
        </tr>
        <tr>
          <td>CYP3A4</td>
          <td>*1, *1B, *22</td>
         
        </tr>
        <tr>
          <td>CYP1A2</td>
          <td>*1, *1F, *1J, *1K</td>
         
        </tr>
        <tr>
          <td>CYP2C9</td>
          <td>*1, *2, *3, *4, *5, *6, *8, *11</td>
         
        </tr>
        <tr>
          <td>CYP3A5</td>
          <td>*1, *3, *6, *7</td>
         
        </tr>
        <tr>
          <td>CYP4F2</td>
          <td>*1, *3</td>
         
        </tr>
        <tr>
          <td>DPYD</td>
          <td>*1, *2A, *13</td>
         
        </tr>
        <tr>
          <td>F5</td>
          <td>rs6025 (Leiden)</td>
         
        </tr>
        <tr>
          <td>IFNL3</td>
          <td>rs12979860</td>
         
        </tr>
        <tr>
          <td>NUDT15</td>
          <td>rs116855232</td>
         
        </tr>
        <tr>
          <td>SLCO1B1</td>
          <td>rs4149056</td>
         
        </tr>
        <tr>
          <td>TPMT</td>
          <td>*1, *2, *3A, *3C, *4</td>
         
        </tr>
        <tr>
          <td>VKORC1</td>
          <td>rs9923231</td>
         
        </tr>
        </tbody>
          </Table>
        </div>
    </div>
    
  );
}