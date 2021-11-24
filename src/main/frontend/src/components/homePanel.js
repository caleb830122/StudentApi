import React, { useState } from "react";
import Popup from './popup';
const HomePanel = () => {   
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() =>setButtonPopup(true)}>Open Popup</button>
            <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} />
        </div>
    );
}

export default HomePanel;