import React from 'react';
import './Metabolism.css';
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
            <img
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/metabolism%202%20(1).svg?raw=true"
              className="meta-img"
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
      <div className="d-flex flex-column mb-3">
        <h2>What are inherited cancers?</h2>
        <p className="p-2">
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
      </div>
      <div className="p-2">
        <h2>Key Adult Onset Inborn Errors of Metabolism</h2>
        <div className="d-flex flex-row mb-3 cardic-condition-box">
          <img
            class="m-2"
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/3-s2%201.svg?raw=true"
            className="cardiac-condition"
          />

          <div className="p-2">
            <h2>Tumor suppressor genes</h2>

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
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <h2>Eg: Lysosomal Storage Disorders</h2>
          <p>
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
        <div className="p-2 img-box-meta">
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
