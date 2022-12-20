import React from 'react';
import './cancer.css';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

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
      <div className="d-flex flex-column body-para">
        <div className="section1">
          <h2 className="c2 pt-4 section-head">{cancerdata.section1.title}</h2>
          <p className="c2 pb-4">
            Cancer caused by changes in the genetic material or L sperm or egg
            is called inherited cancer, R predisposes an individual to develop
            cancers later in their life. This type of mutation accounts for
            about 5% to 20% of all cancers
          </p>
        </div>

        <div className="section1">
          <h2 className="c2">Types of genes linked to cancer</h2>
          <p className="c2 pb-4">
            Many of the genes that contribute to cancer development fall into
            broad categories :
          </p>
        </div>
      </div>

      <div className="carousel-health">
        <Carousel>
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-between align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12495-300%202.svg?raw=true"
                  alt="First slide"
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
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12494-150%202.svg?raw=true"
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
          <Carousel.Item>
            <div className="d-flex flex-row mb-3 flex-car justify-content-end align-items-center ">
              <div className="p-2 car-img-item">
                <img
                  src="https://github.com/nehasaipangallu/strand2/blob/main/public/fonc-08-00015-g001%202%20(1).svg?raw=true"
                  alt="Third slide"
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
        </Carousel>
      </div>
      <div>
        <h4 className="genes-head c2">
          Susceptibility Genes in Hereditary Cancer
        </h4>
        <div className="d-flex flex-row mb-3">
          <div className="p-2 bar-box">
            <img
              className="bar-img"
              src="https://github.com/nehasaipangallu/strand2/blob/main/public/image%2012.svg?raw=true"
            />
          </div>
          <div className="p-2 bar-box-2">
            <h2>
              High Penetrant Cancer Susceptibility Genes in Common Cancers
            </h2>
            <Table responsive="sm">
              <thead className="table-cont">
                <tr>
                  <td>Malignancy</td>
                  <td>High Penetrant Cancer Susceptibility Genes</td>
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
        </div>
      </div>
      <div className="d-flex flex-column mb-3">
        <div className="p-2">
          <h2 className="other-head c2">Other Hereditary Mutations</h2>
          <p className="other-para c2">
            In Case of familisal syndrome, the risk of developing cancer is even
            greater without timely intervention.
          </p>
          <div className="d-flex flex-row mb-3">
            <div className="p-2">
              <ul className="unsorted-list c2">
                <li>Familial Adenomatous Polyposis-nearly 100%</li>
              </ul>
            </div>
            <div className="p-2">
              <ul className="unsorted-list c2">
                <li>MUTYH- associated polyposis- 80-90% </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2">
          <Carousel>
            <Carousel.Item>
              <div className="d-flex flex-row mb-3 carousel-2 justify-content-end align-items-center">
                <div className="p-2 carousel-2-flex">
                  <img
                    className="d-block w-100 carousel-2-img"
                    src="https://github.com/nehasaipangallu/strand2/blob/main/public/lynch-syndrome-101-what-you-need-to-know-722x406%201.svg?raw=true"
                    alt="First slide"
                  />
                </div>

                <div className="p-2 carousel-2-cap">
                  <h3>Eg: Lynch syndrome</h3>
                  <p>
                    Lynch syndrome is a type of inherited cancer syndrome
                    associated with a genetic predisposition to different cancer
                    types. This means people with Lynch syndrome have a higher
                    risk of certain types of cancer. Lynch Syndrome is also
                    known as her non-polyposis colorectal cancer (HNPCC).
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-row mb-3 carousel-2 justify-content-end align-items-center">
                <div className="p-2 carousel-2-flex">
                  <img
                    className="d-block w-100 carousel-3-img"
                    src="https://github.com/nehasaipangallu/strand2/blob/main/public/BRCA1_and_BRCA2_mutations_and_absolute_cancer_risk%201.svg?raw=true"
                    alt="Second slide"
                  />
                </div>

                <div className="p-2 carousel-3-cap">
                  <h3>
                    Eg: Hereditary Breast and Ovarian Cancer syndrome (HBOC)
                  </h3>
                  <p>
                    Hereditary Breast and Ovarian Cancer syndrome (HBOC) is a
                    genetic condition that makes it more likely that a person
                    will get breast, ovarian, and other cancers. HBOC is
                    hereditary, meaning that it is caused by a mutation (genetic
                    change) that can be passed down in families.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
