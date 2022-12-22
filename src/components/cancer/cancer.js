import React from 'react';
import './cancer.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const cancerdata = {
  section1: {
    title: 'What are inherited cancers?',
    description:
      'Cancer caused by changes in the genetic material or L sperm or egg is called inherited cancer, R predisposes an individual to develop cancers later in their life. This type of mutation accounts for about 5% to 20% of all cancers',
  },
};

export default function Cancer(props) {
  props.onLoad(true);
  const naviage = useNavigate();

  function onVeiwReortClick() {
    naviage('/cancer-report');
  }
  return (
    <div className="innerWrapper cancer-page container pt-5">
      {/* start repo sec */}
      <div className="d-flex p-2 img-box">
        <div className="d-flex flex-row img-captions justify-content-evenly">
          <div claasName="p-2">
            <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/aza%203.svg?raw=true" />
          </div>
          <p class="p-2 align-self-center">
            Your Report Is Ready <br />
            Please click on View Report
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
      {/* end repo sec */}
      {/* start caption sec below car */}
      <div className="d-flex flex-column body-para">
        <div className="section1">
          <h2 className="c2 pt-4 section-head">{cancerdata.section1.title}</h2>
          <p className="pb-4">
            Cancer caused by changes in the genetic material or L sperm or egg
            is called inherited cancer, R predisposes an individual to develop
            cancers later in their life. This type of mutation accounts for
            about 5% to 20% of all cancers
          </p>
          <h2 className="c2">Types of genes linked to cancer</h2>
          <p className="pb-4">
            Many of the genes that contribute to cancer development fall into
            broad categories :
          </p>
        </div>
      </div>
      {/* end for caption sec-1 */}

      {/* start car sec */}
      <Container>
        <Row>
          <Carousel className='car-bg'>
            <Carousel.Item>
              <Row>
                <Col>
                  <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
                    <div className="p-2">
                      <img className='img-1'
                        src="/3.png"
                      />
                    </div>
                    <div className="p-5 carousel-cap">
                      <h3>Tumor suppressor genes</h3>
                      <p>
                        These are protective genes under normal circumstances, and
                        they limit cell growth. When a tumor suppressor gene mutates,
                        control on cell growth is lost, resulting in the formation of
                        a tumor. Examples of tumor suppres sor genes include BRCA1,
                        BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2
                        genes increase a wom ar's risk of developing hereditary breast
                        or ovarian cancers and a man's risk of developing hereditary
                        prostate or breast cancers. They also increase the risk of
                        pancreatic cancer and melanoma in women and men.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            {/* end item-1 */}

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                <div className="p-2">
                  <img className="img-1"
                    src="/1.png"
                    alt="Second slide"
                  />
                </div>
                <div className="p-5 carousel-cap">
                  <h3>Oncogenes</h3>
                  <p>
                    These genes actively turn a healthy cell into a cancerous cell
                    Mutations in these genes are NOT known to be inherited.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* end item-2 */}

            <Carousel.Item>
              <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center ">
                <div className="p-2">
                  <img className="img-1"
                    src="/2.png"
                  />
                </div>

                <div className="p-5 carousel-cap">
                  <h3>DNA Repair Genes</h3>
                  <p>
                    These genes fix mistakes made when DNA is copied. Many of them
                    also function as tumor suppressor genes. Eg BRCA1, BRCAZ and
                    p53 are all DNA repair genes. It is normal that DNA is copied
                    every time a cell divides. However, If a person has an error
                    in a DNA repair gene, mistakes made during DNA copying remain
                    uncorrected. Then, the mistakes become mutations. These
                    mutations may eventually lead to cancer, particu larly
                    mutations in tumor suppressor genes or oncogenes. Mutations in
                    DNA repair genes may be inherited or acquired Lynch syndrome
                    is an example of the inherited kind. BRCAT, BRCA2, and p53
                    mutations
                  </p>
                </div>
              </div>
            </Carousel.Item>
            {/* end itsem-3 */}
          </Carousel>
        </Row>
      </Container>
      {/* end car sec */}



      {/* this is for box */}
      <Container>
        <Row>
          {/* this is title */}
          <h4 className="genes-head c2">
            Susceptibility Genes in Hereditary Cancer
          </h4>
          <div className="d-flex mb-3">
            {/* image sec */}
            <Col>
              <div className="p-2 bar-box">
                <img
                  className="bar-img"
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/image%2012.svg?raw=true"
                />
              </div>
            </Col>
            <Row>
              <Col>
                <div className="p-2 bar-box-2">
                  <h2>
                    High Penetrant Cancer Susceptibility Genes in Common Cancers
                  </h2>
                  <Table responsive="sm">
                    <thead className="table-cont">
                      <tr>
                        <td><span className='s-1'>Malignancy</span> </td>
                        <td><span className='s-1'>High Penetrant Cancer Susceptibility Genes</span></td>
                      </tr>
                      <tr>
                        <td>Breast Cancer</td>
                        <td>BRCA1, BRCA2, p53, PTEN, CDH1</td>
                      </tr>
                      <tr>
                        <td>Colorectal Cancer</td>
                        <td>MLH1, MSH2, MSH6, PMS2, MYH, APC, STK11</td>
                      </tr>
                      <tr>
                        <td>Ovarian Cancer</td>
                        <td>BRCA1, BRCA2, MLH1, MSH2, MSH6, PMS2, P53</td>
                      </tr>
                      <tr>
                        <td>Prostate Cancer</td>
                        <td>BRCA2, RNASEL ELAC2, MSR1</td>
                      </tr>
                      <tr>
                        <td>Pancreatic Cancer</td>
                        <td>BRCA2, STK11/LKB1, PALB2, PRSS1, SPINKKI, CDKN2A</td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      {/* end for table section */}

      {/* start this sec for car */}

    
      {/* this is here we get on contnet refer figma */}
      <div className="p-2">
        <Row>
        <h2 className="genes-head c2"> Other Hereditary Mutations</h2>
       
        </Row>
      </div>
 









        <div className="p-2">

          {/* end for cap heading  */}


          <Container>
            <Row>
              <Carousel className='car-bg'>
                <Carousel.Item>
                  <Row>
                    <Col>
                      <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
                        <div className="p-2">
                          <img className='img-1'
                            src="/brococli.png"
                          />
                        </div>
                        <div className="p-5 carousel-cap">
                          <h3>Tumor suppressor genes</h3>
                          <p>
                            These are protective genes under normal circumstances, and
                            they limit cell growth. When a tumor suppressor gene mutates,
                            control on cell growth is lost, resulting in the formation of
                            a tumor. Examples of tumor suppres sor genes include BRCA1,
                            BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2
                            genes increase a wom ar's risk of developing hereditary breast
                            or ovarian cancers and a man's risk of developing hereditary
                            prostate or breast cancers. They also increase the risk of
                            pancreatic cancer and melanoma in women and men.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                {/* end item-1 */}

                <Carousel.Item>
                  <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
                    <div className="p-2">
                      <img className="img-1"
                        src="/lungs.png"
                        alt="Second slide"
                      />
                    </div>
                    <div className="p-5 carousel-cap">
                      <h3>Oncogenes</h3>
                      <p>
                        These genes actively turn a healthy cell into a cancerous cell
                        Mutations in these genes are NOT known to be inherited.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                {/* end item-2 */}
              </Carousel>
            </Row>
          </Container>
        </div>
      
      {/*  */}
    </div>
  );
}
