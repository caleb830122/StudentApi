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
let profileImage64 = "";
const Profile = () => {
    const fetchUserPicture = () => {
        let URL = `http://localhost:8082/img/${usernameFromLocalStorage}`;
        axios.get(URL).then((res) => {
            profileImage64 = res.data.img64;
            console.log(profileImage64);
            // set userProfile state object with response data
            // setUserPolicy(
            //     res.data.map((d) => {
            //         return {
            //             username: d.username,
            //             policy_number: d.policy_number,
            //             effective_start: d.effective_start,
            //             effective_end: d.effective_end,
            //             property_value: d.property_value,
            //             premium: d.premium,
            //         };
            //     })
            // );
        });
    };
    useEffect(() => fetchUserPicture(), []);
    return (
        <>
            <div className="profile">
                <IconContext.Provider value={{ color: "#3c5076", size: "200" }}>
                    <FaIcons.FaUserCircle />
                </IconContext.Provider>
                {/* <img
                    src={{ uri: "data:image/png;base64," + profileImage64 }}
                    alt="profile image"
                /> */}
                <h1>{usernameFromLocalStorage}</h1>
            </div>
            <div className="profile-info">
                <h4>Birth date</h4>
                <h4>Cellphone</h4>
                <h4>Address</h4>
            </div>
            {`${profileImage64}`}
        </>
    );
};

export default Profile;
