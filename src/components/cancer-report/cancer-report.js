import React from 'react';
import './Cardio.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cardio(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/cardio-report');
  }
  return (
    <div className="d-flex flex-column mb-3 container pt-5">
      <Row className="report-cardio ">
        <Col>
          <img
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardio%20(1)%202.svg?raw=true"
            className="meta-img"
          />
        </Col>

        <Col className="para-1">
          <p className="pl-0 para-1">
            Your Report is Ready. Please click to View Report.
          </p>
        </Col>

        <Col className="para-2">
          <p className="m-2">12/11/2022</p>
          <p className="m-2">02/08/2022</p>
          <p className="m-2">20/08/2022</p>
        </Col>

        <Col>
          <button class="btn btn-report m-2" onClick={onVeiwReortClick}>
            View Report
          </button>
          <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
            View Report
          </button>
          <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
            View Report
          </button>
        </Col>
      </Row>
      <div className="p-2">
        <h2 className="cardio-class c2">Inherited Cardiac Conditions (ICC)</h2>
        <div className="d-flex flex-row mb-3 cardic-condition-box">
          <img
            class="m-2"
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/feb212285-fig-0001-m%201.svg?raw=true"
            className="cardiac-condition"
          />

          <div className="p-2 cardio-1">
            <h2>Tumor suppressor genes</h2>

            <ul>
              <li>
                Inherited cardiac conditions (ICC) is a term that covers a
                variety of relatively rare diseases of the heart.
              </li>

              <li>They are also referred to as genetic cardiac conditions.</li>
              <li>
                ICCS are caused by a fault - also known as a mutation - in one
                or more of our genes.
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
        <Carousel className="carousel-cardio">
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardiomypathies.svg?raw=true"
                  alt="First slide"
                  className="tumor-img"
                />
              </div>
              <div className="p-5 carousel-cap">
                <h3>Cardiomypathies</h3>
                <p>
                  Cardiomyopathy (kahr-dee-o-my-OP-uh-thee) is a disease of the
                  heart muscle that makes it harder for the heart to pump blood
                  to the rest of the body. Cardiomyopathy can lead to heart
                  failure. The main types of cardiomyopathy include dilated,
                  hypertrophic and restrictive cardiomyopathy.
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/Group%2048095702.svg?raw=true"
                  alt="Second slide"
                  className="arhy-img"
                />
              </div>
              <div className="p-5 carousel-cap">
                <h3>Arrhythmias</h3>
                <p>
                  A heart arrhythmia (uh-RITH-me-uh) is an irregular heartbeat.
                  Heart rhythm problems (heart arrhythmias) occur when the
                  electrical signals that coordinate the heart's beats don't
                  work properly. The faulty signaling causes the heart to beat
                  too fast (tachycardia), too slow (bradycardia) or irregularly.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        
        <div className="p-2">
          <Carousel className="carousel-cardio-2">
            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                <div className="p-2 car-img-item">
                  <img
                    src="https://github.com/nehasaipangallu/strand2/blob/main/public/AFib%203.svg?raw=true"
                    alt="First slide"
                    className="heart-2"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Eg: Familial Atrial Fibrillation</h3>
                  <p>
                    Genes Involved: BCC9, EMD, GJAS, KCNAS, KCNE2, KCNE3, KCNH2,
                    KCNJ2, KCNJ5, KCNQ1, LMNA, NPPA, NUP155, SCN18, SCN2B,
                    SCN3B, SCN5A.
                  </p>
                  <p>
                    Familial atrial fibrillation is an inherited abnormality of
                    the heart's normal rhythm. Atrial fibrillation is character-
                    ized by episodes of uncoordinated electrical activity
                    (fibrillation) in the heart's upper chambers (the atria),
                    which cause a fast and irregular heartbeat.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
                <div className="p-2 car-img-item">
                  <img
                    src="https://github.com/nehasaipangallu/strand2/blob/main/public/AFib%202.svg?raw=true"
                    alt="Second slide"
                    className="heart-img"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Eg: Hypertrophic cardiomyopathy </h3>
                  <p>
                    Genes Involved: ACE, ACTC1, ACTN2, AGT, ANKRD1, CASQ2,
                    COX15, CSRP3, DES, FXN, GLA, LAMP2, MYBPC3, MYH6, MYH7,
                    MYL2, MYL3, MYLK2, MY06, MYOM1, MYOZZ, NDUFAF1, NEXN, OBSCN,
                    PDLIM3, PLN, PRKAG2, RAF1, SLC25A4, SRI, TCAP, TNNC1, TNNI3,
                    TNNT2, TPM1, TTN, TTR.
                  </p>
                  <p>
                    Condition: Hypertrophic cardiomyopathy (HCM) is a disease in
                    which the heart muscle becomes thickened (hypertrophied).
                    The thickened heart muscle can make it harder for the heart
                    to pump blood. Hypertrophic cardiomyopathy often goes
                    undiagnosed because many people with the disease have few,
                    if any, symptoms.{' '}
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
