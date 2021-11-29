import React from 'react'
import { Button, Image } from 'react-bootstrap'
import './popup.css'
import StudentForm from './studentForm'
import profileIcon from '../images/profile.png'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div>  
                    <Image src={profileIcon} width="20%"/>
                </div>    
                <h2 className="popup-title">{props.firstName} {props.lastName}</h2>
                <h3>Major: {props.major}</h3>
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
                { props.childern }
            </div>
        </div>
    ) : "";
}

export default Popup
