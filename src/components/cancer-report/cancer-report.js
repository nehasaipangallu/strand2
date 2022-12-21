import React, { useState } from 'react';
import './cancer-report.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function CancerReport(props) {
  const [isPanelOpen, setPanelOpen] = useState(false);
  props.onLoad(true);
  function openPanel(event) {
    setPanelOpen(true);
  }

  function onPanelClose() {
    setPanelOpen(false);
  }
 
  return (
    <div className="d-flex flex-column mb-3 container">
      {isPanelOpen && (
        <Sidepanel open={isPanelOpen} onCloseCallback={onPanelClose} />
      )}
       <div className="d-flex flex-row mb-3">
         <div className="d-flex flex-column mb-3">
         <h2 className="c2 pt-3 ml-3">Hereditary Cancer Risk Report</h2>
         <p className=" c2">A thorough Analysis of 500 genes across 20 hereditary cancer types was conducted. Your report indicates “X” Variants of Concern.</p>
         <button className="read-btn"
         >
           Read More
           </button>
         </div>
         <div className="p-2">
      <button class="btn btn-download align-self-end m-3">
        Download Report{' '}
        <img
          alt=""
          class="icon-download"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/download.svg?raw=true"
        />
      </button>
      </div>
      </div>
      <div className="res-box p-0 m-0">
        <h2 className="c2">Result</h2>
        </div>
        <p className="c2">
        Your report describes X no. of observations of significance.
        </p>

        <div className="res-box p-0 m-0">
        <h2 className="c2">Detailed Findings</h2>
        </div>
      <div className="m-3 table-health-1">
        <Table responsive="lg" bordered>
          <thead>
            <tr>
              <td style={{ width: 'auto' }}>Organ/Tissue</td>
              <td style={{ width: '40%' }}>Associated Gene(s)</td>
              <td style={{ width: '15%' }}> Gene(s) with Variants</td>
              <td>Reportable Mutation Detected</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breast</td>
              <td>
                ATM,BARD1,BRCA1, BRCA2, BRIP1, CDH1, CHEK2, NBN, NF1, PALB2,
                PPM1D, PTEN, RAD51C, STK11, TP53{' '}
              </td>
              <td>
                {/* BRCA1{' '} */}
                {/* <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel} */}
                {/* /> */}
                <button className="brca-1"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '#/pop-up';
                }} >
           BRCA1
           </button>
              </td>
              <td className="yes-text">YES</td>
            </tr>
            <tr>
              <td>Ovaries</td>
              <td>
                BRCA1, BRCA2, BRIP1, DICER1, EPCAM, MLH1, MSH2, MSH6, PALB2,
                PMS2, PPM1D, RAD51C,RAD51D, STK11, TP53
              </td>
              <td>
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
                 <button className="brca-1"
                 onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '#/pop-up';
                }} >
           BRCA1
           </button>

              </td>
              <td className="yes-text">YES</td>
            </tr>
            <tr>
              <td>Endometrium</td>
              <td>EPCAM, MLH1, MSH2, MSH6, PMS2, PTEN, STK11, TP53</td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>
            <tr>
              <td>Myometrium(uterine)</td>
              <td>FH</td>
              <td></td>
              <td className="no-text">No</td>
            </tr>
            <tr>
              <td>Prostate Gland</td>
              <td>ATM, BRCA1, BRCA2, CHEK2, HOXB13, NBN, TP53</td>
              <td>
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
                 <button className="brca-1"
                 onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '#/pop-up';
                }}>
           BRCA1
           </button>
              </td>
              <td className="yes-text">YES</td>
            </tr>
            <tr>
              <td>Stomach</td>
              <td>
                APC, BMPR1A, CDH1, EPCAM, KIT, MLH1, MSH2, MSH6, PMS2, SMAD4,
                STK11
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>
            <tr>
              <td>Colorectal</td>
              <td>
                APC, BLM, BMPR1A, CDH1, CHEK2, EPCAM, KIT, MLH1, MSH2, MSH6,
                MUTYH, PMS1, PMS2, PTEN, SMAD4, STK11, TP53
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>
          </tbody>
        </Table>
        <div className="exp-box">Schedule appointment with Genetic Counsellor for detailed explanation</div>
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
      <div className="rec-class">
        <h2 className="c2 rec-head" >Recommendations</h2>
        <p className="rec-para">Genetic counseling is recommended to discuss the implications of this test result. Schedule genetic counselor appointment at xxx@strandls.com. Test results should be interpreted in the context of this individual's personal and family history of cancer. Kindly consult with a physician before taking any interventional steps.</p>
      </div>
    </div>
  );
}
