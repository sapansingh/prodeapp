import React from "react";
import { useParams } from 'react-router-dom';
import{ useState, useEffect } from 'react';
import axios from "axios";
import Spinner from "../../../../Spinner";

const Vtr=()=>{
    useEffect(() => {
        document.title = 'VTR';
      }, []);
      const [startDate, setStartDate] = useState('');
      const [endDate, setEndDate] = useState('');
      const [Assignmentdata,setAssignmentdata]=useState([]); 
      const [istrue,setistrue]=useState(true);
      useEffect(() => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        setStartDate(yesterday.toISOString().split('T')[0]);
        setEndDate(yesterday.toISOString().split('T')[0]);
      }, []);
      const apiurl=process.env.REACT_APP_API_BASE_URL_39;
const getAssignmentdata=async()=>{
  setistrue(false);

  const oktr={ date1: startDate,
    date2: endDate};
    const satr=JSON.stringify(oktr);

    const formData = new FormData();
    formData.append('date1', startDate);
formData.append('date2', endDate);
  try{
    const responsedata=await axios.post(apiurl+"/gvkprod/v2/app/analytics/vtr.php",satr);
    const respodata=responsedata.data;  
    responsedata.data.length===0?setistrue(false):setistrue(true);
    setAssignmentdata(respodata);
   
    }catch(e){
        console.log("no data found");
    }
  

}

let i=0;

const downloadurl=`${apiurl}/gvkprod/v2/app/analytics/vtrexport.php?start=${startDate}&end=${endDate}`;
return (
<>
<div className="flex flex-col space-y-4">
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
      <button  href=""
          type="submit"
          className="mt-6 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
          onClick={getAssignmentdata}
        >
          LoadData
        </button>

        <a  href={downloadurl}
          type="submit"
          target="_blank"
          className="mt-6 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
        >Save
        </a>
    </div>
    </div>
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
    
    <label for="table-search" className="sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
    </div>
</div>

    {!istrue?<Spinner />:<div><div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{height:600}}>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" className="px-6 py-3">
            Sn
            </th>
            <th scope="col" className="px-6 py-3">callid</th>
<th scope="col" className="px-6 py-3">vehicle_no</th>
<th scope="col" className="px-6 py-3">contact_number</th>
<th scope="col" className="px-6 py-3">vehicle_distance</th>
<th scope="col" className="px-6 py-3">attempted_time</th>
<th scope="col" className="px-6 py-3">feedback_remarks_description</th>
<th scope="col" className="px-6 py-3">callback_time</th>
<th scope="col" className="px-6 py-3">ero_id</th>
<th scope="col" className="px-6 py-3">vb_id</th>
<th scope="col" className="px-6 py-3">chief_complaint_name</th>
<th scope="col" className="px-6 py-3">district_name</th>
<th scope="col" className="px-6 py-3">mandal_name</th>
<th scope="col" className="px-6 py-3">city_name</th>
<th scope="col" className="px-6 py-3">landmark</th>
            
       
</tr>
</thead>

<tbody>
 {  (Assignmentdata.map((assign)=>(
<tr className="border-b border-blue-400">
 <td className="px-3 py-3">
{i=i+1}
</td>
<td className="px-3 py-3 font-mediumwhitespace-nowrap dark:text-blue-100">
 {assign.callid}
</td>
<td className="px-3 py-3">
{assign.vehicle_no}
</td>
<td className="px-3 py-3">
{assign.contact_number}
</td>
<td className="px-3 py-3">
{assign.vehicle_distance}
</td>
<td className="px-3 py-3">
{assign.attempted_time}
</td>
<td className="px-3 py-3">
{assign.feedback_remarks_description}
</td>
<td className="px-3 py-3">
{assign.callback_time}
</td>
<td className="px-3 py-3">
{assign.ero_id}
</td>
<td className="px-3 py-3">
{assign.vb_id}
</td>
<td className="px-3 py-3">
{assign.chief_complaint_name}
</td>
<td className="px-3 py-3">
{assign.district_name}
</td>
<td className="px-3 py-3">
{assign.mandal_name}
</td>
<td className="px-3 py-3">
{assign.city_name}
</td>
<td className="px-3 py-3">
{assign.landmark}
</td>

</tr>

)))}
 
 
</tbody>
</table>
</div></div>}
</>
)
}


export default Vtr;