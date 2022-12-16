import React from 'react';
import './Health.css';

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
       <div className="p-2 carousel-health">
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="d-flex flex-row mb-3 car-item">
        <div className="p-2 car-row">
       <img class="d-block w-100 car-img" src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12495-300%202.svg?raw=true" alt="First slide" />
       </div> 
       <div className="p-2 car-row-2">
         <h4>Tumor suppressor genes</h4>
         <p>These are protective genes under normal circumstances, and they limit cell growth. When a tumor suppressor gene mutates, control on cell growth is lost, resulting in the formation of a tumor. Examples of tumor suppres sor genes include BRCA1, BRCA2, and p53 or 7P53. Germline mutations in BRCA or BRCA2 genes increase a wom ar's risk of developing hereditary breast or ovarian cancers and a man's risk of developing hereditary prostate or breast cancers. They also increase the risk of pancreatic cancer and melanoma in women and men.</p>
         </div>
       
      </div>
    </div>
    <div class="carousel-item">
     <div className="d-flex flex-row mb-3 car-item-2">
        <div className="p-2 car-row-sec">
       <img class="d-block w-100 car-img-second" src="https://github.com/nehasaipangallu/strand2/blob/main/public/nci-vol-12494-150%202.svg?raw=true" alt="First slide" />
       </div> 
       <div className="p-2 car-row-second">
         <h4>Oncogenes</h4>
         <p>These genes actively turn a healthy cell into a cancerous cell Mutations in these genes are NOT known to be inherited.</p>
         </div>
       
      </div>
    </div>
    <div class="carousel-item">
      {/* <img class="d-block w-100" src="..." alt="Third slide"> */}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
         
       </div>
    </div>
    </div>
  )
}