import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const footerItems =
[
  {
    title: "Services",
    children : [
        "Heating & cooling systems",
        "Electronics",
        "Kitchen Appliances",
        "Laundry Appliances",
        "Plumbing",
        "Roof",
    ]
  },


  {
    title: "Company",
    children: [
      "About",
      "Pricing",
      "Our Team",
      "Careeers",
      "Join Us",
      "Our Commmunity"
    ]
  },


  {
    title: "Resources",
    children: [
      "Help Center Support",
      "FAQs"
    ]
  },

  {
    title: "Legal",
    children: [
      "Terms of Services",
      "Privacy Notice",
      "Cookie Policy",
      "Privacy Center"
    ]
  },

  {
    title: "Social Media Links",
    children: [
        <a href='https://web.facebook.com/kenya.home.warranty' target='_blank'>
          <FaFacebook fontSize={"18px"} />
        </a>,
        <a href='#'>
          <FaTwitter fontSize={"18px"} />
          </a>,
        <a href='#'>
          <FaInstagram fontSize={"18px"} />
        </a>,
    ]
  }
];
