import React from "react";
import aboutUsImage from "../../assets/images/landingPage/aboutus.jpg";
import "../../assets/styles/landingPage/about.scss"

export default function AboutUs() {
    return (
        <section id="aboutUs" className="bg-light">
            <h1 className="text-center text-dark-emphasis">About Us</h1>
            <div className="about-section">
                <div className="shadow">
                    <h1>Kenya <span className="text-primary"><i><b>Home</b></i></span> Warranty</h1>
                    <p>We believe that your home is the most valuable asset you can ever own, not financially, but because home is where our families dwell. It is where we all want to go after a hard stressful day. It is the place of happiness where we find rest. Kenya Home Warranty acknowledges that, and that’s why we are committed to making you enjoy every stay at home through our services. 
                    At the core of our products, we have our customers in mind. We provide your home with the most comprehensive protection against unexpected repair costs and give you peace of mind... 
                    </p>
                    <button className="btn btn-outline-primary"><a href="/aboutus" rel="noopener" className="text-dark text-decoration-none">Learn More</a></button>
                </div>
                <div>
                    <img src={aboutUsImage} alt="aboutUs" className="img img-responsive" />
                </div>
            </div>
        </section>
    );
}
