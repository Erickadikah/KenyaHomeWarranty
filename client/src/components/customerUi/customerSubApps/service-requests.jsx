import React from "react";
import NavBar from "../navbar.jsx";
import AllRequests from "../requests-page.jsx";
import "../../../assets/styles/customerUi/customerMain.scss";


export default function ServiceRequests () {
  return (
    <div className="All-requests">
      <NavBar />
      <AllRequests />
    </div>
  )
}

