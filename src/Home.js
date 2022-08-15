import React from 'react';
import './App.css';
import './index.css';
//import pic from '';
import bgimg from './Components/images/libimage.jpg';
import pic from "./Components/images/BookImage.jpg";

import ReturningBook from './Components/Admin_folder/Student/ReturningBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetOneBook from './Components/GetOneBook';
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import AddBooks from './Components/Admin_folder/Books/AddBooks';
import Books from './Components/Books';
import Admin from './Components/Admin_folder/Admin';
import Admin_Landing from './Components/Admin_folder/Admin_Landing';
import './Style.css';
function Home() {
    const Fit = {
        
    }
    const navigate = useNavigate();
    const onstart = (e) => {
        navigate('/Student_Book_Registry')
    }
    return (
        <div style={{
            backgroundImage: 'url(' + pic + ')',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: '10px 30px 40px 50px',
            fillOpacity: '1',
            backgroundSize: 'cover',
            minHeight:'250px'
        }} >
            <br />
            <h1 style={{ color: 'white' }}>  Welcome to Library website</h1>
            <h3 style={{ color: 'white' }}> Students Corner</h3> 
            <br /> <br /> <br /> <br /> <br /> <br />
            <button
                class="Start" onClick={(e) => onstart(e)}> Let's starts the Books Reservation </button>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    )    
}
export default Home;
