import React from 'react';
import './App.css';
import './index.css';
import ReturningBook from './Components/Admin_folder/Student/ReturningBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetOneBook from './Components/GetOneBook';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddBooks from './Components/Admin_folder/Books/AddBooks';
import Books from './Components/Books';
import Admin from './Components/Admin_folder/Admin';
import Admin_Landing from './Components/Admin_folder/Admin_Landing';
import './Style.css';

import Student_Book_Registry from './Components/Student_Book_Registry';


function App() {
    const colors = {
      color:'white',
        textDecoration: 'none'
    }
   

    return ( <BrowserRouter>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous" > </script>
        <div class="Nav" >

        <h1 class = "headings">
                Library Management System
         </h1>
                    <nav class = "navcontainer">
        <ul class = "ulist"className = 'navbar-nav' >
        <li className = 'nav-item- m-1' >
                        <NavLink style={colors} class="Navlist"  className="btn btn-light btn-outline-primary" to = "/GetOneBook" >Get Book by Id </NavLink> </li>

        <li className = 'nav-item- m-1' >
        <NavLink style = { colors }        class = "Navlist"        className = "btn btn-light btn-outline-primary"        to = "/Books" >
        View All Books </NavLink> </li>

        <li className = 'nav-item- m-1' >
        <NavLink style = { colors }        class = "Navlist"        className = "btn btn-light btn-outline-primary"        to = "/Student_Book_Registry" >
        Student Book Registry </NavLink> </li> 
                    <li className='nav-item- m-1' >
                        <NavLink style={colors} class="Navlist" className="btn btn-light btn-outline-primary" to="/Admin" >
                            Administrator Section</NavLink> </li>
                </ul> <div class="bugger" >
        <div class = "line1" > </div> <div class = "line2" > </div> <div class = "line3" > </div> </div> </nav>
        </div>

        <div>
            <h2>  Welcome to Library website</h2>
            <Routes >
       
                <Route path='/GetOneBook' element={< GetOneBook />} />
                <Route path='Admin/Admin_Landing/AddBooks' element={< AddBooks />} />
                <        Route path='/Books' element={< Books />} />
                <        Route path = '/Student_Book_Registry' element={< Student_Book_Registry />} />
                <        Route path='Admin/Admin_Landing/ReturningBook' element={< ReturningBook />} />
                <        Route path='Admin/Admin_Landing' element={< Admin_Landing />} />
                <Route path='/Admin/*' element={< Admin />} />
            </Routes>
        </div>
        <div id="Body"> </div>

            </BrowserRouter>
    );
   
}
export default App;