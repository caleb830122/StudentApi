import React from 'react'
import { Button, Image } from 'react-bootstrap'
import './popup.css'
import StudentForm from './studentForm'
import profileIcon from '../images/profile.png'
import axios from 'axios'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div>  
                    <Image src={profileIcon} width="20%"/>
                </div>    
                <h2 className="popup-title">{props.firstName} {props.lastName}</h2>
                <h3>Major: {props.major}</h3>
                <Button className="delete-btn" variant="danger" onClick={() => handleDelete(props.id)}>Delete</Button>
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
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


export default Popup
