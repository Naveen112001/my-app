import React, { useState, useEffect } from 'react';

//import { Column, Table } from 'react-virtualized';
//import { List } from "react-virtualized";
function Books() {
    const [data, getData] = useState([])
    const URL = 'https://localhost:44391/api/Home/Books/Get';

    useEffect(() => {
        fetchData()
    }, [])

    const cent = {
        marginRight: 'auto',
        marginLeft: 'auto',
        color:'green'
    }

    
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
               
                console.log(response);
                getData(response);
            })

    }
    const st1 = {
        color: 'white', backgroundcolor:'grey'
    }
    const st = {
        textAlign: 'left',
        color:'red'
    }
    const s1 = {
        color: 'black',
        fontWeight:'bold'
    }
    const s2 = {
        marginRight: 'auto',
        marginLeft: 'auto', width: '450px', height: '450px', overflow: 'auto', color:'red'    }
   
    return (
        <>
            <h2> All Books Available in the Library</h2>
            <table style={cent}>
            <tbody>       
                  
                </tbody>
            </table>
           
              <div style={s2}>
                <table style={cent} cellspacing="0" cellpadding="1" border="1" width="400" height="700">
                                
                                    <th>Book Id</th>
                                    <th>Book Name</th>
                                    <th>Book Author</th>
                                    <th>Books Avaliable</th>
                            
                            {data.map((item, i) => (
                              
                                    <tr key={i}>
                                        <td>{item.bookId}</td>
                                        <td>{item.bookName}</td>
                                        <td>{item.author }</td>
                                        <td>{item.count}</td>
                            
                                    </tr>
                               ))}
                         
                            </table>
                        </div>
                    
           
        </>
    );
}

export default Books;
