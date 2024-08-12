import React,{useState,useEffect} from "react";
import ColumnChart from "./ColumnChart";
import axios from "axios";
import ColumnChartyear from "./ColumnChartyears";
import Sidebar from "../Sidebar";


export default function PenltyDeshbord(){

  const apiserver=process.env.REACT_APP_API_BASE_URL;
 
  const [monthlydata,setmonthlydata]=useState([]);
  const [yeardata,setyeardata]=useState([]);
  useEffect(()=>{
    const fetchdataofmonth=async()=>{

     try{
      const reponse=await axios.get(apiserver+"/getmonthlydata");
      const reponseyear=await axios.get(apiserver+"/yearly");

      setmonthlydata(reponse.data);
      setyeardata(reponseyear.data);

      

     }catch(err){
      console.error()
     }
    

    }
  
    fetchdataofmonth();
  },[]);

  //const data2023=monthlydata.map(datap=>datap.total_amount);
  const data2023=monthlydata.filter(monthdatar=>monthdatar.year=="2023");
  const data2024=monthlydata.filter(monthdatar=>monthdatar.year=="2024");

  let data23=data2023.map((datart=>datart.total_amount));
  let data23list=data2023.map((datart=>datart.month));
  let data24=data2024.map((datart=>datart.total_amount));

let yearext=yeardata.map((rtp)=>rtp.year);
let yearamound=yeardata.map((tyr)=>tyr.total_amount);


const menu=[];

return(
<>
<Sidebar datar={menu}/>
<header className="bg-white shadow p-4 sm:ml-64 ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" style={{display:"flex"}}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Penalty 108 Dashboard</h1>    
          </div>
        </header>
<main className="p-4 sm:ml-64" style={{height:675}}>
       

        <div className="grid grid-cols-3 gap-3">
      
        <div className="p-4">   <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
       
       <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
  
       <ColumnChartyear names={yearext} datas={yearamound}  />
 </div>
        
        </div></div>
  <div className="p-4">   <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
       
       <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
  
       <ColumnChart datachart={data23} year={2023}/>
 </div>
        
        </div></div>
  <div className="p-4">   <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
       
       <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
  
       <ColumnChart datachart={data24} year={2024}/>
 </div>
        
        </div></div>

  
     
</div>

        </main>
   
</>


);



}