import React from "react";
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';





const Callidwise=()=>{

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
<th scope="col" className="px-6 py-3">from_user_id</th>
<th scope="col" className="px-6 py-3">to_number</th>
<th scope="col" className="px-6 py-3">call_type</th>
<th scope="col" className="px-6 py-3">start_time</th>
<th scope="col" className="px-6 py-3">end_time</th>
         
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


export default Callidwise;