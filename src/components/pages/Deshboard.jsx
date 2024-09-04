import React from "react";
import Piecharts from "./charts/Piechart";
import Sidebar from "../Sidebar";
import Cardchart from "./Cardchart";

import { useState,useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios, { Axios } from "axios";



export default function Deshobord(){

  const [open, setOpen] = useState(false)
  const [data,setdata]=useState([]);
  const menu=[];
const load=()=>{

setOpen(true);
loadpendingdata();
}
 


  const loadpendingdata=async()=>{
      const pendingresponse=await axios.get("http://192.168.200.224/gvkprod/v2/app/charts/allcase_data.php");

        console.log(pendingresponse.data);

        setdata(pendingresponse.data);
  }

return(
<>

<Sidebar datar={menu}/>
<header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className="p-4 sm:ml-64" style={{height:730}}>
     
        <div className="p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-4 gap-4">
        {/* Grid Items */}
       
        <Cardchart onClick={load} title="Pending Cases" data="5"/>
        <Cardchart onClick={load} title="Live VTR" data="5"/>
     

          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="80" name="Replication"  colorrt="#454eff" /></div>
          {/* <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="75" name="Total Frv"  colorrt="#ff4564" /></div> */}
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="25" name="Frv Event"  colorrt="#e045ff" /></div>
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="90" name="Close Event"  colorrt="#ff45bb" /></div>

     
      </div>
    </div>
          
          
        
        </main>

        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative max-w-4xl max-h-[80vh] overflow-auto rounded-lg bg-white text-left shadow-xl transition-all"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  Pending Cases
                </DialogTitle>
                <div className="mt-2 overflow-x-auto">
                  <div className="relative overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">Callid</th>
                          <th scope="col" className="px-6 py-3">vehicle_no</th>
                          <th scope="col" className="px-6 py-3">location_name</th>
                          <th scope="col" className="px-6 py-3">assigned_time</th>
                          <th scope="col" className="px-6 py-3">contact_number</th>
                          <th scope="col" className="px-6 py-3">vehicle_type_id</th>
                          <th scope="col" className="px-6 py-3">district_name</th>
                        </tr>
                      </thead>
                      <tbody>
                      
                        {data.map((recdata)=>
                        
                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">{recdata.callid}</td>
                        <td className="px-6 py-4">{recdata.vehicle_no}</td>
                        <td className="px-6 py-4">{recdata.location_name}</td>
                        <td className="px-6 py-4">{recdata.assigned_time}</td>
                        <td className="px-6 py-4">{recdata.contact_number}</td>
                        <td className="px-6 py-4">{recdata.vehicle_type_id}</td>
                        <td className="px-6 py-4">{recdata.district_name}</td>
                        </tr>
                        )}
                       

                   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Defuse
            </button>
            <button
              type="button"
              data-autofocus
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>

</>


);



}