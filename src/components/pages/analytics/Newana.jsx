import React from "react";
import { useParams } from 'react-router-dom';
import Assignment from "./components/Asssignmentdata";
import Vna from "./components/Vna";
import Vtr from "./components/Vtr";
import Misscall from "./components/Misscall";
import Pilotapp from "./components/Pilotapp";
import Callidwise from "./components/Callidwise";
import Callid_wise_latlong from "./components/Callid_wise_latlong";
import Vtr_with_last_case_wise from "./components/Vtr_with_last";
import VBdata from "./components/VB";
import Nearest_Vehicle from "./components/Nearest_Vehicle";
import Sidebar from "../../Sidebar";
import Rawdata from "./components/Row_data";
import Pcrexport from "./components/Pcrexport";


const  Newana=()=>{
    const {canwe} =useParams();
   
 
    const menu=[{name:'Assignment',href:'Analytics/Assignment'},{name:'VNA' ,href:'Analytics/VNA'},{name:'VTR',href:'Analytics/VTR'},{name:'VB',href:'Analytics/VBdata'},{name:'Misscall' ,href:'Analytics/MISSCALL'},{name:'PILOTAPP' ,href:'Analytics/PILOTAPP'},{name:'Callidwise',href:'Analytics/Callidwise'},{name:'Callid_wise_latlong',href:'Analytics/Callid_wise_latlong'},{name:'Vtr_with_last_case_wise',href:'Analytics/Vtr_with_last_case_wise'},{name:'Nearest Vehicle',href:'Analytics/Nearest_Vehicle'},{name:'Epcr data',href:'Analytics/epcr'},{name:'Raw Data',href:'Analytics/Rawdata'}]
return(
<>
<Sidebar datar={menu}/>
<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

   { canwe==="Assignment" ?<Assignment />:undefined }

{ canwe==="VNA" ?<Vna />:undefined }
{ canwe==="VTR" ?<Vtr />:undefined }
{ canwe==="VBdata" ?<VBdata />:undefined }
{ canwe==="MISSCALL" ?<Misscall />:undefined }
{ canwe==="PILOTAPP" ?<Pilotapp />:undefined }
{ canwe==="Callidwise" ?<Callidwise />:undefined }
{ canwe==="Callid_wise_latlong" ?<Callid_wise_latlong />:undefined }
{ canwe==="Vtr_with_last_case_wise" ?<Vtr_with_last_case_wise />:undefined }
{ canwe==="Nearest_Vehicle" ?<Nearest_Vehicle />:undefined }
{ canwe==="epcr" ?<Pcrexport />:undefined }
{ canwe==="Rawdata" ?<Rawdata />:undefined }


   </div>
</div>

</>

)



}


export default Newana;