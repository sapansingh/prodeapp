import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.jpg';




const Sidebar=({datar})=>{

    
    const baseurl=process.env.REACT_APP_API_BASE_URL_SELF;
    return(
<>



<aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <img src={logo}/>
      <ul className="space-y-2 font-medium mt-20">
      {datar.map((userdata)=>(  
                    <li>   
                    <Link to={`${baseurl}/${userdata.href}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group active">
                       <span className="ms-3">{userdata.name}</span>
                    </Link>
                  </li> 
              
                

))}
       
      
      </ul>
   </div>
</aside>

</>

    )
}


export default Sidebar;