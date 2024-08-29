import React from "react";
import { useParams } from 'react-router-dom';
import Sidebar from "../../Sidebar";
import Assignment from "../analytics/components/Asssignmentdata";


const Indexing=()=>{
   
    const {canwe} =useParams();
   
 
    const menu=[{name:'ANS',href:'meritalerts/ANS'},{name:'Path Deviation' ,href:'meritalerts/pathdev'},{name:'VNR',href:'meritalerts/VNR'},{name:'SNR',href:'meritalerts/SNR'}]

    return(
        <>
        
<Sidebar datar={menu}/>
<div className="p-4 sm:ml-64">



   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

   { canwe==="Assignment" ?<Assignment />:undefined }



        </div>
        </div>
        </>
    );


}



export default Indexing;