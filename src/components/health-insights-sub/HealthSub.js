import React from 'react';
import './HealthSub.css';
import Table from 'react-bootstrap/Table';

export default function HealthSub() {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="p-2 table-health-1">
        <Table responsive="sm">
          <thead>
            <tr>
              <td>Cancer/Tumor</td>
              <td>Associated Gene(s)</td>
              <td></td>
              <td>Reportable Mutation Detected</td>
            </tr>
          </thead>
          <tr>
            <td>Breast</td>
            <td>
              ATM,BARD1,BRCA1, BRCA2, BRIP1, CDH1, CHEK2, NBN, NF1, PALB2,
              PPM1D, PTEN, RAD51C, STK11, TP53{' '}
            </td>
            <td>BRCA1</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Ovaries</td>
            <td>
              BRCA1, BRCA2, BRIP1, DICER1, EPCAM, MLH1, MSH2, MSH6, PALB2, PMS2,
              PPM1D, RAD51C,RAD51D, STK11, TP53
            </td>
            <td>BRCA1</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Endometrium</td>
            <td>EPCAM, MLH1, MSH2, MSH6, PMS2, PTEN, STK11, TP53</td>
            <td></td>
            <td>NO</td>
          </tr>
          <tr>
            <td>Myometrium(uterine)</td>
            <td>FH</td>
            <td></td>
            <td>No</td>
          </tr>
          <tr>
            <td>Prostate Gland</td>
            <td>ATM, BRCA1, BRCA2, CHEK2, HOXB13, NBN, TP53</td>
            <td>BRCA1</td>
            <td>YES</td>
          </tr>
          <tr>
            <td>Stomach</td>
            <td>
              APC, BMPR1A, CDH1, EPCAM, KIT, MLH1, MSH2, MSH6, PMS2, SMAD4,
              STK11
            </td>
            <td></td>
            <td>NO</td>
          </tr>
          <tr>
            <td>Colorectal</td>
            <td>
              APC, BLM, BMPR1A, CDH1, CHEK2, EPCAM, KIT, MLH1, MSH2, MSH6,
              MUTYH, PMS1, PMS2, PTEN, SMAD4, STK11, TP53
            </td>
            <td></td>
            <td>NO</td>
          </tr>
        </Table>
      </div>
      <div className="p-2">Flex item 2</div>
      <div className="p-2">Flex item 3</div>
    </div>
  );
}
