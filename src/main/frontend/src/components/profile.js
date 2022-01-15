import React, { useState, useEffect } from "react";
import Parser from "html-react-parser";
import axios from "axios";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import "./profile.css";

let usernameFromLocalStorage = "";
if (localStorage.getItem("user") != null) {
    usernameFromLocalStorage = JSON.parse(
        localStorage.getItem("user")
    ).username;
}
const Profile = () => {
    const [pic, setPic] = useState("");
    let profileImage64 = "";
    const fetchUserPicture = () => {
        let URL = `http://localhost:8082/img/${usernameFromLocalStorage}`;
        axios.get(URL).then((res) => {
            console.log(res.data);
            profileImage64 = res.data;
            setPic(profileImage64[0]);
            console.log(profileImage64[0]);
        });
    };

    useEffect(() => fetchUserPicture(), []);
    return (
        <>
            <div className="profile">
                {/* <IconContext.Provider value={{ color: "#3c5076", size: "200" }}>
                    <FaIcons.FaUserCircle />
                </IconContext.Provider> */}
                <img
                    className="profile-pic"
                    src={`${pic}`}
                    alt="profile image"
                />
                <h1>{usernameFromLocalStorage}</h1>
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
