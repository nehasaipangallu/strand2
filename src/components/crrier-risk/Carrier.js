import React, { useState } from 'react';
import './Carrier.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
      <div className="carrier-report ">
        <Row>
          <Col>
            <h2>My Carrier Risk Screening Report</h2>
            <p>
              <strong>
                A thorough Analysis of 154 genes across 194 disorders associated
                with Autosomal and X-linked recessive disorders was conducted.
                Your report indicates “X” Variants of Concern.
              </strong>
            </p>
          </Col>
          <Col>
            <button
              class="btn btn-click align-self-end m-3"
              onClick={onVeiwReortClick}
            >
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
            <p className="c2">
              A test done on a person without signs or symptoms to find out
              whether he or she carries a gene for a genetic disorder. Genetic
              disorders can be caused by a mutation in one gene (monogenic), by
              mutations in multiple genes (multigenic), by a combination of gene
              mutations and environmental factors, or by damage to chromo- somes
              (Somatic).
            </p>

            <p className="c2">
              Those planning to get married or start a family, or have children
              in the same life stage, would benefit from knowing if they are
              carriers of a genetic disease
            </p>
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
        <h2 className="c2">
          What are Single Gene Disorders (Monogenic Disorders)?
        </h2>

        <div className="d-flex flex-row mb-3">
          {/* <div className="p-2"> */}
          {/* <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/genetic%201.svg?raw=true" /> */}
          
          <Row>
             <Col>
           <p className="c2">They are caused by defects in a single gene</p> 
           </Col>
          {/* </Row>  */}
          {/* </div> */}
          {/* <Row> */}
          {/* <div className="p-2"> */}
          <Col>
            <p className="c2">50% of which disorders have childhood onset</p>
            </Col>
            </Row>
            
            
            
              <Row>
              <Col>
            <p className="c2">
              400 million people are affected by 6000 single gene disorders
              globally
            </p>
            </Col>
            
            
            <Col>
            <p className="c2">
              65% of which diseases associated with a reduced lifespan and
              affect the quality of life significantly
            </p>
           
            </Col>
            </Row>

            
              <Row>
              <Col>
            <p className="c2">
              28% of neonatal intensive care deaths are caused by genetic
              diseases
            </p>
            
            </Col>
            <Col>
            <p className="c2">
              {' '}
              95% of these diseases do not have a single FDA approved treatment
            </p>
            </Col>
            </Row>
            
           
          
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
                Autosomal recessive (AR) genetic disease manifests when an
                individual inherits 2 disease-causing variants one from each
                parent, both of whom are unaffected by the disease.
              </li>

              <li>
                It is estimated that all people carry between 2-20 recessive
                gene variants.{' '}
              </li>

              <li>
                Carrier screening can identify couples at risk and provide a
                basis for genetic and reproductive counseling, which can
                drastically decrease disease incidence.{' '}
              </li>

              <li>
                Carrier screening may allow for early diagnosis of treatable
                disorders in the presymptomatic period, allowing timely
                interventions to reduce patient morbidity and improve long-term
                health outcomes.
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
        <p>
          A mutation can be present in a recessive gene on the X-chromosome.
          Since males only have one copy of the X chromosome a single mutation
          may manifest as a disease. Since females have 2 copies of the X
          chromosome the same will not manifest as a disease. However, there is
          a 50% probability that her son will carry this mutant X chromosome and
          manifest the disease. Screening for these recessive gene mutations is
          very important. There are approximately 500 disorders involving genes
          on the X chromosome.
        </p>
      </div>

      <h2>Frequency of the Most Prevalent AR/XR Disorders in India</h2>
      <div className="p-2 table-carrier">
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
                <td>Hemophilia</td>
                <td>8</td>
                <td>9600</td>
                <td>XR</td>
              </tr>
              <tr>
                <td>Muscular Dystrophy</td>
                <td>29</td>
                <td>348000</td>
                <td>Most common in DMD which is XR</td>
              </tr>
              <tr>
                <td>Fragile X syndrome</td>
                <td>15</td>
                <td>180000</td>
                <td>XR</td>
              </tr>
              <tr>
                <td>Cystinuria</td>
                <td>14</td>
                <td>168000</td>
                <td>AR</td>
              </tr>
              <tr>
                <td>Cystic fibrosis</td>
                <td>12</td>
                <td>144000</td>
                <td>AR</td>
              </tr>
              <tr>
                <td>Sickle Cell Anemia</td>
                <td>11</td>
                <td>132000</td>
                <td>AR</td>
              </tr>
              <tr>
                <td>TOTAL</td>
                <td>90</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="p-2">
        <h2>
          Why Should One Get Tested For Carrier Status For Genetic Disorders?
        </h2>
        <p>
          Genetic disorders are given low priority in India, however they are a
          major public health burden, a cause of suffering for families and a
          source of significant expenditure for parents in India. Those planning
          to get married or start a family would benefit from knowing if they
          are carriers of a genetic disease.
        </p>

        <p>
          In case of autosomal recessive disorders, if both parents are
          carriers, there is a 25% chance of the children getting affected. In
          case of X-linked recessive disorders, if the mother is a carrier,
          there is a 50% chance of the male child being affected. Therefore
          knowing this prepares parents to plan their families.
        </p>
      </div>

      <div className="cvarrier-status d-flex flex-row mb-3">
       <div className="pl-5">
          <img src="" />
       <p> Family history of a genetic disorder.</p>
        </div>

        <div  className="pl-5">
          <img src="" />
        <p>Family history of a genetic disorder.</p>
       </div>

        <div  className="pl-5">
          <img src="" />
       <p> Family history of a genetic disorder.</p>
      </div>

      </div>


      <div className="p-2 pt-5">
         <Container>
        <Row>
          <Carousel className='car-bg'>
            <Carousel.Item>
              <Row>
                <Col>
                  <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
                    <div className="p-2">
                      <img className='img-1'
                        src="/3.png"
                      />
                    </div>
                    <div className="p-5 carousel-cap">
                      <h3>Prevalence of Sickle Cell Anemia</h3>
                      <p>
                      Certain ethnic groups in India have high carrier frequency for AR Hemoglobinopathies such as Sickle cell anemia (upto 20%)6 and Thalassemias (upto 17%
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            {/* end item-1 */}

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                <div className="p-2">
                  <img className="img-1"
                    src="/1.png"
                    alt="Second slide"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Prevalence of Inborn Errors of Metabolism</h3>
                  <p>
                  5-15% of children born India annually are diagnosed with Inborn Errors of Metabolism. These biochemical disorders are AR and lead to physical and intellectual disabilities, and even death.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* end item-2 */}

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center ">
                <div className="p-2">
                  <img className="img-1"
                    src="/2.png"
                  />
                </div>

                <div className="p-5 carousel-cap">
                  <h3>Prevalence of Bleeding and Clotting Disorders</h3>
                  <p>
                  1 in 1000 people globally are affected with bleeding and clotting disorders such as Hemophilias A & B (XR). India harbors 5% of all patients suffering from these disorders. An example of such disorders being Hemophilias A & B (XR)
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* end itsem-3 */}

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                <div className="p-2">
                  <img className="img-1"
                    src="/1.png"
                    alt="Second slide"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Prevalence of Spinal Muscular Atrophy (SMA)</h3>
                  <p>
                  Spinal muscular atrophy (SMA) is an AR, progressive, neuromuscular disorder with a carrier frequency of 1 in 38 in India
                  </p>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                <div className="p-2">
                  <img className="img-1"
                    src="/1.png"
                    alt="Second slide"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Prevalence of Spinal Muscular Atrophy (SMA)</h3>
                  <p>
                  Spinal muscular atrophy (SMA) is an AR, progressive, neuromuscular disorder with a carrier frequency of 1 in 38 in India
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      {/* end car sec */}
      </div>
    </div>
  );
}
