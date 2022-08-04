// JavaScript source code


import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
function Student_Book_Registry() {
    const cent = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
    const url = "https://localhost:44391/api/Home";
    const [studentname, setname] = useState("");
    const [studentId, setstudentId] = useState("");
    const [borrowdate, setborrowdate] = useState("");
    const [bookId, setBookId] = useState("");
    const [returndate, setrdate] = useState("");
    const data = {
        Id: 0,
        studentId: studentId,
        StudentName: studentname,
        BookId: bookId,
        BorrowDate: borrowdate,
        returnDate: returndate
    }
    const captstyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize:'30px'
    }
    const styles = {
        width:'200%'
    }
    const handleSubmit = (e) => {       
      axios.post(url, data).then((response) => {
            alert("Registered for the book Successfully");
         //   ReactDOM.render(<div>Added Successfully</div>, document.getElementById("result"));

        })
          .catch((error) => {
              if (error.response.status == 404) {
                  alert(error.response.data);
                  ReactDOM.render(<div><tr ><td>{error.response.data}</td></tr></div>, document.getElementById("result")); 
              }
              alert("worng data");
                ReactDOM.render(<div>{{ error }}</div>, document.getElementById("result"));
            })
       
  }
    return (
       
        <div className="App-container">
            
        <form>
                <table style={cent} >
                    <caption style={captstyle }> Student Book Registry</caption>
                    <tr>
                        <th>
                            Student Id/Roll no
                        </th>
                        <td>
                            <input style={styles} type="text" placeholder="Enter Roll no " value={studentId} onChange={(e) => setstudentId(e.target.value)} />
                        </td>
                    </tr>
                   
                    <tr>
                        <th>
                            Student Name
                        </th>
                        <td>
                            <input style={styles}  type="text" placeholder="Enter Student name" value={studentname} onChange={(e) => setname(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Book Id
                        </th>
                        <td>
                            <input style={styles}  type="number" placeholder="Enter Book Id" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
                        </td>
                        </tr><tr>
                        <th>
                            Borrowing Date
                        </th>
                        <td>
                            <input style={styles}  type="date" placeholder="Enter book borrow date" value={borrowdate} onChange={(e) => setborrowdate(e.target.value)} />
                        </td></tr><tr>
                        <th>
                            Last date to return
                        </th>
                        <td>
                            <input style={styles}  type="date" placeholder="Enter book return date" value={returndate} onChange={(e) => setrdate(e.target.value)} />
                        </td>
                    </tr>
                    <div id="validation"></div>
                   
                    
                   
                    
          
                </table>
                <table style={cent}><button class="btn1" onClick={(e) => handleSubmit(e)} > Submit</button></table>
                   
        </form> 
        <div id="result"></div>
    </div>
        );

}
export default Student_Book_Registry;
