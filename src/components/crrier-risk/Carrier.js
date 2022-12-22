import React from 'react';
import './Carrier.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Carrier(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/carrier-risk-repo');
  }
  return (
    <div className="d-flex flex-column mb-3 ml-10 container pt-5 ps-5">
      {/* <div className="p-2 carrier-rep-box">
        <div className="d-flex flex-row mb-3">
          <div className="p-2">
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%202.svg?raw=true"
              className="carrier-img"
            />
          </div>
          <p className="p-2 carrier-para c1">
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
      </div> */}
      <div className="carrier-report">
        <Row>
          <Col>
        <h2>
        My Carrier Risk Screening Report
        </h2>
        <p><strong>A thorough Analysis of 154 genes across 194 disorders associated with Autosomal and X-linked recessive disorders was conducted. Your report indicates “X” Variants of Concern.</strong></p>
        </Col>
        <Col>
        <button class="btn btn-click align-self-end m-3"  onCLick={onVeiwReortClick}>
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
      
      <div className="p-2 carrier-risk-rep">
      <Row>
        <Col>
        <h2 className="c2">What is Carrier Risk Screening?</h2>
        <p className="c2">A test done on a person without signs or symptoms to find out whether he or she carries a gene for a genetic disorder. Genetic disorders can be caused by a mutation in one gene (monogenic), by mutations in multiple genes (multigenic), by a combination of gene mutations and environmental factors, or by damage to chromo- somes (Somatic).</p>

<p className="c2">Those planning to get married or start a family, or have children in the same life stage, would benefit from knowing if they are carriers of a genetic disease</p>
</Col>
<Col>
<img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%202.svg?raw=true"
              className="carrier-img"
            />
            </Col>
            </Row>
      </div>

      <div className="p-2 mono-disorders">
      <h2 className="c2">What are Single Gene Disorders (Monogenic Disorders)?</h2>
      <div className="d-flex flex-row mb-3">
      {/* <div className="p-2"> */}
      {/* <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/genetic%201.svg?raw=true" /> */}
        <p className="c2">They are caused by defects in a single gene</p>
        {/* </div> */}
        <div className="p-2">
       <p className="c2">50% of which disorders have childhood onset</p>
       <p className="c2">400 million people are affected by 6000 single gene disorders globally
</p>
       <p className="c2">65% of which diseases associated with a reduced lifespan and affect the quality of life significantly</p>
       <p className="c2">28% of neonatal intensive care deaths are caused by genetic diseases
 </p>
       <p className="c2"> 95% of these diseases do not have a single FDA approved treatment</p>

        </div>
      </div>
      {/* <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/dna%20(1)%201.svg?raw=true" /> */}
      {/* <div className="p-2">
      65% of which diseases associated with a reduced lifespan² and affect the quality of life significantly
      </div> */}
    </div>
    <div className="p-2 type-carrier">
      <h2>What are Autosomal Recessive Disorders (AR)?</h2>
      <Row>
        <Col>
      <ul className="unsorted-risk">
        <li>
        Autosomal recessive (AR) genetic disease manifests when an individual inherits 2 disease-causing variants one from each parent, both of whom are unaffected by the disease.</li>

<li>It is estimated that all people carry between 2-20 recessive gene variants. </li>

<li>Carrier screening can identify couples at risk and provide a basis for genetic and reproductive counseling, which can drastically decrease disease incidence. </li>

<li>Carrier screening may allow for early diagnosis of treatable disorders in the presymptomatic period, allowing timely interventions to reduce patient morbidity and improve long-term health outcomes.
          </li>
          </ul>
          </Col>

          <Col>
          <img src=" https://github.com/nehasaipangallu/strand2/blob/main/public/ill-12_en_orig%201.svg?raw=true" />
          </Col>
</Row>
      </div>
      <div className="p-2">
      <h2>What are X-linked Recessive Disorders (XR)?</h2>
      <p>A mutation can be present in a recessive gene on the X-chromosome. Since males only have one copy of the X chromosome a single mutation may manifest as a disease. Since females have 2 copies of the X chromosome the same will not manifest as a disease. However, there is a 50% probability that her son will carry this mutant X chromosome and manifest the disease. Screening for these recessive gene mutations is very important. There are approximately 500 disorders involving genes on the X chromosome.</p>
      </div>

      <h2>Frequency of the Most Prevalent AR/XR Disorders in India</h2>
      <div className="p-2 table-risk">
      
      <div className="m-4">
        
          <Table responsive="sm">
            <tbody>
              <tr>
                <td>Disease</td>
                <td>Frequency per 1000,000</td>
                <td>Total NUmbers in India</td>
                <td>Inheritance</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
      </div>
     </div>


     <div className="p-2">
       <h2>Why Should One Get Tested For Carrier Status For Genetic Disorders?</h2>
       <p>Genetic disorders are given low priority in India, however they are a major public health burden, a cause of suffering for families and a source of significant expenditure for parents in India. Those planning to get married or start a family would benefit from knowing if they are carriers of a genetic disease.</p>

<p>In case of autosomal recessive disorders, if both parents are carriers, there is a 25% chance of the children getting affected. In case of X-linked recessive disorders, if the mother is a carrier, there is a 50% chance of the male child being affected. Therefore knowing this prepares parents to plan their families.</p>
     </div>
     <div className="p-2 pt-5">
     <Carousel>
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/PX0001AS_PRESENTATION%201.svg?raw=true"
                  alt="First slide"
                  className="blood-cell"
                />
                <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/1000_F_489389817_WrTqt6EAGUZ16MO6mrkSW6K2BzFb74Nl%201.svg?raw=true" 
                classNmae ="blood-cell"/>
          
              </div>
              <div className="p-5 carousel-cap">
                <h3>Sickle Cell Anemia</h3>
                <p>
                Certain ethnic groups in India have high carrier frequency for AR Hemoglobinopathies such as Sickle cell anemia (upto 20%) and Thalassemias (upto 17%
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/cq5dam.web.1280%201.svg?raw=true"
                  alt="Second slide"
                  className="arhy-img"
                />
              </div>
              <div className="p-5 carousel-cap">
                <h3>Spinal Muscular Atrophy (SMA)</h3>
                <p>
                Spinal muscular atrophy (SMA) is an AR progressive, neuromuscular disorder with a carrier frequency of 1 in 38 in India
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
     </div>
    </div>
  );
}
