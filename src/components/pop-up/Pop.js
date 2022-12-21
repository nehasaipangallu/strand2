import React ,{ useState }from 'react';
import './Pop.css';
import Table from 'react-bootstrap/Table';
import Sidepanel from '../../components/side-panel/side-panel';

export default function Pop(props){
  const [isPanelOpen, setPanelOpen] = useState(false);
  props.onLoad(true);
  function openPanel(event) {
    setPanelOpen(true);
  }

  function onPanelClose() {
    setPanelOpen(false);
  }
return(

 <div className="m-3 table-health-2">
 <div className="m-4">
   <Table responsive="sm">
     <tbody>
       <tr>
         <td>Gene</td>
         <td></td>
         
       </tr>
       <tr>
         <td>Variant Type</td>
         <td></td>
         
       </tr>
       <tr>
         <td>Zygosity</td>
         <td></td>
         
       </tr>
       <tr>
         <td>Inheritance</td>
         <td></td>
        
       </tr>
       <tr>
         <td>Variant Class</td>
         <td></td>
        
       </tr>
     </tbody>
   </Table>
   <p class="m-3">
     <strong>Gene</strong>: This is the basic unit of heredity. Its
     biochemical nature is a defined stretch of sequentially organized
     Deoxyribonu- cleotidyl Acid (DNA).
   </p>
   <p class="m-3">
     <strong>Variation</strong>: This refers to the differences in
     Sequential organization of DNA bases from a reference database.
   </p>
   <p class="m-3">
     <strong>Zygosity</strong>: Human is diploid. This means that every
     human has 2 copies of genetic Material (DNA), one from the mother
     and one from the father. Zygosity refers to any differences in DNA
     between these two copies. No difference is Homozygous; Any
     difference Is refereed to as heterozygous.
   </p>
   <p class="m-3">
     <strong>Variant Classification</strong>: This is a call out of the
     consequence of a change in DNA to the function of the gene and how
     it may be evaluated vis-à-vis an individuals health.
   </p>
 </div>
</div>

);
}