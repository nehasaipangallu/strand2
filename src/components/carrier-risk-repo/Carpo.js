import React, { useState } from 'react';
import './Carpo.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CarrierReport(props) {
  const [isPanelOpen, setPanelOpen] = useState(false);
  props.onLoad(true);
  function openPanel(event) {
    setPanelOpen(true);
  }

  function onPanelClose() {
    setPanelOpen(false);
  }

  return (
    <div className="d-flex flex-column carrier-risk-report-container">
      {isPanelOpen && (
        <Sidepanel open={isPanelOpen} onCloseCallback={onPanelClose} />
      )}
      <div className="d-flex flex-row p-3 w-100 justify-content-end">
        <button class="btn btn-download">
          Download Report{' '}
          <img
            alt=""
            class="icon-download"
            src="https://github.com/nehasaipangallu/strand2/blob/main/public/download.svg?raw=true"
          />
        </button>
      </div>
      <div class="cr-report-heading p-3">Results</div>

      <div class="cr-report-desc p-3">
        <p>Your report describes X no. of observations of significance.</p>
      </div>
      <div class="cr-report-heading p-3">
        Summary of Observations of Significance
      </div>
      <Table className="p-3 cr-report-summary-table">
        <thead>
          <tr>
            <td>Disorder Type</td>
            <td>Associated Gene(s)</td>
            <td>Variant Detected</td>
            <td>Inhheritence (AR/XR)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Surfactant metabolism dysfunction, pulmonary </td>
            <td>ABCA3</td>
            <td>Yes</td>
            <td>AR</td>
          </tr>
          <tr>
            <td>Autoimmune polyendocrinopathy syndrome type </td>
            <td>AIRE</td>
            <td>Yes</td>
            <td>XR</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <h2 class="cr-report-heading p-3">Recommendations</h2>
        <ul class="cr-report-recommendation-text">
          <li class="p-2">
            Based on the variations seen in your test it is imperative to
            ascertain the variation status of your partner in order to rule out
            a similar test result when planning to have children.{' '}
          </li>

          <li class="p-2">
            Genetic counseling is recommended to discuss the implications of
            this test result. Schedule genetic counselor appointment at
            xxx@strandls.com.{' '}
          </li>

          <li class="p-2">
            Test results should be interpreted in the context of this
            individual's personal and family history of cancer. Kindly consult
            with a physician before taking any interventional steps.
          </li>
        </ul>
      </div>

      <div className="cr-report-heading p-3">Detailed Findings</div>
      <div className="m-4 cr-report-findings-table-container">
        <Table
          responsive="lg"
          bordered
          className="p-3 cr-report-findings-table"
        >
          <thead>
            <tr>
              <td>Disorder Type</td>
              
              <td> Inheritence (AR/XR)</td>
              <td>Associated Gene(s)</td>
              <td>Variant Detected</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Surfactant metabolism dysfunction, pulmonary 3</td>
             
              <td>
                {/* BRCA1{' '} */}
                {/* <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel} */}
                {/* /> */}
                <button
                  className="cr-report-finding-ar_xr"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '#/pop-up';
                  }}
                >
                  AR
                </button>
              </td>
              <td>ABCA3 </td>
              <td className="yes-text">YES</td>
            </tr>

            <tr>
              <td>Diabetes mellitus, permanent neonatal 3</td>
              
              <td>
                -
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
                {/* <button className="brca-1"
                 onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '#/pop-up';
                }} >
           BRCA1
           </button> */}
              </td>
              <td>ABCC8</td>
              <td className="yes-text">No</td>
            </tr>

            <tr>
              <td>Adrenoleukodystrophy (ALD)</td>
             
              <td>-</td>
              <td>ABCD1</td>
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Medium-chain acyl-coenzyme A dehydrogenase deficiency</td>
              <td>-</td>
              <td>ACADM</td>
              
              <td className="no-text">No</td>
            </tr>

            <tr>
              <td>Very long chain acyl-CoA dehydrogenase deficiency</td>
              
              <td>
                -
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
              </td>
              <td>ACADVL</td>
              <td className="no-text">No</td>
            </tr>

            <tr>
              <td>α-Methylacetoacetic aciduria</td>
              <td>-</td>
              <td>ACAT1</td>
            
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Aspartylglucosaminuria</td>
              <td>-</td>
              <td>AGA</td>
             
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Hyperoxaluria, primary type I</td>
              <td>-</td>
              <td>AGXT</td>
             
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Joubert syndrome 3</td>
              <td>-</td>
              <td>AHI1</td>
              
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Autoimmune polyendocrinopathy syndrome type I</td>
              
              <td>
                {' '}
                <button
                  className="cr-report-finding-ar_xr"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '#/pop-up';
                  }}
                >
                  {' '}
                  XR{' '}
                </button>
              </td>
              <td>AIRE</td>
              <td className="yes-text">YES</td>
            </tr>

            <tr>
              <td>Hereditary fructosuria</td>
              
              <td>-</td>
              <td>ALDOB</td>
              <td className="no-text">NO</td>
            </tr>
          </tbody>
        </Table>
        <p className="m-3 p-3 cr-report-findings-table-footer">
          Schedule appointment with Genetic Counsellor for detailed explanation
        </p>
      </div>
      {/* <div className="m-3 table-health-2">
        <div className="m-4">
          <Table responsive="sm">
            <tbody>
              <tr>
                <td>Gene</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Variant Type</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Zygosity</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Inheritance</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Variant Class</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <p class="m-3">
            <strong>Gene</strong>: This is the basic unit of heredity. Its
            biochemical nature is a defined stretch of sequentially organized
            Deoxyribonu- cleotidyl Acid (DNA).
          </p>
          <p class="m-3">
            <strong>Variation</strong>: This refers to the differences in
            Sequential organization of DNA bases from a reference database.
          </p>
          <p class="m-3">
            <strong>Zygosity</strong>: Human is diploid. This means that every
            human has 2 copies of genetic Material (DNA), one from the mother
            and one from the father. Zygosity refers to any differences in DNA
            between these two copies. No difference is Homozygous; Any
            difference Is refereed to as heterozygous.
          </p>
          <p class="m-3">
            <strong>Variant Classification</strong>: This is a call out of the
            consequence of a change in DNA to the function of the gene and how
            it may be evaluated vis-à-vis an individuals health.
          </p>
        </div>
      </div> */}
      {/* <div className="m-3">Flex item 3</div>
      <div className="m-3">Flex item 3</div> */}
    </div>
  );
}
