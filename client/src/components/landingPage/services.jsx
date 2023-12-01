import React, { useState } from "react";
import electronicsIllustration from "../../assets/images/landingPage/services/electronic.jpg";
import plumbingIllustration from "../../assets/images/landingPage/services/plumbing.jpg";
import laundryIllustration from "../../assets/images/landingPage/services/laundry.jpg";
import "../../assets/styles/landingPage/services.scss";

function Services() {
  const khwServices = [
    {
      title: "Plumbing Protection",
      description: "We specialize in professional plumbing services that encompass skilled repair and installation, catering to all your plumbing requirements and ensuring optimal functionality of your system.",
      image: plumbingIllustration,
    },
    {
      title: "Laundry Protection",
      description: "Our furniture service offers a wide variety of sophisticated and elegant pieces to complement any home or office space.",
      image: laundryIllustration,
    },
    {
      title: "Electronics Warranty",
      description: "Our Electronics service offers expert repair and maintenance solutions for a wide range of electronic devices, guaranteeing peak performance and durability.",
      image: electronicsIllustration,
    },
  ];

  const handleReadMore = async (event, title) => {
    event.preventDefault();
    const service = title.split(" ")[0].toLowerCase();
    window.location = `/services/?title=${service}`;
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const allServices = khwServices.map((service, index) => {
    const isHovered = index === hoveredIndex;

    return (
      <div
        key={index}
        className="service--card bg-white shadow"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{ width: "300px", height: "200px" }}
          className="service-image"
        >
          <img alt="service illustration" src={service.image} />
          <figcaption>{service.title}</figcaption>
        </div>
        <div
          className="service--details"
          style={{
            display: isHovered ? "grid" : "none",
            width: "300px",
            height: "200px",
          }}
        >
          <div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <div className="readmore d-flex align-items-center justify-content-center">
            <p>
              <a
                href="#"
                onClick={(event) => handleReadMore(event, service.title)}
              >
                Read More...
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="services bg-light">
      <div className="service-head">
        <div>
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="all--services">{allServices}</div>
      <div className="container">
        <button className="btn btn-primary">
          <a
            href="/allservices"
            rel="noopener"
            className="text-decoration-none text-white"
          >
            View All Services
          </a>
        </button>
      </div>
    </div>
  );
}

export default Services;
