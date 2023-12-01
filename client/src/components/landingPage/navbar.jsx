import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "../../assets/styles/landingPage/navbar.scss";



export default function LandingNavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" style={{paddingLeft: "10px", paddingRight: "10px"}}>
        <a className="navbar-brand text-primary" rel="noopener" href="/">
          <b>K<i>H</i>W</b>
        </a>
        <button
          className="navbar-toggler border-0"
          id="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{outline: 'none'}}
        >
          <HiOutlineMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'10%', zIndex: 999, background: '#ffffff', paddingLeft: '30px'}}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" rel="noopener" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="servicesDropdown" >
                <a className="dropdown-item" href="/services/?tittle=heating">
                  Heating & cooling systems
                </a>
                <a className="dropdown-item" href="/services/?tittle=electronics">
                  Electronics
                </a>
                <a className="dropdown-item" href="/services/?tittle=kitchen">
                  Kitchen Appliances
                </a>
                <a className="dropdown-item" href="/services/?tittle=laundry">
                  Laundry Appliances
                </a>
                <a className="dropdown-item" href="/services/?tittle=plumbing">
                  Plumbing
                </a>
                <a className="dropdown-item" href="/services/?tittle=roof">
                  Roof
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="/aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <div className="btn-group" style={{position: "fixed", right: "10px"}}>
                <button className="btn btn-primary btn-sm">
                  <a rel="noopener" href="/authuser/signin" className="text-decoration-none text-light">
                    SignIn
                  </a> / <a rel="noopener" href="/authuser/signup" className="text-decoration-none text-light">
                     SignUp
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}