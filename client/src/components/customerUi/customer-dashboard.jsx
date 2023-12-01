import React from "react";
import "../../assets/styles/customerUi/user-dashboard.scss"
import NavBar from "./navbar";
import SupportActionCall from "./email-and-support-action";
import RequestServiceActionCall from "./request-service-action";
import ClientRecentRequests from "./recent-customer-requests";

export default function UserDashboard () {
    return  (
        <section id="user-dashboard">
            <div><NavBar /></div> {/*navigation bar*/}
            {/*main content*/}
            <div id="main-content">
                {/*dashboard content */}
                <div id="dashboard">{<ClientRecentRequests />}</div> {/**/}
                {/*aside conent */}
                <div id="aside-content">
                    <div>{<SupportActionCall />}</div> {/**/}
                    <div>{<RequestServiceActionCall />}</div> {/**/}
                </div>
            </div>
        </section>
    )
}
