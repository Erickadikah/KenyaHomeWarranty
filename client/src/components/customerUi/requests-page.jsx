import React from "react";
import { Button, Container, FormControl, Table } from "react-bootstrap";

import { Link } from "react-router-dom";

const allRequests = [
    /*
    {
        serviceType: "Swimming Pool",
        Date: "2023-08-06",
        Status: "Pending",
    },
    {
        serviceType: "Plumbing",
        Date: "2023-08-09",
        Status: "Fulfiled",
    }*/
];

const requestOptions = ["--", "Cancel", "Track", "Edit"];



export default function AllRequests () {
    let output;
    if (allRequests.length < 1) {
        output = (
            <div id="blank-request">
                <p className="text-danger">You have no recent requests</p>
            </div>
        )
    }
    else {
        const tableData = allRequests.map((requestItem) => {
            const selectOptions = requestOptions.map((opt) => {
                return (
                    <option value={opt}>{opt}</option>
                )
            })
            return (
                <tr>
                    <td>{allRequests.indexOf(requestItem) + 1}</td>
                    <td>{requestItem.serviceType}</td>
                    <td>{requestItem.Date}</td>
                    <td>{requestItem.Status}</td>
                    <td><select className="form-select">{selectOptions}</select></td>
                </tr>
            )
        });

        output = (
            <div id="table-container">
                <Table className="table table-striped table-responsive table-primary table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Type</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </Table>
            </div>
        )
    }
    return (
        <div id="requests">
            <Container className="top-bar">
                <button className="btn btn-primary"><Link to="/requests/newRequest" className="sidebar-link">Request Service</Link></button>
                <div style={{display:"flex", marginTop: "10px"}}>
                    <label for="request-search"></label>
                    <FormControl type="text" placeholder="Search" id="request-search"/>
                    <div>
                        <Button variant="primary">Search</Button>
                    </div>
                </div>
            </Container>

            <Container className="requests-table">
                <p>All Requests</p>
                {output}
            </Container>
        </div>
    )
}