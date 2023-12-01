import React, { useState, useEffect } from 'react';
import ServiceTemplate from './service-template';
import electronicsIllustration from "../../assets/images/landingPage/services/electronic.jpg";
import plumbingIllustration from "../../assets/images/landingPage/services/plumbing.jpg";
import laundryIllustration from "../../assets/images/landingPage/services/laundry.jpg";
import airConditionerIllustration from "../../assets/images/landingPage/services/airConditioner.jpg";
import roofIllustration from "../../assets/images/landingPage/services/roof.jpg";
import kitchenIllustration from "../../assets/images/landingPage/services/kitchen.jpg";
import ServicesNavBar from './allservices-nav-bar';

// Placeholder function for getData
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default function AllServices() {

  const serviceIllustrations = [
    plumbingIllustration,
    airConditionerIllustration,
    electronicsIllustration,
    kitchenIllustration,
    laundryIllustration,
    roofIllustration
  ];

  const [serviceItem, updateServiceItem] = useState(null);
  useEffect(() => {
    getData('https://backend-phki.onrender.com/servicesApi/?title=plumbing')
      .then(function (res) {
        if (Object.keys(res).length > 1) {
          updateServiceItem(res);
        }
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }, []);

  const handleServiceButtonClick = (apiCalltitle) => {
    getData(`https://backend-phki.onrender.com/servicesApi/?title=${apiCalltitle}`)
      .then(function (res) {
        if (Object.keys(res).length > 1) {
          updateServiceItem(res);
        }
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  return (
    <>
    <div><ServicesNavBar handleServiceButtonClick={handleServiceButtonClick} /></div>
      <div className="container servicePage" style={{ marginTop: '60px' }} id="all-services-templates">
        {serviceItem ? (
          <ServiceTemplate
            title={serviceItem.title}
            serviceImage={serviceIllustrations[serviceItem.id -1]}
            description={serviceItem.description}
            covered={serviceItem.coverage.covered}
            unCovered={serviceItem.coverage.unCovered}
            totalClients={serviceItem.serviceStats.totalClients}
            satisfiedClients={serviceItem.serviceStats.satisfiedClients}
            repeatClients={serviceItem.serviceStats.repeatClients}
          />
        ) : (
          <div>
            <p>Loading</p>
          </div>
        )}
      </div>
    </>
  );
}
