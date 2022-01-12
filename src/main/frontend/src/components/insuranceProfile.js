import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./insuranceProfile.css";
import CurrencyInput from "react-currency-input-field";
import InsuranceNavbar from "./insuranceNavbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./profile";

// Get username from localStorage
let usernameFromLocalStorage = "";
if (localStorage.getItem("user") != null) {
    usernameFromLocalStorage = JSON.parse(
        localStorage.getItem("user")
    ).username;
}

export const InsuranceProfile = () => {
    const [userPolicy, setUserPolicy] = useState([]);
    const [propertyValueChange, setPropertyValueChange] = useState("");

    const fetchUserPolicy = () => {
        let URL = `http://localhost:8082/insurancePolicies/${usernameFromLocalStorage}`;
        axios.get(URL).then((res) => {
            console.log(res);
            // set userProfile state object with response data
            setUserPolicy(
                res.data.map((d) => {
                    return {
                        username: d.username,
                        policy_number: d.policy_number,
                        effective_start: d.effective_start,
                        effective_end: d.effective_end,
                        property_value: d.property_value,
                        premium: d.premium,
                    };
                })
            );
        });
    };

    const updatePropertyValue = async () => {
        let URL = `http://localhost:8082/insurancePolicies/${usernameFromLocalStorage}`;
        await axios({
            method: "patch",
            url: URL,
            data: {
                property_value: propertyValueChange,
            },
        });
        window.location.reload();
    };

    useEffect(() => {
        fetchUserPolicy();
    }, []);

    const Policy = ({ userPolicy, setUserPolicy }) => {
        return userPolicy.map((d) => {
            return (
                <div key={d.policy_number}>
                    <div className="policyProfile">
                        <HomeRoundedIcon fontSize="large" />
                        <h1>Homeowners Policy</h1>
                        <h2>{d.username}</h2>
                    </div>
                    <div className="policyProfile">
                        <p>Policy #: {d.policy_number}</p>
                        <p>
                            Effective: {d.effective_start.substring(0, 10)} ~{" "}
                            {d.effective_end.substring(0, 10)}
                        </p>
                        <p>Property value: {d.property_value}</p>
                        <p>Annual premium: {d.premium}</p>
                    </div>
                </div>
            );
        });
    };

    const PolicyPanel = () => {
        return (
            <div>
                <Policy userPolicy={userPolicy} setUserPolicy={setUserPolicy} />
                <label>
                    If your property value has changed, please update it here:
                </label>
                <br />
                {/* <input
                type="text"
                placeholder="New property value"
                onChange={(e) => setPropertyValueChange(e.target.value)}
            /> */}
                <CurrencyInput
                    prefix="$"
                    id="input-example"
                    name="input-name"
                    placeholder="Please enter a number"
                    decimalsLimit={2}
                    onChange={(e) => setPropertyValueChange(e.target.value)}
                />
                <button onClick={updatePropertyValue}>Update</button>
            </div>
        );
    };

    return (
        <>
            <InsuranceNavbar />
            <Routes>
                <Route path="/policyPanel" element={<PolicyPanel />} />
                <Route path="/profilePanel" element={<Profile />} />
            </Routes>
        </>
    );
};

export default InsuranceProfile;
