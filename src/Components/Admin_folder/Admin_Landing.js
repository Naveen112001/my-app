// JavaScript source code

import { Button } from 'react-bootstrap';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function Admin_Landing() {
    const navigate = useNavigate();

    const handle = (e) => {
        
        navigate('AddBooks', { replace: true });
    }
    const handle1 = (e) => {
        navigate('ReturningBook', { replace: true }); 
    }
    return (<div>
        <h1>Administrator Login  </h1>
        <Button variant="success" onClick={(e) => handle(e)}> Books Section</Button>
        <Button variant="info" onClick={(e) => handle1(e)}> Student Section</Button>
    </div>)
}
export default Admin_Landing;