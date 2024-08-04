import React from "react";
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';





const Pilotapp=()=>{

    useEffect(() => {
        document.title = 'VTR';
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
            <th scope="col" className="px-6 py-3">vehicle_no</th>
<th scope="col" className="px-6 py-3">callid</th>
<th scope="col" className="px-6 py-3">Assigned_time</th>
<th scope="col" className="px-6 py-3">assigned_by</th>
<th scope="col" className="px-6 py-3">start_time</th>
<th scope="col" className="px-6 py-3">start_latitude</th>
<th scope="col" className="px-6 py-3">start_longitude</th>
<th scope="col" className="px-6 py-3">scene_arrival_time</th>
<th scope="col" className="px-6 py-3">scene_arrival_latitude</th>
<th scope="col" className="px-6 py-3">scene_arrival_longitude</th>
<th scope="col" className="px-6 py-3">scene_depature_time</th>
<th scope="col" className="px-6 py-3">scene_depature_latitude</th>
<th scope="col" className="px-6 py-3">scene_depature_longitude</th>
<th scope="col" className="px-6 py-3">institute_reach_time</th>
<th scope="col" className="px-6 py-3">institute_reach_latitude</th>
<th scope="col" className="px-6 py-3">institute_reach_longitude</th>
<th scope="col" className="px-6 py-3">ctn_no</th>
<th scope="col" className="px-6 py-3">odo_base_start</th>
<th scope="col" className="px-6 py-3">odo_scene</th>
<th scope="col" className="px-6 py-3">odo_hospital</th>
<th scope="col" className="px-6 py-3">odo_base_reach</th>
<th scope="col" className="px-6 py-3">released_by</th>
<th scope="col" className="px-6 py-3">released_time</th>
<th scope="col" className="px-6 py-3">HandoverTime</th>
<th scope="col" className="px-6 py-3">HandoverLatitude</th>
<th scope="col" className="px-6 py-3">HandoverLongitude</th>
<th scope="col" className="px-6 py-3">BacktoBaseTime</th>
<th scope="col" className="px-6 py-3">back_to_base_latitude</th>
<th scope="col" className="px-6 py-3">back_to_base_longitude</th>
 
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


export default Pilotapp;