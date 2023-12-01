import React from "react";
import RecentRequest from "./request-dashboard";
import RecentRequests from "./request-dashboard";



export default function ClientRecentRequests () {
    return (
        <div id="client-dashboard" className="bg-white shadow-sm" style={{paddingTop: 0}}>
            <RecentRequests />
        </div>
    )
}