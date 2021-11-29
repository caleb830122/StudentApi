import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import './popup.css'
import StudentForm from './studentForm'
import profileIcon from '../images/profile.png'
import axios from 'axios'
import UpdateStudentPopup from './UpdateStudentPopup'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div>  
                    <Image src={profileIcon} width="20%"/>
                </div>    
                <h2 className="popup-title">{props.firstName} {props.lastName}</h2>
                <div className="details">
                    <h3>Major: {props.major}</h3>
                </div>
                <Button className="delete-btn" variant="danger" onClick={() => handleDelete(props.id)}>Delete</Button>
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
                <UpdateStudentButton idFromParent={props.id} firstNameFromParent={props.firstName} lastNameFromParent={props.lastName} majorFromParent={props.major} />
                { props.children }
            </div>
        </div>
    ) : "";
}

const handleDelete = async (id) => {
    alert('Are you sure you want to delete this student?');
    console.log(id);
    try { 
        const res = await axios.delete(`http://localhost:8080/student/deleteStudent/${id}`);
        console.log(res.data);

        //Temporary solution by refreshing the page
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}

const UpdateStudentButton = ( { idFromParent , firstNameFromParent, lastNameFromParent, majorFromParent} ) => { 
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Button className="update-btn" variant="info" onClick={() =>setButtonPopup(true)}>Update</Button>
            <UpdateStudentPopup trigger = {buttonPopup} setTrigger={setButtonPopup} id={idFromParent} firstName={firstNameFromParent} lastName={lastNameFromParent} major={majorFromParent} lastName={lastNameFromParent} major={majorFromParent}>
            </UpdateStudentPopup>
        </div>
        
    );  
}


export default Popup
