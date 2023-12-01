import React from "react";

export default  function SupportActionCall () {
    return (
        <div className="container bg-white shadow-sm" id="support-option">
            <p className="text-center">Reach our 24/7 Customer support team at KHW</p>
            <form action="">
                <textarea className="form-control" placeholder="Enter your message"/>
                <button className="btn btn-primary border-0">
                    Chat with us
                </button>
            </form>
        </div>
    )
}