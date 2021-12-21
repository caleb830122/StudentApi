import React from 'react'
import Button from "react-bootstrap/Button";
function Logout() {
    return (
        <div>
            <h3 style={{padding: 20}}>Are you sure you want to logout?</h3>
           
            <Button className= "btn btn-sm m-2" onClick={() => handleLogoutYes()}>Yes</Button>
            <Button className= "btn btn-danger btn-sm m-2" onClick={() => handleLogoutNo()}>No</Button>
        </div>
    )
}

const handleLogoutYes = () => {
    localStorage.clear();
    window.location.href = "http://localhost:3000/"

}

const handleLogoutNo = () => {
    window.location.href = "http://localhost:3000/"
    
}

export default Logout
