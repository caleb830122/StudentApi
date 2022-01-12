import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

// Sidebar item data
export const SidebarData = [
    {
        title: "Your Policy",
        path: "/insuranceProfile/policyPanel",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Your Claims",
        path: "/insuranceProfile/claimsPanel",
        icon: <AiIcons.AiFillFile />,
        cName: "nav-text",
    },
    {
        title: "Your Profile",
        path: "/insuranceProfile/profilePanel",
        icon: <FaIcons.FaUserCircle />,
        cName: "nav-text",
    },
];
