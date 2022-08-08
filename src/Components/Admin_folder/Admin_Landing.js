// JavaScript source code

import { Button } from 'react-bootstrap';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Redirect } from "react-router-dom";
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function Admin_Landing() {
    const navigate = useNavigate();
    let name = sessionStorage.getItem("adminId"); 
    if (sessionStorage.length == 0) {

        useEffect(() => { navigate('Admin', { replace: true }); })
       
     
    } else {
        const handle = (e) => {

            navigate('AddBooks', { replace: true });
        }
        const handle1 = (e) => {
            navigate('ReturningBook', { replace: true });
        }
        const myFunction = (e) => {
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }
        const logout = (e) => {
            sessionStorage.clear();
            
            navigate('Admin', { replace: true });
        }
        return (
            <div>

                <h1>Administrator Login {name}  </h1>
                <Button variant="success" onClick={(e) => handle(e)}> Books Section</Button>
                <Button variant="info" onClick={(e) => handle1(e)}> Student Section</Button>
                <Button varian="danger" onClick={(e) => logout(e)}>
                    Logout
                </Button>

            </div>)
    }
    
    
   
}
export default Admin_Landing;