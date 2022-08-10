// JavaScript source code


import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Edit(props) {
    const styles = {
        width: '200%'
    }
    const cent = {
        marginRight: 'auto',
        marginLeft: 'auto',
        color: 'green',
        marginTop: '50px'
    }
    
    const url = "https://localhost:44391/api/Home";
    const [id, setid] = useState("");
    const [studname, setstudname] = useState("");
    const [stubookid, stubook] = useState("");
    const [borrowdate, setborrowdate] = useState("");
    const [returndate, setreturndate] = useState("");
    const comp = url + "/" + props.serialNo;  
    const [data, getData] = useState()
    const URL = 'https://localhost:44391/api/Home/' + props.serialNo;
    var name="Enter name";
    var bookid="Enter Book id";
   
    useEffect(() => {
        fetchData()
    })
    
  
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                getData(response)
                console.log(response.studentName)
                name = response.studentName
   ;
                bookid = response.bookId;

            })

    }
  //  console.log(props.serialNo);
  //  console.log(props.stid);
    const handle = (e) => {
        const data = {
            id: props.serialNo,
            studentId: props.stid,
            studentName: studname,
            bookId: stubookid,
            borrowDate: borrowdate,
            returnDate: returndate

        }
     
        axios.put(comp, data).then((JSON) => {
            alert("Saved Successfully");
        })
            .catch((error) => {
              //  alert(error);
                if (error.response.status == 404)
                {
                    alert(error.response.data);
                }
                else {
                    alert("Somethind went worng");
                }
            })
    }
    return (
        <div>
            <h3>
              Student Book Record Updation
            </h3>
        
            <table style={cent}>
                <tr><td><input style={styles} width="100%" type="text" placeholder={name} value={studname} onChange={(e) => setstudname(e.target.value)}>
                    </input></td></tr>
                <tr><td><input style={styles} width="100%" type="number" placeholder={bookid} value={stubookid} onChange={(e) => stubook(e.target.value)}>
                    </input></td></tr>
                    <tr><td>  <input style={styles } width="100%" type="date" placeholder="Give borrow date" value={borrowdate} onChange={(e) => setborrowdate(e.target.value)}></input>
                    </td></tr><tr><td> <input style={styles} width="100%" type="date" placeholder="Give return date" value={returndate} onChange={(e) => setreturndate(e.target.value)}>
                    </input></td></tr>
                </table>
                <Button variant="info" onClick={(e) => handle(e)} >Update</Button>
               
    
        </div>
    )
}
export default Edit;