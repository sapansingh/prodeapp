import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from './logo.jpg';
import axios from "axios";

const Login = () => {

  const loginapi=process.env.REACT_APP_API_BASE_URL;
    let usernavi=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  // Check local storage on component mount
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('islogin');
    if (storedLoginStatus === '1') {
      setIsLogin(true);
    }
  }, []);

  // Handle login submission
  const handleLoginSubmit = async() => {
      let usercred={userid:username,password:password};

try{
  const response=await axios.post(loginapi+'/Login',usercred);
      const recivedata=response.data;
      let loginuser,password,roll_id,permission;
      recivedata.map((logindata)=>{
        loginuser=logindata.userid;
        password=logindata.password;
        roll_id=logindata.roll_id;
        permission=logindata.application_permission;
      });

      console.log(loginuser);
    if(loginuser!='' && loginuser!=null){
      localStorage.setItem('user', loginuser);
      localStorage.setItem('pass', password);
      localStorage.setItem('roll', roll_id);
      localStorage.setItem('islogin', '1');
      localStorage.setItem('permission', permission);
      setIsLogin(true);
      
        //  return <Navigate to="/" replace />;
        window.location.replace("/");
      usernavi('/');
    }else{
      alert("Congratulations User Authentication Failed");
    }
    
}catch(e){

}
    // Update login status
   
  };

  // Redirect if already logged in
  

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
          {/* <img className="flex flex-col justify-center p-8 xs:p-0 mx-auto md:w-full md:max-w-md" src={logo}/> */}
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
         
          <div className="px-5 py-7">
            <form>
               <label className="font-semibold text-sm text-gray-600 pb-1 block">User</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              onClick={handleLoginSubmit}
              type="button"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            </form>

          </div>


          <div className="p-5">
            <div className="grid grid-cols-3 gap-1">
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-bottom">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="inline-block ml-1">Back to your-app.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
