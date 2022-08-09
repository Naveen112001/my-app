// JavaScript source code
//import bgimg from './Components/images/libimage.jpg';
import pic from "C:/Users/MY LAP/source/repos/React_Project/my-app/src/Components/images/BookImage.jpg";
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
            <div style={{
                backgroundImage: 'url(' + pic + ')',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                padding: '10px 30px 40px 50px',
                fillOpacity: '1',
                backgroundSize: 'cover',
                minHeight: '250px'
            }}>

                <h1 style={{
                    color: 'White',
                    fontStyle: 'italic'
                } }>Administrator Login: {name}  </h1>
                <Button variant="success" onClick={(e) => handle(e)}> Books Section</Button>
                <br />
                <br />
                <Button variant="info" onClick={(e) => handle1(e)}> Student Section</Button>
                <br />
                <br />
                <Button varian="danger" onClick={(e) => logout(e)}>
                    Logout
                </Button>
                <br />
                <br />    <br />
                <br />    <br />
                <br />    <br />
                <br />    <br />
                <br />    <br />
                <br />    <br />
                <br />    <br />
              

            </div>)
    }
    
    
   
}
export default Admin_Landing;