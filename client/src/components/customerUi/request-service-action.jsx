import React from "react";
import "../../assets/styles/customerUi/user-dashboard.scss"

export default function RequestServiceActionCall () {
    const userId = window.location.href.split("=")[1];
    return (
        <div className="container bg-white shadow-sm" id="requests-action-call">
            <p className="text-dark">We got you covered</p>
            <div>
                <button className="btn btn-secondary"><a href={`/requestservice/?user=${userId}`} rel="noopener" className="text-decoration-none text-white">Request service</a></button>
                <button className="btn btn-dark"><a href={`/plans/?user=${userId}`} rel="noopener" className="text-decoration-none text-white">Choose A Plan</a></button>
            </div>
        </div>
    )
}