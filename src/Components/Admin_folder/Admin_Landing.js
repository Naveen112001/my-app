// JavaScript source code
//import bgimg from './Components/images/libimage.jpg';
import pic from "./BookImage.jpg";
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
                minHeight: '250px',
              
            }}>

                <h1 style={{
                    color: 'White',
                    fontStyle: 'italic'
                } }>Administrator Login: {name}  </h1>
                <div class="row">
                    <div class="column">
                        <div class="card1" onClick={(e) => handle(e)}>
                            <button id="landing" onClick={(e) => handle(e)}> Books Section</button>
                            <div id="result">
                            </div>
                        </div>
                    </div>
                
                    <div class="column">
                        <div class="card1" onClick={(e) => handle1(e)}>
                            <button id="landing" onClick={(e) => handle1(e)}> Student Section</button> <div id="result">
                            </div></div></div>
               
                    <div class="column">
                        <div class="card1" onClick={(e) => logout(e)}>
                <button id="landing"  onClick={(e) => logout(e)}>
                    Logout
                            </button>
                        </div></div></div>
              

            </div>)
    }
    
    
   
}
export default Admin_Landing;