import React, { useEffect, useState } from "react";
import "../../assets/styles/landingPage/aboutus-page.scss";
import logo from "../../assets/images/landingPage/logo.jpg";
import {FaArrowCircleLeft} from "react-icons/fa";
import OurTeam from "./our-team";


export default function AboutUsPage() {
  const statsFont = {
    fontSize: "30px",
  };

  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < value) {
          setCount(count + 1); //consider changing the interval with increase in customers
        }
      }, 20);

      return () => clearInterval(interval);
    }, [count, value]);

    return <h5 className="text-info-emphasis" style={statsFont}>{count}</h5>;
  };

  
  const handleBackNavigation = function () {
    window.history.back();
  }



  return (
    <section id="about--us">
      <nav className="d-flex justify-content-between bg-white shadow-sm fixed-top" id="nav">
        <div onClick={handleBackNavigation}><FaArrowCircleLeft /> back</div>
      </nav>

      <div className="logo">
        <img src={logo} alt="our-logo" id="logo" className="img img-responsive img-rounded" />
      </div>
          <div className="container" style={{padding: "20px"}}>
              <p>At <em><b>Kenya Home Warranty</b></em>, we hold a profound belief: your home is far more than just a financial asset; it's where your heart resides. A haven of solace after taxing days, a repository of familial bonds, and a cocoon of pure contentment. This sentiment is at the core of our mission, where we are dedicated to enhancing every facet of your home experience.</p>
              <p>We understand the profound importance of home, and this understanding propels us to offer you unparalleled services. Our vision reaches beyond mundane repairs; it envelops your peace of mind. Kenya Home Warranty exists to provide an extensive safeguard against unforeseen repair expenses, granting you the tranquility you deserve.</p>
              <p>Nurturing the concept of simplicity and swiftness, we extend to you a hassle-free experience. Our adept team of professionals stands unwaveringly ready to render exceptional service to homeowners. In a realm where discerning customers seek genuine value, we embark on a journey of delivering customer satisfaction beyond expectations.</p>
              <p>Our innovation-driven team is an embodiment of dedication. With tailor-made plans that resonate with your needs and steadfast services, our commitment is to shield your abode and your budget. We hold dear the values of transparency, integrity, and truthfulness. These values act as our North Star, guiding us in fostering relationships built on trust.</p>
              <p>Selecting Kenya Home Warranty is more than a choice; it's an affirmation of a shared vision. We strive to be the quintessential pioneers of home warranty services in Kenya, champions of your peace of mind against repair uncertainties. We envision a landscape where every homeowner is empowered with exceptional protection.</p>
          </div>
          {/* Our stats */}
          <div className="container coverage-stats bg-white shadow">
              <div>
              <h6>Covered home owners</h6>
              <AnimatedNumber value={50} />
              </div>
              <div>
              <h6>Covered Business owners</h6>
              <AnimatedNumber value={39} />
              </div>
          </div>
          <div className="container" id="vision-mission">
              <div className="mission">
                <div></div>
                <div>
                  <h2>Our Mission</h2>
                  <p>At Kenya Home Warranty, our mission is to transform the homeowner experience by providing comprehensive and reliable protection against unforeseen repair expenses. We are dedicated to offering innovative home warranty solutions that go beyond mere repairs, enhancing the peace of mind and contentment of every homeowner. With a commitment to simplicity, swiftness, and exceptional service, we strive to create a haven where homeowners can truly thrive.</p>
                </div>
              </div>
              <div className="vision">
                <div></div>
                <div>
                  <h2>Our Vision</h2>
                  <p>Our vision at Kenya Home Warranty is to be the leading pioneers of home warranty services in Kenya, setting new standards of excellence and reliability. We envision a landscape where every homeowner feels empowered and secure, knowing that their cherished abode is shielded from uncertainties. Through transparency, integrity, and a steadfast commitment to customer satisfaction, we aim to build lasting relationships founded on trust. As champions of your peace of mind, we aspire to create a brighter future for homeowners across the nation.</p>
                </div>
              </div>
          </div>
          <div>
            <OurTeam />
          </div>
        </section>
  );
}