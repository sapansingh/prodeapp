import axios from "axios";
import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";




export default function Totalassets(){
    const [assetdata,setassetdata]=useState([]);

    useEffect(()=>{

        const fetchassetdata=async()=>{
            try{

                const response=await axios.get("http://192.168.200.52:8083/assetsdata");

                setassetdata(response.data);
            }catch(err){
                console.error(err);
            }
        }
      
        fetchassetdata();
    },[]);

    var i=0;
    return(

<>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{height:600}}>
<table className="w-full text-sm text-left rtl:text-right  dark:text-blue-100">
    <thead className="text-xs text-black uppercase  border-b border-blue-400 dark:text-black">
        <tr>
        <th scope="col" className="px-6 py-3">
            Sn
            </th>
            <th scope="col" className="px-6 py-3">
            Device
            </th>
            <th scope="col" className="px-6 py-3">
            Make
            </th>
            <th scope="col" className="px-6 py-3">
            Model_no
            </th>
            <th scope="col" className="px-6 py-3">
            Serial_no
            </th>
            <th scope="col" className="px-6 py-3">
            Imei_no1
            </th>
            <th scope="col" className="px-6 py-3">
            imei_no2
            </th>
            <th scope="col" className="px-6 py-3">
            Ports
            </th>
            <th scope="col" className="px-6 py-3">
            Ram
            </th>
            <th scope="col" className="px-6 py-3">
            processor
            </th>
            <th scope="col" className="px-6 py-3">
            Asset_tag
            </th>
            <th scope="col" className="px-6 py-3">
            Is_active
            </th>
            <th scope="col" className="px-6 py-3">
            Assets_recieved
            </th>
            <th scope="col" className="px-6 py-3">
            Warranty_exp_date
            </th>
            <th scope="col" className="px-6 py-3">
            bill_invoice
            </th>
            <th scope="col" className="px-6 py-3">
              Update
            </th>
        </tr>
    </thead>
    <tbody>
   { 
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

        ))}
   
 
    </tbody>
</table>
</div>

</>

    );
}