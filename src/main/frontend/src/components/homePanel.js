import React from "react";
import {Image} from 'react-bootstrap';
import studentsImage from '../images/students.jpg'
const HomePanel = () => {   
    // Play around with inline CSS styling
    const headingStyleObj = {
        fontSize: 26,
        color: "#4a54f1",
        textAlign: "center",
        paddingTop: "10px",
    }

    const imageStyleObj = {
        width: "50%",
    }

    return (
        <div>
            <h2 style={headingStyleObj}>Welcome to Student Information System Portal</h2>
            <Image src={studentsImage} style={imageStyleObj}/>
        </div>
    );
}


export default HomePanel;