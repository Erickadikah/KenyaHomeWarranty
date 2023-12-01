import React from "react";
import NavBar from "../navbar";
import SettingsForm from "../user-settings";


export default function AccountSettings () {
    return (
        <div>
            <NavBar />
            <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", marginTop: "10px"}}><SettingsForm /></div>
        </div>
    )
}