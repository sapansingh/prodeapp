import React from "react";
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';
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

const Analytics=()=>{
    const {canwe} =useParams();
        // const [startDate, setStartDate] = useState('');
        // const [endDate, setEndDate] = useState('');
        // useEffect(() => {
        //   const today = new Date();
        //   const yesterday = new Date(today);
        //   yesterday.setDate(today.getDate() - 1);
        //   setStartDate(yesterday.toISOString().split('T')[0]);
        //   setEndDate(yesterday.toISOString().split('T')[0]);
        // }, []);
      
    return (
        <>
      
      {/* <div className="flex flex-col space-y-4">
      <div className="flex justify-center m-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div style={{marginLeft:20}}>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <a  href=""
          type="submit"
          className="mt-6 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
        >
          LoadData
        </a>

        <a  href=""
          type="submit"
          className="mt-6 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
        >
          Save
        </a>
    </div>
    </div> */}
    <div className="flex justify-center m-2">

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
    </div>
        </>
    )


}

//08069808320
export default Analytics;