import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {

        const [userdata,setuserdata]=useState([]);


        const serverapi=process.env.REACT_APP_API_BASE_URL;
   

    useEffect(()=>{
        const getdata=async()=>{

            try{
   
               const datart=await axios.get(serverapi+"/getuserdata");
   
               setuserdata(datart.data);
               console.log(datart.data)
   
            }catch(e){
   
            }
   
   
       }
       getdata();
    },[]);


  return (
    <>
      <header className="bg-white shadow p-4 sm:ml-64">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" style={{ display: 'flex' }}>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User List Permission Access Controller
          </h1>
        </div>
      </header>
      <main className="p-6 sm:ml-64" style={{height:675}}>
     



      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
           
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    User Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Password
                </th>
                <th scope="col" className="px-6 py-3">
                    Is Active
                </th>
                <th scope="col" className="px-6 py-3">
                   Roll
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>
          {userdata.map((user_data)=>(

<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            
<td className="px-6 py-4">
      {user_data.name}
    </td>
    <td className="px-6 py-4">
    {user_data.userid}
    </td>
    <td className="px-6 py-4">
    {user_data.password}
    </td>
    <td className="px-6 py-4">
    {user_data.is_active==="1"?'Active':"In-active"}
    </td>
    <td className="px-6 py-4">
    {user_data.rollid}
    </td>
    <td className="px-6 py-4">
        <Link to={`/admin/userUpdate/${user_data.userid}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</Link>
    </td>
</tr>
          ))}
                  </tbody>
    </table>
</div>


     
      </main>
    </>
  );
}

export default UserList;
