import React from "react";
import Piecharts from "./charts/Piechart";
import Sidebar from "../Sidebar";





export default function Deshobord(){


  const menu=[];
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
   
        <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="100" name="Total Case" colorrt="#a5ff45" /></div>
        <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="50" name="Close Close"  colorrt="#FF4560" /></div>
        <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="30" name="Pending"  colorrt="#4589ff" /></div>
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="80" name="Replication"  colorrt="#454eff" /></div>
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="75" name="Total Frv"  colorrt="#ff4564" /></div>
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="25" name="Frv Event"  colorrt="#e045ff" /></div>
          <div className="shadow-lg text-white" style={{width:400}}> <Piecharts bartype="radialBar" size="90" name="Close Event"  colorrt="#ff45bb" /></div>

      </div>
    </div>
          
          
        
        </main>
</>


);



}