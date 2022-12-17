import React, { useState } from 'react';
import './HealthSub.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';

export default function HealthSub() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  function openPanel(event) {
    setPanelOpen(true);
  }

  function onPanelClose() {
    setPanelOpen(false);
  }

  return (
    <div className="d-flex flex-column mb-3 ">
      {isPanelOpen && (
        <Sidepanel open={isPanelOpen} onCloseCallback={onPanelClose} />
      )}
      <button class="btn btn-download align-self-end m-3">
        Download Report{' '}
        <img
          alt=""
          class="icon-download"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/download.svg?raw=true"
        />
      </button>
      <div className="m-3 table-health-1">
        <Table responsive="lg" bordered>
          <thead>
            <tr>
              <td style={{ width: 'auto' }}>Cancer/Tumor</td>
              <td style={{ width: '40%' }}>Associated Gene(s)</td>
              <td style={{ width: '15%' }}></td>
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
                BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                />
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
                BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                />
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
                BRCA1{' '}
                <img
                  alt=""
                  class="icon-question"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/question.svg?raw=true"
                  onClick={openPanel}
                />
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
      </div>
      <div className="m-3 table-health-2">
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
      </div>
      {/* <div className="m-3">Flex item 3</div>
      <div className="m-3">Flex item 3</div> */}
    </div>
  );
}
