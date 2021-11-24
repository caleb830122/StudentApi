import React from 'react'
import { Button } from 'react-bootstrap'
import './popup.css'
function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <h1 className="popup-title">Test popup</h1>
                <Button className="close-btn" onClick={() => props.setTrigger(false)}>close</Button>
                { props.childern }
            </div>
        </div>
    ) : "";
}

export default Popup
