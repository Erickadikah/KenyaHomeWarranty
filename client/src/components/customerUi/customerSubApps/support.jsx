import React from "react";
import NavBar from "../navbar";
import ContactSupportPage from "../user-support";
import "../../../assets/styles/customerUi/customerMain.scss";


export default function SupportPage () {
    return (
        <div>
            <NavBar />
            <ContactSupportPage />
        </div>
    )
}
