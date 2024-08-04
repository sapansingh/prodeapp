import React,{useEffect,useState} from "react";
import Navigationbar from "./components/navigation.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assetsmaster from "./components/pages/assetsmaster/Assetsmaster.jsx";
import PenltyDeshbord from "./components/pages/PenaltyDeshbord.jsx";

import Footer from "./Footer.js";
import Recordings from "./components/pages/recording/Recording.jsx";
import Newana from "./components/pages/analytics/Newana.jsx";
import Login from "./components/Login.jsx";
import { useNavigate } from "react-router-dom";


function Home(){
  const [login,setlogin]=useState();
  
  const valLogins = localStorage.getItem('islogin');
  
    useEffect(()=>{
      setlogin(valLogins);
    console.log(login);
    },[login]);

  return(
  <>    
     <Router>
     <div className={login==='1'?"pl-58 mt-16":"pl-58"} style={{height:'790px'}}>
  <Routes>
     <Route path="/Login" element={<Login />} />
    
       <Route path="/" element={<ProtectedRoute component={PenltyDeshbord}/>} />
        <Route path="/penalty" element={<ProtectedRoute component={PenltyDeshbord} />} />
        <Route path="/Assetsmaster" element={<ProtectedRoute component={Assetsmaster} />} />
        <Route path="/Assetsmaster/:canwe" element={<ProtectedRoute component={Assetsmaster} />} />
        <Route path="/Analytics/:canwe" element={<ProtectedRoute component={Newana} />} />
        <Route path="/callrecording" element={<ProtectedRoute component={Recordings} />} />
        
        </Routes>
        </div>
     </Router>
 
    </>
  );
}

function ProtectedRoute({ component: Component }) {
    const [isLogin, setIsLogin] = useState(false); // Assume logged in by default
    const navigate = useNavigate();
  
    useEffect(() => {
      
      const valLogin = localStorage.getItem('islogin');
      if (valLogin === '1') {
        setIsLogin(true);
      } else {
        setIsLogin(false);
        navigate('/Login'); // Redirect to login if not authenticated
      }
    }, [navigate]);
  
    if (!isLogin) {
      return <Login />;
    }
  
    return (
      <>
        <Navigationbar />
        {Component && <Component />}
        <Footer />
      </>
    );
  }

export default Home;
