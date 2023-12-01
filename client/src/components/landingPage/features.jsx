import React from 'react';
import "../../assets/styles/landingPage/features.scss";


export default function FeaturesAndBenefits() {
  const randomColors = [
    "rgb(255, 0, 0)",        // Red
    "rgb(0, 255, 0)",        // Green
    "rgb(0, 0, 255)",        // Blue
    "rgb(255, 255, 0)",      // Yellow
    "rgb(255, 0, 255)",      // Magenta
    "rgb(0, 255, 255)",      // Cyan
    "rgb(255, 165, 0)",      // Orange
    "rgb(128, 0, 128)",      // Purple
    "rgb(0, 128, 0)",        // Dark Green
    "rgb(0, 0, 128)"         // Navy Blue
  ];

  const bulletColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  const khwBenefitsPack = {
    features: [
      "Comprehensive home warranty plans",
      "Experienced professionals providing exceptional service",
      "Customizable plans to fit individual needs",
      "Fast and reliable service",
      "Transparent and honest communication with customers"
    ],
    benefits: [
      "Comprehensive home warranty plans to protect homeowners from unexpected repair costs",
      "Peace of mind knowing that unexpected repairs will be covered by the warranty plan",
      "Experienced professionals dedicated to providing exceptional service to homeowners",
      "Customizable plans to fit the specific needs and budget of each homeowner",
      "Fast and reliable service to ensure that repairs are completed in a timely manner and with minimal disruption to the homeowner's life."
    ]
  };

  const features = khwBenefitsPack.features.map((feature, index) => (
    <li key={index}>
      <div style={{ backgroundColor: bulletColor }}></div>
      {feature}
    </li>
  ));

  const benefits = khwBenefitsPack.benefits.map((benefit, index) => (
    <li key={index}>
      <div style={{ backgroundColor: bulletColor }}></div>
      {benefit}
    </li>
  ));

  return (
    <section className='shadow-sm bg-opacity-75'>
      <h2 className='text-center' >Why <span>Us</span>?</h2>
      <div className='features-header container'>
        <div className='head'></div>
        <div><span>Features & Benefits</span></div>
        <div className='tail'></div>
      </div>
      <div className="features-benefits container">
        <div className="features">
          <h2>Features</h2>
          <ul>{features}</ul>
        </div>
        <div className="benefits">
          <h2>Benefits</h2>
          <ul>{benefits}</ul>
        </div>
      </div>
    </section>
  );
}
