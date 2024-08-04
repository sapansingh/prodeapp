import React from "react";
import  { useState, useEffect } from 'react';
import axios, { Axios } from "axios";
import Sidebar from "../../Sidebar";
function  Recordings (){
    const [caseid, setCaseid] = useState('');
    const apiUrl39 = process.env.REACT_APP_API_BASE_URL_39;
    const apiUrl=process.env.REACT_APP_API_BASE_URL;
    const [tabledata,settabledata]=useState([]);



 

const getrecording=async(e)=>{
 
    const newData =[];
    e.preventDefault();

    const datedata={caseid:caseid};

try{

    const data=await axios.post(`${apiUrl39}/gvkprod/v2/app/vehicle_and_case/recording.php`,datedata);

    console.log(data.data);

    const respodata=data.data;

    if(data.data.status!=1){
        console.log("status not update right time");
        var count=0;

        respodata.map((jdata)=>{
            console.log(jdata.voicepath);
            const voicepath=jdata.voicepath;
            const serverip=jdata.server_ip;
          let	paths="0";
             var pathsss='';
             var myrr;
             var filename;
        
             var myArray = voicepath.split("/");
             
    
             if(myArray[4]=="calls"){
                 const tempt=voicepath.split("/var/www/html");
                  paths="http://"+serverip+tempt[1];		 
                   filename=myArray[8];
                
                 console.log(filename);
                 }
        
             else if(myArray[4]=="Transfer"){
                
                     const tempt=voicepath.split("/var/www/html");
                  paths="http://"+serverip+tempt[1];		 
                   filename=myArray[7];
                console.log(filename);
                                     
            }
             
             else{
                     
                  paths="http://"+serverip+voicepath;		 
               filename=myArray[5];
                 console.log(filename);
                 
             }
             
             let pather=filename.split(".");
             
             let   pather1=pather[0];
             var hg= {cases: paths,newpath:pather1}
           //  var kj=JSON.stringify(hg);
             pathsss=`${apiUrl39}/gvkprod/v2/app/recording/`+pather1+`.WAV`;
            getpathrecord(paths,pather1)

            count=count+1;
            console.log(tabledata);
            newData.push({ count: count, callid: jdata.callid, from_number: jdata.from_number ,to_number:jdata.to_number,duration:jdata.duration,call_type:jdata.call_type,path: pathsss,file:filename});


            console.log("table data down here");
           
console.log(pathsss);




    });
    settabledata(newData);
    console.log(tabledata);
    }
}catch (error) {
    console.error('Error submitting form:', error);
    // Handle error scenario (show error message, retry, etc.)
    alert('Error submitting form');
  }

}


const getpathrecord=async(path,newpath)=>{

    try{

       
        let hg= {cases: path,newpath:newpath}
       // let kj=JSON.stringify(hg);
        const reponse=await axios.post(`${apiUrl39}/gvkprod/v2/app/recording/record.php`,hg);
        console.log(reponse.data);
       
    }catch(e){
        console.log("Failed to get recording please check case id");
    }
}
const downloadfile=(filepth,filename)=>{

}
const menu=[{name:'Call Recording',href:'callrecording'}];
return(

<>
<Sidebar datar={menu}/>
<div className="flex flex-col space-y-4">
      <div className="flex justify-center m-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">Case Id</label>
        <input
          type="text"
          value={caseid}
          onChange={(e) => setCaseid(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        
      </div>
     
      <button 
           onClick={getrecording}   
          className="mt-6 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
        >
          LoadData
        </button>

        <button
        onClick={getrecording}          
          className="mt-6 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{display:"flex",marginLeft:"20px"}}
        >
          Save
        </button>
    </div>
    </div>
  

    <div className="flex justify-center m-2">

 
<div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{height:600}}>
<table className="w-full text-sm text-left rtl:text-right  dark:text-blue-100">
    <thead className="text-xs text-black uppercase  border-b border-blue-400 dark:text-black">
        <tr>
        <th scope="col" className="px-6 py-3">
            Sn
            </th>
            <th scope="col" className="px-6 py-3">callid</th>
<th scope="col" className="px-6 py-3">From numbers</th>
<th scope="col" className="px-6 py-3">To numbers</th>
<th scope="col" className="px-6 py-3">Call type</th>

<th scope="col" className="px-6 py-3">duration</th>
<th scope="col" className="px-6 py-3">Download</th>
        </tr>
    </thead>
    <tbody>
   { 
   
        tabledata.map((newtabledata)=>(
        
              <tr className="border-b hover:bg-blue-500">
                 <td className="px-6 py-4">
              {newtabledata.count}
              </td>
              <td  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100">
              {newtabledata.callid}
              </td>
              <td className="px-6 py-4">
              {newtabledata.from_number}
              </td>
              <td className="px-6 py-4">
              {newtabledata.to_number}
              </td>
              <td className="px-6 py-4">
              {newtabledata.call_type}
              </td>
              <td className="px-6 py-4">
              {newtabledata.duration}
              </td>
         
              <td className="px-6 py-4">
                  <a  href={`${apiUrl}/download?fileUrl=${newtabledata.path}&filename=${newtabledata.file}`} download={newtabledata.file} target="_blank" type="application/octet-stream" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Download</a>
           
              </td>
          </tr>

        ))}

 
    </tbody>
</table>
</div>
  




        </div>
</>


)


}
export default Recordings;