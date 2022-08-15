
import axios from 'axios';
import pic from './books.jpg';
import React, { Fragment, useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

function AddBooks() {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.length == 0) { navigate('Admin', { replace: true }); }
    })
    
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
        <div style={{
            backgroundImage: 'url(' + pic + ')',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            padding: '10px 30px 40px 50px',
            fillOpacity: '1',
            backgroundSize: 'cover',
            minHeight: '550px'
          
        }}>
      
                <br />
            <br />
            <div class="card">

                <h2>Enter New Book Entry Details</h2>
            <table style={cent} >
                <tr> <td><label>Book Id</label> </td> <td><input style={ wid} type="number" disabled required value={BookId} placeholder='Automatically Updated Field ' onChange={(e) => setBookId(e.target.value)} /></td></tr>
                <tr> <td><label>Book Title</label> </td> <td><input style={wid} type="text" required value={Title} placeholder='Book Title or Book Name' onChange={(e) => setTitle(e.target.value)} /></td></tr>
                <tr> <td><label>Count </label> </td> <td><input style={wid} type="number" required value={Count} placeholder='Number of Books available in Library' onChange={(e) => setCount(e.target.value)} /></td></tr>
                <tr> <td><label>Book Author</label> </td> <td><input style={wid} type="text" required value={Author} placeholder='Author of the Book' onChange={(e) => setAuthor(e.target.value)} /></td></tr>
                </table>
             
                <button class="btn btn-primary mb-2" onClick={(e) => handleSubmit(e)}>Add New Book</button>
                <br />
                <br/>
            </div>
            <div id="error"></div>
        </div>
);
}
export default AddBooks;