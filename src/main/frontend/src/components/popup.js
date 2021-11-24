import React from 'react'
import { Button } from 'react-bootstrap'
import './popup.css'
import StudentForm from './studentForm'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h2 className="popup-title">Update {props.firstName} {props.lastName}</h2>
                <StudentForm />
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
                { props.childern }
            </div>
        </div>
    ) : "";
}

export default Popup
