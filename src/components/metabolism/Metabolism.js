import React from 'react';
import './Metabolism.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Metabolism(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/metabolic-report');
  }
  return (
    <div className="innerWrapper cancer-page container pt-5">
      <div className="d-flex p-2 img-box">
        <div className="d-flex flex-row img-captions justify-content-evenly">
          <div claasName="p-2">
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/metabolism%202%20(1).svg?raw=true"
              className="meta-img"
            />
          </div>

          <p className="p-2 align-self-center">
            Your Report is Ready.
            <br />
            Please click to View Report.
          </p>

          <div class=" d-flex flex-column report-dates align-self-center">
            <p class="m-2">12/11/2022</p>
            <p class="m-2">02/08/2022</p>
            <p class="m-2">07/12/2022</p>
          </div>

          <div class="d-flex flex-column report-buttons align-self-center">
            <button class="btn btn-report m-2" onClick={onVeiwReortClick}>
              View Report
            </button>
            <button class="btn btn-report m-2" onCLick={onVeiwReortClick}>
              View Report
            </button>
            <button class="btn btn-report m-2" onClick={onVeiwReortClick}>
              View Report
            </button>
          </div>
        </div>
      </div>

      {/* end report section */}

      <div className="d-flex flex-column mb-3 pt-3">
        <h2 className="meta-head">
          What is Adult Onset In-born Errors of Metabolism (IEM)?
        </h2>
        <p className="p-2 meta-para">
          Inborn errors of metabolism (IEM) are a heterogeneous group of 1,450
          disorders that are individually rare to ultra-rare, but relatively
          common as a group (estimated birth prevalence 1:2,000). Although
          genetic by defini tion, it is a misconception that IEMs only manifest
          at young age. Sometimes it takes years before a toxic metab- olite
          accumulates (eg, lysosomal storage disorder, Wilson's disease), or an
          individual is predisposed to extreme environmental stressors (e.g.
          marathon, pregnancy) leading to metabolic decompensation (eg.
          hyperammonemia, rhabdomyolysis).
        </p>
        <hr />
      </div>

      <div className="p-2">
        <h2 className="meta-head">
          Key Adult Onset Inborn Errors of Metabolism
        </h2>
        <div className="d-flex flex-row mb-3 align-items-center justify-content-evenly w-100 cardic-condition-box">
          <div>
            <img
              class="m-2"
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/3-s2%201.svg?raw=true"
              className="cardiac-condition"
            />
          </div>

          <div className="meta-list">
            <ul>
              <li>Disorders of Amino Acid and Peptide Metabolism.</li>

              <li>Disorders of Carbohydrate Metabolism.</li>

              <li>
                Disorders of Purines,pyrimidines and Nucleotide Metabolism.
              </li>

              <li>Disorders of Sterol Metabolism.</li>

              <li>Disorders of Porphyrin and Heme Metabolism.</li>
              <li>Disorders of Lipid and Lipoprotein Metabolism</li>

              <li>Congential Disorders of Glycosylation</li>

              <li>Lysosomal storage Disorders.</li>

              <li>Peroxisomal Disorders.</li>

              <li>Disorders of Neurotransmitters Metabolism.</li>

              <li>Disorders of Vitamin and Co-factor Metabolism.</li>

              <li>Disorders in the Metabolism of trace elements and metals.</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="">Featured Inherited IEM Disorders</h2>
      <Row>
        <Col>
          <p>
            <strong>Disorders of amino acid and peptide metabolism</strong>
          </p>
          <p>
            This is a group of diseases where the genes involved in the
            absorption, transport and breakdown of amino acids have
            altered/impacted function. These problems cause a buildup of harmful
            substances in your body that can lead to serious, sometimes
            life-threatening, health problems.
          </p>

          <p>
            <strong>Ex: Phenylketonuria (PKU)</strong>
          </p>
          <p>
            lthough it is principally a childhood disorder, in rare cases, the
            first signs of PKU may develop in late adulthood resembling common
            neurological diseases.
          </p>
        </Col>
        <Col>
          <table class="table iem-disorder-table">
            <thead>
              <tr>
                <th>Symptoms of Phenylketonuria (PKU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Learning disabilities</td>
              </tr>
              <tr>
                <td>Mental retardation</td>
              </tr>
              <tr>
                <td>Tremors or jerky movemnets of limbs</td>
              </tr>
              <tr>
                <td>Skin rash or eczema</td>
              </tr>
              <tr>
                <td>Epilepsy</td>
              </tr>
              <tr>
                <td>Hyperactivity</td>
              </tr>
              <tr>
                <td>Behavioral issues</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <div className="d-flex flex-row  align-items-center justify-content-evenly w-100 mt-3 meata-sec-p">
        <div className="m-4 exam-para">
          <p className="meta-head">
            <strong>Eg: Lysosomal Storage Disorders</strong>
          </p>
          <p className="c2 meta-list">
            Lysosomal storage diseases or disorders (LSDs) are rare genetic
            conditions that cause a buildup of toxic materials in your body's
            cells. People with LSDs lack certain enzymes or a substance that
            helps the enzyme work.
            <ul>
              <li>
                Lysosomal storage diseases usually appear during pregnancy or
                soon after birth, More rarely, adults may develop LSDS.
              </li>

              <li>
                People usually have more severe cases when an LSD starts early
                and more mild cases when an LSD starts later.
              </li>

              <li>
                Researchers have found more than 50 lysosomal storage diseases.
                And they continue to identify more.
              </li>
            </ul>
          </p>
        </div>
        <div className="m-4 img-box-meta">
          <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/jj664gp3oqo08%201.svg?raw=true" />
        </div>
      </div>

      <div className="p-2">
        <Carousel>
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
              <div className="p-5 carousel-cap">
                <h3>Lipidoses</h3>
                <p>
                  This type occurs when your body lacks an enzyme to break down
                  fats.
                </p>
              </div>
              <div className="p-2 car-img-item">
                <img src="" alt="First slide" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
              <div className="p-5 carousel-cap">
                <h3>SphingolipidosesOncogenes</h3>
                <p>
                  This type comes from not having enough of an enzyme to break
                  down fatty substances (sphingolipids). They're responsible for
                  specific jobs in your cells, including protecting the surface
                  of your cells.
                </p>
              </div>
              <div className="p-2 car-img-item">
                <img src="" alt="Second slide" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
              <div className="p-5 carousel-cap">
                <h3>Mucopolysaccharidoses</h3>
                <p>
                  These happen when your body lacks an enzyme to break down
                  complex sugar molecules (glycosaminoglycans).
                </p>
              </div>
              <div className="p-2 car-img-item">
                <img src="" alt="Third slide" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
