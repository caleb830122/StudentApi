import React from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import "./profile.css";

const Profile = () => {
    return (
        <>
            <div className="profile">
                <IconContext.Provider value={{ color: "#3c5076", size: "200" }}>
                    <FaIcons.FaUserCircle />
                </IconContext.Provider>
                <h1>Username</h1>
            </div>
            <div className="profile-info">
                <h4>Birth date</h4>
                <h4>Cellphone</h4>
                <h4>Address</h4>
            </div>
        </>
    );
};

export default Profile;
