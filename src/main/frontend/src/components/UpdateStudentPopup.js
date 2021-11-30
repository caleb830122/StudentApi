import React from 'react'
import { Button, Image } from 'react-bootstrap'
import './popup.css'
import StudentUpdateForm from './studentUpdateForm'
import profileIcon from '../images/profile.png'
import axios from 'axios'

function UpdateStudentPopup(props) {
    
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <StudentUpdateForm id={props.id} firstName={props.firstName} lastName={props.lastName} major={props.major} />
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
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


export default UpdateStudentPopup;
