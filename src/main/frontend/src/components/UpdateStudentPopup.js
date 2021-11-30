import React from 'react'
import { Button } from 'react-bootstrap'
import './popup.css'
import StudentUpdateForm from './studentUpdateForm'

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


export default UpdateStudentPopup;
