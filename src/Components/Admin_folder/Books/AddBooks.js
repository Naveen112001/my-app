// JavaScript source code


import axios from 'axios';

import React, { Fragment, useState } from "react";
import * as ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

function AddBooks() {
    const cent = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
    const wid = { width: '100%' }
    const url = "https://localhost:44391/api/Home/Books"
    const [BookId, setBookId] = useState("");
    const [Title, setTitle] = useState("");
    const [Count, setCount] = useState("");
    const [Author, setAuthor] = useState("");
    const navigate = useNavigate();
    const handleSubmit=(e) => { 
    const data = {
        bookId: 0,
        bookName: Title,
        count: Count,
        author: Author
        }
       
        axios.post(url, data).then((json) => {
            alert("Added Successfully");
            navigate('/Books', { replace: true })

        })
            .catch((error) => {
                ReactDOM.render(<div>{{ error }}</div>, document.getElementById("error"))
        })

    }
    return (
         
            <Fragment>
                <br />
                <h5>Enter New Book Entry Details</h5>
            <br />
            <table style={cent} >
                <tr> <td><label>Book Id</label> </td> <td><input style={ wid} type="number" disabled required value={BookId} placeholder='Automatically Updated Field ' onChange={(e) => setBookId(e.target.value)} /></td></tr>
                <tr> <td><label>Book Title</label> </td> <td><input style={wid} type="text" required value={Title} placeholder='Book Title or Book Name' onChange={(e) => setTitle(e.target.value)} /></td></tr>
                <tr> <td><label>Count </label> </td> <td><input style={wid} type="number" required value={Count} placeholder='Number of Books available in Library' onChange={(e) => setCount(e.target.value)} /></td></tr>
                <tr> <td><label>Book Author</label> </td> <td><input style={wid} type="text" required value={Author} placeholder='Author of the Book' onChange={(e) => setAuthor(e.target.value)} /></td></tr>
                </table>
                <button class="btn btn-primary mb-2" onClick={(e) => handleSubmit(e)}>Add New Book</button>
            <div id="error"></div>
        </Fragment>
);
}
export default AddBooks;