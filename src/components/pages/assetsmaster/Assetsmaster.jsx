import React from "react";
import Card from "./Cardbtn";
import { useParams } from 'react-router-dom';
import Totalassets from "./Totalassets";
import Addassets from "./Addassets";
import Sidebar from "../../Sidebar";


export default function Assetsmaster(){

const menu=[{name:'Total Assets',href:'assetsmaster/totalassets'},{name:'Add Assets',href:'assetsmaster/newadd'}];
 const {canwe}=useParams();
return(

<>
<Sidebar datar={menu}/>
<header className="bg-white shadow p-4 sm:ml-64">
          <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">GHS Assets</h1>
          </div>
        </header>
<main className="p-4 sm:ml-64">
          <div className="mx-auto  px-4 py-6 sm:px-6 lg:px-8">
       
          <div className="flex justify-center">
      {/* <Card hyper="totalassets" id='totalassets' title="Total Assets" backgroundColor="red-600" />

      <Card hyper="newadd" id='newadd' title="Add New Assets" backgroundColor="red-600" /> */}

    </div>
    <div className="flex justify-center m-2">

 
{/* sub routing between data and  */}
  { canwe==="totalassets" ? <Totalassets />:undefined
 }

  { canwe==="newadd" ? <Addassets />:undefined
 }
  

    </div>
           </div>



        </main>
</>


);



}