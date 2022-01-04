import React, { useState, useEffect } from "react";
import axios from "axios";
import "./insuranceProfile.css";

let usernameFromLocalStorage = "";
if (localStorage.getItem("user") != null) {
    usernameFromLocalStorage = JSON.parse(
        localStorage.getItem("user")
    ).username;
}

export const InsuranceProfile = () => {
    const [userPolicy, setUserPolicy] = useState([]);

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

    useEffect(() => {
        fetchUserPolicy();
    }, []);

    const Policy = ({ userPolicy, setUserPolicy }) => {
        return userPolicy.map((d) => {
            return (
                <div>
                    <div className="policyProfile" key={d.policy_number}>
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

    return (
        <div>
            <Policy userPolicy={userPolicy} setUserPolicy={setUserPolicy} />
        </div>
    );
};

export default InsuranceProfile;
