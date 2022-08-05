// JavaScript source code



import React from 'react';
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function Admin() {
    const cent = {
        marginRight: 'auto',
        marginLeft: 'auto',
        color: 'green'
    }
    const [AdminUserId, SetAdminUserId] = useState("");
    const navigate = useNavigate();
    const [Password, setPassword] = useState("");
    const handlingsubmit = (e) => {
        const data = {
            UserId: AdminUserId,
            password: Password,
            color: 'whitesmoke'
        }
        axios.post('https://localhost:44391/api/Home/Administrator/Login', data).then((response) => {
            if (response.status = 200) {
                document.cookie = "userid=" + AdminUserId + ";";
                sessionStorage.setItem("adminId", AdminUserId);
                sessionStorage.setItem("Password", Password);
                //  console.log(document.cookie);
                navigate('/Admin/Admin_Landing', { replace: true });        
               
            } else if (response.status = 400) {
                alert("Userid is Invalid");
            }
            else if (response.status = 401) {
                alert("Password was worng");
                
                    
            }
        })

    }
    return (
        <Fragment>
            <h3>Administrator Login </h3>
            <div id='Adminrender' >
                <table style={cent }>
                    <tr><th>Admin Id:</th><td><input class='Int' type='text' placeholder="Enter your admin's User id" onChange={(e) => SetAdminUserId(e.target.value)}></input></td>
                    </tr>
                    <tr><th>Admin Password:</th><td><input class='Int' type='password' placeholder="Administrator password" onChange={(e) => setPassword(e.target.value)}></input></td>
                    </tr><tr> <td colspan="2"> <button class='btn btn-primary' onClick={(e) => handlingsubmit(e)}>Login</button></td></tr>

                </table>
                

                
               </div>
        </Fragment>)
}
export default Admin;