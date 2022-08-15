// JavaScript source code

import axios from 'axios';
import React, { useState } from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
function GetOneBook() {
    
    const [bookName, setbookName] = useState("");
    const navigate = useNavigate();
  var name
    var bookAuthor;
    var bookCount;
    var booksid;
    const handleSubmit = (e) => {
        const url = "https://localhost:44391/api/Home/Books/Getbyname"
        const data = {
           name: bookName
        }
        const cent = {
            marginRight: 'auto',
            marginLeft:'auto'
        }
        axios.get(`${url}/${bookName}`)
            .then(function (response) {
                name = response.data.bookName;
                bookCount = response.data.count;
                bookAuthor = response.data.author;
                booksid = response.data.bookId;
                ReactDOM.render(
                    <div ><table style={cent}>
                    <tbody>
                    <tr>
                        <th>Book Id</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Book count</th>
                    </tr>
                    
                        <tr>
                            <td>{booksid}</td>
                            <td>{name}</td>
                            <td>{bookAuthor}</td>
                            <td>{bookCount}</td>
                        </tr>

                        </tbody></table></div>, document.getElementById("Result"))
             //   document.getElementById("Result").innerHTML = "Book Id:" + booksid + " book Title:" + bookTitle + " Book Author:" + bookAuthor + "Book Count:" + bookCount;
                document.getElementById("Result").style.color = "green";
                document.getElementById("centre").style.marginLeft = "auto";
                document.getElementById("centre").style.marginRight = "auto";
            })

            .catch((error) => {
                console.log(error);
                if (error.response.status == 400) {

                    ReactDOM.render(<div>No Books are available</div>, document.getElementById("Result"));
                    document.getElementById("Result").style.color = "red";
                } else { navigate('/Error', { replace: true }); }
               
            })
    }
    return (

        <div  id="centre">
    
    
            <div class="form-group">
                <input type="text" value={bookName} placeholder='Enter Book name' onChange={(e) => setbookName(e.target.value)} required />

                <button class="Searchbtn" onClick={(e) => handleSubmit(e)}><i class="fa fa-search"></i></button></div>
         
   

   
            <div id="Result" />
            
        </div>

    );
}

export default GetOneBook;
