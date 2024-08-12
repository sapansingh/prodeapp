import React from "react";
import Sidebar from "../../Sidebar";
import { useParams } from "react-router-dom";
import UserCreate from "./UserCreate";
import UserList from "./Userlist";
import UserUpdate from "./UserUpdate";



function Admin(){
    const {canwe,userid}=useParams();
const menu=[{name:'User List',href:'Admin/UserList'},{name:'User Create',href:'Admin/UserCreate'}];

    return(
    <>
    <Sidebar datar={menu}/>

        {canwe=="UserList"?<UserList />:undefined}
        {canwe=="UserCreate"?<UserCreate />:undefined}
        {canwe=="userUpdate"?<UserUpdate userid={userid} />:undefined}
    </>
    );
}


export default Admin;
