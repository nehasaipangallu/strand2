import React from 'react';
import './faq.css';
import Accordion from 'react-bootstrap/Accordion';

export default class Faq extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class="faq-containers m-4">
        <div class="p-5">
          <h2 class="faq-heading">FAQ</h2>
          <div class="d-flex justify-content-between">
            <Accordion flush className="faq-accordian">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Where does it come from?</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusa?
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur?
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Neque porro quisquam est, qui dolorem?
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit?
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}
