import React from 'react';
import './Health.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Health(){
  return(
  <div className="health-main">
    <div class="d-flex p-2 img-box">
    <div class="d-flex flex-row img-captions">
     <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/aza%203.svg?raw=true"/>
     <div class="p-2">
      Your Report Is Ready
     </div>
     </div>
    </div>
    <div className="d-flex flex-column body-para">
      <div className="P-2">
    <h5>What are inherited cancers?</h5>
       <p>Cancer caused by changes in the genetic material or L sperm or egg is called inherited cancer, R predisposes an individual to develop cancers later in their life. This type of mutation accounts for about 5% to 20% of all cancers</p>
       </div>
       <div className="P-2">
         <h5>Types of genes linked to cancer</h5>
         <p>Many of the genes that contribute to cancer development fall into broad categories :</p>
       </div>
       </div>
       <div className ="carousel-health">
       <Carousel>
        
      <Carousel.Item>
      <div className ="d-flex flex-row mb-3 flex-car ">
        <div className="p-2 car-img-item">
        <img
          className="d-block w-100 car-img"
          src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12495-300%202.svg?raw=true"
          alt="First slide"
        />
        </div>

        
        <Carousel.Caption>
        <div className="p-2 carousel-cap">
          <h3>Tumor suppressor genes</h3>
          <p>These are protective genes under normal circumstances, and they limit cell growth. When a tumor suppressor gene mutates, control on cell growth is lost, resulting in the formation of a tumor. Examples of tumor suppres sor genes include BRCA1, BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2 genes increase a wom ar's risk of developing hereditary breast or ovarian cancers and a man's risk of developing hereditary prostate or breast cancers. They also increase the risk of pancreatic cancer and melanoma in women and men.</p>
          </div>
        </Carousel.Caption>
       
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className ="d-flex flex-row mb-3 flex-car ">
        <div className="p-2 car-img-item">
        <img
          className="d-block w-100"
          src="https://github.com/nehasaipangallu/strand2/commit/ff806c1b8762eed14b1b1596e8b3373032070cd8?raw=true"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
        <div className="p-2 carousel-cap">
          <h3>Oncogenes</h3>
          <p>These genes actively turn a healthy cell into a cancerous cell Mutations in these genes are NOT known to be inherited.</p>
          </div>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    
  )
}