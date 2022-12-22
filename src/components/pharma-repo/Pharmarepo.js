import React, { useState } from 'react';
import './Pharmarepo.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
      <Table>
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
            <td>Codeine Sevourane Succinylcholine Tramadol</td>
            <td></td>
          </tr>

          <tr>
            <td>Cardiology</td>
            <td>Atorvastatin
Clopidogrel
Simvastatin</td>
            <td>Flecainide Pravastatin Rosuvastatin</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
