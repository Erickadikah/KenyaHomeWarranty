import React from "react";
import checkIcon from "../../assets/images/landingPage/icons/check.png";
import { FaCheck } from "react-icons/fa";
import PageFooter from "./pageFooter";



function ClientStats(props) {
  return (
    <div className="container mt-5 service-stat">
      <div className="row">
        <div className="col-lg-4">
          <h4>Total Clients</h4>
          <p>{props.totalClients}+</p>
        </div>
        <div className="col-lg-4">
          <h4>Satisfied Clients</h4>
          <p>{props.satisfiedClients}%</p>
        </div>
        <div className="col-lg-4">
          <h4>Repeat Clients</h4>
          <p>{props.repeatClients}%</p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceTemplate(props) {
  return (
    <div className={`service ${props.title}`}>
      <div>
        <h1 className="text-center">{props.title}</h1>
        <img src={props.serviceImage} alt="service image" className="img img-responsive" />
      </div>
      <div className="top-nav box">
        <div>
          <h2>Description</h2>
        </div>
        <div>
          <button className="btn btn-primary"><a className="text-decoration-none text-white" href="/authuser/signup" rel="noopener">Get Started</a></button>
        </div>
      </div>
      <div className="description box">
        <p>{props.description}</p>
      </div>
      <div className="coverage box">
        <div>
          <h3>What is covered</h3>
          <ul>
            {props.covered.map((item, index) => {
              return (
                <li key={index}>
                  <FaCheck className="text-success" size={12}/><span> {item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="service-stats">
        <ClientStats
          totalClients={props.totalClients}
          satisfiedClients={props.satisfiedClients}
          repeatClients={props.repeatClients}
        />
      </div>
    </div>
  );
}
