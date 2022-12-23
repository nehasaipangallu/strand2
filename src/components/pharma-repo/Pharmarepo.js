import React, { useState } from 'react';
import './Pharmarepo.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PharmaRepo(props) {
  const [isPanelOpen, setPanelOpen] = useState(false);
  props.onLoad(true);
  function openPanel(event) {
    setPanelOpen(true);
  }

  function onPanelClose() {
    setPanelOpen(false);
  }

  return (
    <div className="d-flex flex-column pharma-report-container">
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
      <Table className="pharama-repo-tabl">
        <tbody>
          <tr>
            <td>Therapeutic area</td>
            <td>Standard Precuation</td>
            <td>Use with Caution</td>
            <td>Consider alternative</td>
          </tr>

          <tr>
            <td>Anesthesiology</td>
            <td>Fentanyl</td>
            <td>Codeine 
              Sevourane 
              Succinylcholine 
              Tramadol</td>
            <td></td>
          </tr>

          <tr>
            <td>Cardiology</td>
            <td>Atorvastatin
               Clopidogrel
                Simvastatin</td>
            <td>Flecainide 
              Pravastatin 
              Rosuvastatin</td>
            <td></td>
          </tr>
          <tr>
            <td>Dermatology/Oncology</td>
            <td>Fluorouracil</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Endocrinology</td>
            <td>Chlorpropamide
Glimepiride 
Glipizide 
Glyburide 
Pioglitazone
Tolbutamide</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Gastroenterology</td>
            <td>Dexlansoprazole 
Dronabinol 
Esomeprazole 
Lansoprazole 
Metoclopramide
Omeprazole 
Pantoprazole 
Ondansetron 
Rabeprazole</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Gynecology</td>
            <td>Elagolix Flibanserin</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hematology</td>
            <td>Aspirin </td>
            <td>Acenocoumarol 
Avatrombopag
Lusutrombopag
Warfarin</td>
            <td></td>
          </tr>
          <tr>
            <td>Immunology</td>
            <td>Sirolimus Tacrolimus</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Infectious Diseases</td>
            <td>Abacavir Voriconazole</td>
            <td>Efavirenz
Nevirapine</td>
            <td></td>
          </tr>
          <tr>
            <td>Neurology</td>
            <td>Brivaracetam 
Carbamazepine 
Clobazam 
Diazepam 
Eliglustat 
Fosphenytoin 
Phenytoin 
Divalproex 
sodium Valproic
 Acid Siponimod</td>
            <td>Tetrabenazine 
- 
- 
- 
- 
- 
- 
- 
- 
Hydrocodone</td>
            <td></td>
          </tr>

          <tr>
            <td>Oncology</td>
            <td>Capecitabine 
Pazopanib</td>
            <td>Mercaptopurine -</td>
            <td>amoxifen -</td>
          </tr>

          <tr>
            <td>Psychiatry</td>
            <td>Bupropion 
Citalopram 
Escitalopram 
Fluvoxamine 
Paroxetine 
Risperidone 
Sertraline</td>
            <td>Amitriptyline
Atomoxetine 
Clomipramine 
Desipramine 
Doxepin 
Haloperidol 
Imipramine 
Nortriptyline 
Trimipramine</td>
            <td></td>
          </tr>

          <tr>
            <td>Rheumatology</td>
            <td>Carisoprodol 
Celecoxib 
Flurbiprofen 
Lesinurad 
Meloxicam 
Piroxicam</td>
            <td>Azathioprine 
- 
- 
- 
- 
-</td>
            <td></td>
          </tr>

          <tr>
            <td>Urology</td>
            <td>Allopurinol</td>
            <td>Mercaptopurine -</td>
            <td>amoxifen -</td>
          </tr>

        </tbody>
      </Table>

      <Row>
        <Col>The genotype is unlikely to aect the metabolism or cause any adverse eect. The medication can be prescribed to the patient in accordance with the standard guidelines and recommendations.</Col>
        <Col>The genotype might signicantly aect the metabolism of the drug or can have an adverse eect. The patient is might not benet from the medication. An alternate medication is recommended..</Col>
        <Col>The genotype is likely to have a some eect on the metabolism of the drug or there are evidence suggesting likely adverse eect or loss of ecacy. Appropriate dosing adjustment is required while prescribing the medication. Possibility of adverse reaction may exist for few medication. Increased vigilance is required for drugs where a possibility of adverse reaction exists.</Col>
        </Row>

        <div className=" ">
          <p>Detailed PGx Results</p>
          </div>

          <div className="">
          Recommendations
          </div>

          <div>
            <ul>
              <li>Genetic counseling is recommended to discuss the implications of this test result. Schedule genetic counselor appointment at xxx@strandls.com. </li>

              <li>Test results should be interpreted in the context of this individual's personal and family history of cancer. Kindly consult with a physician before taking any interventional steps.</li>
             
            </ul>
          </div>
    </div>
  );
}
