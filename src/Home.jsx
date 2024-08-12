import React,{useEffect,useState} from "react";
import Navigationbar from "./components/navigation.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assetsmaster from "./components/pages/assetsmaster/Assetsmaster.jsx";
import PenltyDeshbord from "./components/pages/PenaltyDeshbord.jsx";
import Analytics from "./components/pages/analytics/Analyticsdata.jsx";
import Footer from "./Footer.js";
import Recordings from "./components/pages/recording/Recording.jsx";
import Newana from "./components/pages/analytics/Newana.jsx";
import Sidebar from "./components/Sidebar.js";
import Login from "./components/Login.jsx";
import { useNavigate } from "react-router-dom";


function Home(){


  return(
  <>    
     <Router>
 
     <div className="pl-58 mt-16" style={{height:'790px'}}>
  <Routes>
  <Route path="/" element={<ProtectedRoute />} />
  <Route path="/Login" element={<Login />} />
        <Route path="/penalty" element={<ProtectedRoute component={PenltyDeshbord} />} />
        <Route path="/Assetsmaster" element={<ProtectedRoute component={Assetsmaster} />} />
        <Route path="/Assetsmaster/:canwe" element={<ProtectedRoute component={Assetsmaster} />} />
        <Route path="/Analytics/:canwe" element={<ProtectedRoute component={Newana} />} />
        <Route path="/callrecording" element={<ProtectedRoute component={Recordings} />} />
     
        </Routes>
       
          </div>
     </Router>
     <Footer />
    </>
  );
}

function ProtectedRoute({ component: Component }) {
    const [isLogin, setIsLogin] = useState(true); // Assume logged in by default
    const navigate = useNavigate();
  
    useEffect(() => {
      const valLogin = localStorage.getItem('islogin');
      if (valLogin === '1') {
        setIsLogin(true);
      } else {
        setIsLogin(false);
        navigate('/'); // Redirect to login if not authenticated
      }
    }, [navigate]);
  
    if (!isLogin) {
      return <Login />;
    }
  
    return (
      <>
        <Navigationbar />
        {Component && <Component />}
      </>
    );
  }

export default Home;
