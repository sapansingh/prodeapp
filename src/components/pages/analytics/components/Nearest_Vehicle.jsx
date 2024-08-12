import React from "react";
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';





const Nearest_Vehicle=()=>{

    useEffect(() => {
        document.title = 'Callid wise data';
      }, []);
      
      
    return (
        <>
      
<div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{height:600}}>
<table className="w-full text-sm text-left rtl:text-right  dark:text-blue-100">
    <thead className="text-xs text-black uppercase  border-b border-blue-400 dark:text-black">
        <tr>
        <th scope="col" className="px-6 py-3">
            Sn
            </th>
            <th scope="col" className="px-6 py-3">callid</th>
<th scope="col" className="px-6 py-3">vehicle_no</th>
<th scope="col" className="px-6 py-3">contact_number</th>
<th scope="col" className="px-6 py-3">vehicle_distance</th>
<th scope="col" className="px-6 py-3">feedback_remarks_description</th>
<th scope="col" className="px-6 py-3">attempted_time</th>
<th scope="col" className="px-6 py-3">callback_time</th>
<th scope="col" className="px-6 py-3">last_caseid</th>
<th scope="col" className="px-6 py-3">assigned_time</th>
<th scope="col" className="px-6 py-3">BacktoBaseTime</th>
<th scope="col" className="px-6 py-3">chief_complaint_name</th>
<th scope="col" className="px-6 py-3">district_name</th>
<th scope="col" className="px-6 py-3">mandal_name</th>
<th scope="col" className="px-6 py-3">city_name</th>
<th scope="col" className="px-6 py-3">landmark</th>
<th scope="col" className="px-6 py-3">ero_id</th>


        </tr>
    </thead>
    <tbody>
   {/* { 
        assetdata.map((assets)=>(
              <tr className="border-b border-blue-400 hover:bg-blue-500">
                 <td className="px-6 py-4">
              {i=i+1}
              </td>
              <td  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
               {assets.device}
              </td>
              <td className="px-6 py-4">
              {assets.make}
              </td>
              <td className="px-6 py-4">
              {assets.model}
              </td>
              <td className="px-6 py-4">
              {assets.serial}
              </td>
              <td className="px-6 py-4">
              {assets.imei1}
              </td>
              <td className="px-6 py-4">
              {assets.imei2}
              </td>
              <td className="px-6 py-4">
              {assets.ports}
              </td>
              <td className="px-6 py-4">
              {assets.ram}
              </td>
              <td className="px-6 py-4">
              {assets.processor}
              </td>
              <td className="px-6 py-4">
              {assets.assetTag}
              </td>
              <td className="px-6 py-4">
              {assets.isActive}
              </td>
              <td className="px-6 py-4">
              {assets.assetsReceived}
              </td>
              <td className="px-6 py-4">
              {assets.warrantyExp}
              </td>
              <td className="px-6 py-4">
              {assets.billInvoice}
              </td>
              <td className="px-6 py-4">
                  <Link href="#" className="font-medium  hover:underline">Edit</Link>
              </td>
          </tr>

        ))} */}
   
 
    </tbody>
</table>
</div>
        </>
    )
}


export default Nearest_Vehicle;