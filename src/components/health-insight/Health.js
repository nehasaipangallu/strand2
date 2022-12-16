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
       <div className="p-2 carousel=health">
         
       </div>
    </div>
    </div>
  )
}