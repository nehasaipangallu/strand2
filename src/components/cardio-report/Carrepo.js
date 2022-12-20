import React, { useState } from 'react';
import './carrepo.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';


export default function CardioReport(props) {
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
         <h2 className="c2 pt-3 ml-3">Hereditary Cardio Report</h2>
         <p className=" c2">A thorough Analysis of 500 genes across 20 hereditary cancer types was conducted. Your report indicates “X” Variants of Concern.</p>
         <button className="read-btn">
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
              <td style={{ width: 'auto' }}>Disorder Type</td>
              <td style={{ width: '40%' }}>Associated Gene(s)</td>
              <td style={{ width: '15%' }}> Gene(s) with Variants</td>
              <td>Varient Detected</td>
            </tr>
          </thead>
          <div></div>
          <tbody>
            <tr>
              <td>Hypertrophic cardiomyopathy</td>
              <td>
              ACE, ACTC1, ACTN2*, AGT, ANKRD1, CASQ2, COX15, CSRP3, DES*, FXN*, GLA, LAMP2, MYBPC3, MYH6, MYH7, MYL2, MYL3, MYLK2, MYO6, MYOM1, MYOZ2, NDUFAF1*, NEXN, OBSCN*, PDLIM3, PLN, PRKAG2*, RAF1, SLC25A4, SRI, TCAP, TNNC1, TNNI3, TNNT2, TPM1, TTN, TTR{' '}
              </td>
              <td>
                {/* BRCA1{' '} */}
                {/* <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel} */}
                {/* /> */}
                <button className="tnnc1" >
                TNNC1
           </button>
              </td>
              <td className="yes-text">YES</td>
            </tr>
            <tr>
              <td>Dilated cardiomyopathy</td>
              <td>
              ABCC9, ACE, ACTC1, ACTN2*, ANKRD1, BAG3, BMP10, CHRM2, CRYAB, CSRP3, DES*, DMD, DNAJC19, DSG2, DSP, EMD*, EYA4, FKTN, FLT1, FOXD4*, ILK, LAMA2, LAMA4, LAMP2, LDB3*, LMNA*, MURC*, MYBPC3, MYH6, MYH7, MYPN, NEBL, NEXN, PDLIM3, PLN, PSEN1, PSEN2, RBM20, SCN5A*, SDHA*, SGCD, SYNE1, TAZ, TCAP, TCF21, TMPO, TNNC1, TNNI3, TNNT2, TPM1, TTN, TTR, TXNRD2, VCL, VPS13A
              </td>
              <td>
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
                 {/* <button className="brca-1" >
           BRCA1
           </button> */}

              </td>
              <td className="no-text">No</td>
            </tr>
            <tr>
              <td>Arrhythmogenic right ventricular dystrophy</td>
              <td>DES*, DSC2, DSG2, DSP, JUP, PKP2, RYR2, TGFB3, TMEM43, TTN</td>
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
              <td>Restrictive cardiomyopathy</td>
              <td>ACTC1, BAG3, DES*, MYH7, TNNI3, TNNT2</td>
              <td>
                {/* BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                /> */}
                 <button className="tnnc1" >
                TNNC1
           </button>
              </td>
              <td className="yes-text">YES</td>
            </tr>
            <tr>
              <td>Left ventricular non compaction</td>
              <td>
              ACTC1, CASQ2, DTNA, LDB3*, LMNA*, MYBPC3, MYH7, TAZ, TNNT2, VCL
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>
            <div></div>
            <tr>
              <td>Long QT syndrome</td>
              <td>
              AKAP9, ANK2, CACNA1C, CAV3*, KCNE1, KCNE2*, KCNH2*, KCNJ2, KCNJ5, KCNQ1*, SCN4B, SCN5A*
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>
            <tr>
              <td>Brugada syndrome</td>
              <td>
              ABCC9, ANK3, CACNA1C, CACNA1D, CACNA2D1, CACNB2, GPD1L*, KCND3, KCNE3, KCNH2*, KCNJ8, RANGRF, SCN1B, SCN2B, SCN3B, SCN5A*, TRPM4
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>

            <tr>
              <td>Catecholaminergic polymorphic ventricular tachycardia</td>
              <td>
              AKAP9, ANK2, CACNA1C, CACNA2D1, CACNB2, CALM1, CASQ2, CAV3*, DES*, DSC2, DSG2, DSP, GPD1L*, JUP, KCNE1, KCNE2*, KCNE3, KCNH2*, KCNJ2, KCNJ8, KCNQ1*, LMNA*, PKP2, RYR2, SCN1B, SCN3B, SCN4B, SCN5A*, TMEM43, TRDN
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr><tr>
              <td>Short QT syndrome</td>
              <td>
              AKAP9, ANK2, CACNA1C, CACNA2D1, CACNB2, CASQ2, CAV3*, DES*, DSC2, DSG2, DSP, GPD1L*, JUP, KCNE1, KCNE2*, KCNE3, KCNH2*, KCNJ2, KCNJ8, KCNQ1*, LMNA*, PKP2, RYR2, SCN1B, SCN3B, SCN4B, SCN5A*, TMEM43
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr><tr>
              <td>Wolff-ParkinsonWhite syndrome</td>
              <td>
              ACTC1, CAV3*, GLA, LAMP2, MYBPC3, MYH7, MYL2, MYL3, NKX2-5*, PRKAG2*, TNNC1, TNNI3, TNNT2, TPM1, TTR
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr><tr>
              <td>Familial atrial fibrillation</td>
              <td>
              ABCC9, EMD*, GJA5*, KCNA5, KCNE2*, KCNE3, KCNH2*, KCNJ2, KCNJ5, KCNQ1*, LMNA*, NPPA, NUP155, SCN1B, SCN2B, SCN3B, SCN5A*
              </td>
              <td></td>
              <td className="no-text">NO</td>
            </tr>

          </tbody>
        </Table>
        <div className="exp-box">Schedule appointment with Genetic Counsellor for detailed explanation</div>
      </div>
      <div className="rec-class">
        <h2 className="c2 rec-head" >Recommendations</h2>
        <p className="rec-para">Genetic counseling is recommended to discuss the implications of this test result. Schedule genetic counselor appointment at xxx@strandls.com. Test results should be interpreted in the context of this individual's personal and family history of cancer. Kindly consult with a physician before taking any interventional steps.</p>
      </div>
    </div>
  );
              }