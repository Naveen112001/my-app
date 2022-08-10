// JavaScript source code
import React from 'react'; 
import pic from "C:/Users/MY LAP/source/repos/React_Project/my-app/src/Components/images/errorImg.png";
import { Button } from 'react-bootstrap';
function Errors() {
    return (<div style = {{
        backgroundImage: 'url(' + pic + ')',
           backgroundRepeat: 'no-repeat',
               backgroundAttachment: 'fixed',
        backgroundPosition:'center',
                   fillOpacity: '1',
                           backgroundSize: '500px',
                               minHeight: '250px'
    }}  >
        <div class="container">
Some thing Went worng Try again later        </div>
    </div>)
}
export default Errors;