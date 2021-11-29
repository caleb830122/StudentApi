import React, { useState }from "react";
import UpdateStudentPopup from "./UpdateStudentPopup";
import {Button, Image} from 'react-bootstrap';
const HomePanel = () => {   
    // const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <h1>Home</h1>
            
            <UpdateStudentButton />
            {/* <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}></Popup> */}
        </div>
    );
}

const UpdateStudentButton = ( { idFromParent , firstNameFromParent, lastNameFromParent, majorFromParent} ) => { 
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <h1>hi</h1>
            <Button className="update-btn" size="sm" onClick={() =>setButtonPopup(true)}>Update</Button>
            <UpdateStudentPopup trigger = {buttonPopup} setTrigger={setButtonPopup} id={idFromParent} firstName={firstNameFromParent} lastName={lastNameFromParent} major={majorFromParent}>
            </UpdateStudentPopup>
        </div>
        
    );  
}


export default HomePanel;