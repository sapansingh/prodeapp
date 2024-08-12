import React, { useEffect, useState } from "react";

import axios, { Axios } from "axios";


function UserUpdate({userid}){

  const [firstname,setfirstname]=useState();
  const [lastname,setlastname]=useState();
  const [user_id,setuser_id]=useState();
  const [roll,setroll]=useState();
  const [active,setactive]=useState();
  const [password,setpassword]=useState();


  const apiserver=process.env.REACT_APP_API_BASE_URL;
const [perdata,setperdata]=useState([]);
const [perloc,setperloc]=useState([]);  
useEffect(()=>{

  const getuserdata=async()=>{

    try{

      const respo=await axios.get(apiserver+"/getuserdatauserid",{params
        :{user_id:userid}});

        console.log(respo.data);

respo.data.map((userdatageter)=>{

  setfirstname(userdatageter.name);
  setlastname(userdatageter.lastname);
  setuser_id(userdatageter.userid);
  setroll(userdatageter.roll);
  setactive(userdatageter.active);
  setpassword(userdatageter.password)

});

    }catch(e){

    }

  }
  getuserdata();
  const getpermisiondata=async()=>{
    try{
      const permisiondata=await axios.get(apiserver+"/getpermision");
       const permdata=permisiondata.data;
       setperdata(permdata);

      
      
    }catch(e){
    
    }
      
    }
    getpermisiondata();
    
},[]);



const [selectedCategories, setSelectedCategories] = useState([]);
const handleCategoryChange = (event) => {
  const value = event.target.value;
  setSelectedCategories(prevCategories => {
    if (prevCategories.includes(value)) {
      return prevCategories.filter(name => name !== value);
    } else {
      return [...prevCategories, value];
    }
  });

  const filteredItems = perdata.filter(item =>
    selectedCategories.includes(item.name)
  );

  setperloc(filteredItems);

};






const submitdata=async()=>{


  // const onkr={
  //   user_id:"sapan",
  //   password:"95356",
  //   josn: encodeURIComponent(JSON.stringify(perloc))}



  const formData = new FormData();
formData.append('firstname', firstname);
formData.append('lastname', lastname);
formData.append('user_id', user_id);
formData.append('password', password);
formData.append('rollid', roll);
formData.append('isactive', active);
formData.append('josn', JSON.stringify(perloc));

 try{
  const postdata=await axios.post(apiserver+"/registerUserUpdate",formData,{
    headers: {
      'Content-Type': 'multipart/form-data' // Set content type
    }
  });

  const postjson=postdata.data;

  console.log(postjson);
if(postjson==1){
  alert("User Created")
}else{
  alert("try Again")
}
  
 }catch(e){

 }
  
}

    return(
    <>
    
    
<header className="bg-white shadow p-4 sm:ml-64 ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8" style={{display:"flex"}}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">User Permission Aceess Controller</h1>
          </div>
        </header>
        <main className="p-6 sm:ml-64 overflow-auto w-120" style={{height:675}}>
            
      <div className="space-y-12">
     

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first_name"
                  value={firstname}
                  type="text"
                  onChange={(e)=>{setfirstname(e.target.value)}}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                 value={lastname}
                   onChange={(e)=>{setlastname(e.target.value)}}
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}
{/* 
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="userid" className="block text-sm font-medium leading-6 text-gray-900">
                User Id
              </label>
              <div className="mt-2">
                <input
                 value={user_id}
                   onChange={(e)=>{setuser_id(e.target.value)}}
                  id="userid"
                  name="userid"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                 value={password}
                   onChange={(e)=>{setpassword(e.target.value)}}
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="roll" className="block text-sm font-medium leading-6 text-gray-900">
                Roll Id
              </label>
              <div className="mt-2">
                <select
                value={roll}
                onChange={(e)=>{setroll(e.target.value)}}
                  id="roll"
                  name="roll"
                  autoComplete="roll-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {roll==='1'?<option selected value="1">Admin</option>:<option value="1">Admin</option>}
                  {roll==='2'?<option selected value="2">User</option>:<option value="1">User</option>}
                  {roll==='3'?<option selected value="3">MixMode</option>:<option value="1">MixMode</option>}
                 
                
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                User Active Status
              </label>
              <div className="mt-2">
                <select
                 value={active}
                   onChange={(e)=>{setactive(e.target.value)}}
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {active==='1'?<option selected value="1">Active</option>:<option value="1">Active</option>}
                  {active==='0'?<option selected value="0">IN-Active</option>:<option value="0">IN-Active</option>}
                 
                 
                  
                </select>
              </div>
            </div>
            
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 ">
       

          <div className="mt-10 space-y-10">
           
              <legend className="text-sm font-semibold leading-6 text-gray-900">App Permissions</legend>
              <div className="mt-6 space-y-6 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               

               {perdata.map((datanew)=>(
  <div className="sm:col-span-2">
  <div className="flex h-6 items-center">
    <input
      value={datanew.name}
      type="checkbox"
      checked={selectedCategories.includes(datanew.name)}
      onChange={handleCategoryChange}
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    />
  </div>
  <div className="text-sm leading-6">
    <label htmlFor="comments" className="font-medium text-gray-900">
      {datanew.name}
    </label>
    <p className="text-gray-500">{datanew.to}</p>
  </div>
</div>

               ))}
               
              



       
           
              </div>
          
          
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          onClick={submitdata}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>

            
            </main>
    </>
    );
}


export default UserUpdate;
