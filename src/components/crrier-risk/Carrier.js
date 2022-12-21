import React from 'react';
import './Carrier.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

export default function Carrier(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/crrier-risk');
  }
  return (
    <div className="d-flex flex-column mb-3 container pt-5">
      <div className="p-2 carrier-rep-box">
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
      </div>
      <div className="p-2 carrier-risk-rep">
        <h2 className="c2">What is Carrier Risk Screening?</h2>
        <p className="c2">A test done on a person without signs or symptoms to find out whether he or she carries a gene for a genetic disorder. Genetic disorders can be caused by a mutation in one gene (monogenic), by mutations in multiple genes (multigenic), by a combination of gene mutations and environmental factors, or by damage to chromo- somes (Somatic).</p>

<p className="c2">Those planning to get married or start a family, or have children in the same life stage, would benefit from knowing if they are carriers of a genetic disease</p>
      </div>
      <div className="p-2 mono-disorders">
      <h2 className="c2">What are Single Gene Disorders (Monogenic Disorders)?</h2>
      <div className="d-flex flex-row mb-3">
      {/* <div className="p-2"> */}
      {/* <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/genetic%201.svg?raw=true" /> */}
        <p>They are caused by defects in a single gene</p>
        {/* </div> */}
        <div className="p-2">
       <p>50% of which disorders have childhood onset</p>
        </div>
      </div>
      {/* <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/dna%20(1)%201.svg?raw=true" /> */}
      {/* <div className="p-2">
      65% of which diseases associated with a reduced lifespan² and affect the quality of life significantly
      </div> */}
    </div>
    <div className="p-2 type-carrier">
      <h1 className ="type-head c2">
      Types of carrier risk disorder
      </h1>
      <div className="d-flex flex-row mb-3">
        <div className="ar-disorder">
          <h4 className="ar-head p-6">A R Disorders</h4>
          <p className="para-car">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="ar-disorder-2">
          <h4 className="ar-head-2">X-linked Disorders</h4>
          <p className="para-car">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      </div>
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
