import React from "react";
import NavBar from "./customerUi/navbar";
import Banner from "./customerUi/banner";
import RecentRequest from "./customerUi/request-dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/customerUi/customerMain.scss";
import NewServiceRequestForm from "./customerUi/request-form";




export default function Dashboard () {
  const [showRequestForm, toggleRequestForm] = React.useState(false);
  function toggleForm () {
    toggleRequestForm(oldVal => !oldVal);
  }
  return (
    <div className="bg-dark fixed-top" style={{height: "100vh", paddingTop: "10px"}}>
        <NavBar />
        <Banner />
        <RecentRequest toggleForm={toggleForm}/>
        <NewServiceRequestForm showRequestForm={showRequestForm} toggleForm={toggleForm}/>
    </div>
  )
}