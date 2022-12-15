import React from 'react';
import './Health.css';

export default function Health(){
  return(
    <div className="health-page">
       <div className="d-flex flex-column mb-3">
         <div className="p-2 health-in">
           </div>
         
        <div className="p-2 imag-cap">
          <ul>
            <li>
          <a href="#">
            <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
            Adult Onset
          </a>
           </li>
           </ul>
          </div>
      
        <div className="p-2 img-cap">
        <ul>
            <li>
          <a href="#">
            <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%201.svg?raw=true" />
            Carrier Risk
          </a>
           </li>
           </ul>
        </div>
        <div className="p-2 img-cap"><ul>
            <li>
          <a href="#">
            <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/StrandBrandGuide-14%202.svg?raw=true" />
          </a>
           </li>
           </ul></div>
           <div className="p-2 img-cap"><ul>
            <li>
          <a href="#"></a>
           </li>
           </ul></div>
      </div>
      </div>
    
  )
}