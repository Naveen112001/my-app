// JavaScript source code
import ReactDOM from 'react-dom/client';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Edit from './Edit';
const cent = {
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'green',
    marginTop:'20px'
}

function ReturningBook() {
    
    const [data, getData] = useState([]);
    const foo = (a) => {
        if (a) { return "Returned"; }

        else { return "Not Returned"; }

    }
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.length == 0) { navigate('Admin',{replace: true }); }
    })
    const url1 = "https://localhost:44391/api/Home/Search/Student";
    const url2 = "https://localhost:44391/api/Home";
    var id = 0;
    const [studidData, SetidData] = useState("");
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(url2)
            .then((res) =>
                res.json())

            .then((response) => {
                //  console.log(response);
                getData(response);
            }).catch((Error) => {
               
            })

    }
    var ids;
    var studnames;
    var stubookids;
    var borrowdates;
    var returndates;
    const onhandlingSubmit = (e) => {
        if (studidData !== 0) {
            const data = {
                studentId: studidData
            }

            const comp = url1 + "/" + studidData;

            axios.get(comp, data).then(function (response) {

                 
                    ids = response.data.studentId;
                    id = response.data.id;
                    studnames = response.data.studentName;
                    stubookids = response.data.bookId;
                    borrowdates = response.data.borrowDate;
                    returndates = response.data.returnDate;

                    document.getElementById("sdata").innerHTML = "";
                    const root = ReactDOM.createRoot(document.getElementById('result'));
                    root.render(
                        <React.StrictMode>
                            <table style={cent}>
                                <tr>
                                    <th>Serial No</th>
                                    <th>
                                        Student Roll No</th>
                                    <th>Student Name
                                    </th>
                                    <th>Book Id</th>
                                    <th>Book Borrow date</th>
                                    <th>Book return date</th>
                                    <th>Return status</th>
                                </tr>

                                <tr >
                                    <td>{id}</td>
                                    <td>{ids}</td>
                                    <td>{studnames}</td>
                                    <td>{stubookids}</td>
                                    <td>{borrowdates.substring(0, 10)}</td>
                                    <td>{returndates.substring(0, 10)}</td>
                                    <td>{foo(response.data.isreturned)}</td>
                                </tr>

                            </table>
                            <Edit stid={ids} serialNo={id} />
                        </React.StrictMode>

                    );
                
            }).catch((Error) => {

                if(Error.response.status == 404)
            {
                const root = ReactDOM.createRoot(document.getElementById('result'));
                document.getElementById('result').style.color = 'red';
                root.render(<div>No results</div>);

                } else
                {
                    alert("Something went worng");
            }
            })
        
                
        }
        else {
            window.location.reload(false);
        }
        
    }

    const onhandledit = (id) =>
    {
        const data = {
            studentId: id
        }

        const comp = url1 + "/" + id;

        axios.get(comp, data).then(function (response) {
            ids = response.data.studentId;
            id = response.data.id;
            studnames = response.data.studentName;
            stubookids = response.data.bookId;
            borrowdates = response.data.borrowDate;
            returndates = response.data.returnDate;

            document.getElementById("sdata").innerHTML = "";
            const root = ReactDOM.createRoot(document.getElementById('result'));
            root.render(
                <React.StrictMode>
                    <table style={cent}>
                        <tr>
                            <th>Serial No</th>
                            <th>
                                Student Roll No</th>
                            <th>Student Name
                            </th>
                            <th>Book Id</th>
                            <th>Book Borrow date</th>
                            <th>Book return date</th>
                            <th>Return status</th>
                        </tr>

                        <tr >
                            <td>{id}</td>
                            <td>{ids}</td>
                            <td>{studnames}</td>
                            <td>{stubookids}</td>
                            <td>{borrowdates.substring(0, 10)}</td>
                            <td>{returndates.substring(0, 10)}</td>
                            <td>{foo(response.data.isreturned)}</td>
                        </tr>

                    </table>
                    <Edit stid={ids} serialNo={id} />
                </React.StrictMode>

            );

        }).catch((Error) => {

            if (Error.response.status == 404) {
                const root = ReactDOM.createRoot(document.getElementById('result'));
                document.getElementById('result').style.color = 'red';
                root.render(<div>No results</div>);

            } else {
                alert("Something went worng");
            }
        })
    
    }
    const s2 = {
        marginRight: 'auto',
        marginLeft: 'auto', width: '1000px', height: '450px', overflow: 'auto', color: 'red'
    }

    const onhandledelete = (id) => {

        var comp = "https://localhost:44391/api/Home/Student/Delete" + "/" + id;
        axios.delete(comp).then(function (response) {
            alert("Successfully Deleted");
            window.location.reload(false);           
        })
            .catch((Error) => {
                if (Error.response.status = 400) {
                alert("Something went worng");
                window.location.reload(false);
            }
        })
    }
    const onhandlereturn = (id) => {
        var comp = url1 + "/" + id;
      
        const data = {
            studentId: id
        }
       axios.get(comp, data).then(function (response) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); 
            var yyyy = today.getFullYear();
           today = yyyy + '-' + mm + '-' + dd;
           console.log(response.data.id);
            const data1 = {
                studentId: response.data.studentId,
                Id: response.data.id,
                studentName: response.data.studentName,
                bookId: response.data.bookId,
                borrowDate: response.data.borrowDate,
                returnDate: today,
                isreturned: true
           }
           if (response.data.isreturned) {
               alert("Already returned  please click edit to change");

           } else
           {
               console.log(data1.Id);
               comp = url2 + "/" + data1.Id;
               axios.put(comp, data1).then((JSON) => {
                   alert("Returned Successfully");
                   window.location.reload(false);
               }).catch((Error) => {
                   alert(Error);
                   console.log(Error);
               })
           }
           
        })
            .catch((Error) => { console.log(Error) })
            
            }
    
       
    return (
        
        <div class="PageLayout">
            <Fragment>
                <h2>Book Submission</h2>
                <input type="text" placeholder="Enter Student id to search" value={studidData} onChange={(e) => SetidData(e.target.value)}>
                </input><br/>
                <Button variant="success" onClick={(e) => onhandlingSubmit(e)}> Update list</Button><br/>  
                <br/>
                <div  id="sdata">
                    <div style={s2}>
                    <table style={cent} cellspacing="0" cellpadding="1"  width="900" height="500">
                    <tbody>
                        <tr>
                            <th>
                                Student Id</th>
                            <th>
                                Book Id</th>
                            <th>Student Name</th>
                            <th>Book Borrow date</th>
                                <th>Book return date</th>
                                <th>Book return status</th>
                        </tr>
                        {data.map((item, i) => (
                           <tr class='tablerows' key={i}>
                                <td class='Id'>{item.studentId}</td>
                                <td class='Id'>{item.bookId}</td>
                                <td class='Studentname'>{item.studentName}</td>
                                <td class='dates'>{item.borrowDate.substring(0, 10)}</td>
                                <td class='dates'>{item.returnDate.substring(0, 10)}</td>
                                <td class='status'>{foo(item.isreturned).toString()}</td>
                                <td class='buttons'><button class='Editing' onClick={(e) => onhandledit(item.studentId)}>Edit</button> </td> <td><button class='deleting' onClick={(e) => onhandledelete(item.studentId)}>Delete</button></td> <td class='buttons'><button  class='returnbook' onClick={(e) => onhandlereturn(item.studentId)}>Return Book</button></td>
                            </tr>

                        ))}
                        </tbody>
                    </table></div></div>
                <div id="result"></div>
                <div id="Show"></div>
                
            </Fragment>
            </div>
        
    
    )
}


export default ReturningBook;
