import React, {useState, useEffect} from "react";
import LandingNavBar from "./navbar";
import ServiceTemplate from "./service-template";
import electronicsIllustration from "../../assets/images/landingPage/services/electronic.jpg";
import plumbingIllustration from "../../assets/images/landingPage/services/plumbing.jpg";
import laundryIllustration from "../../assets/images/landingPage/services/laundry.jpg";
import airConditionerIllustration from "../../assets/images/landingPage/services/airConditioner.jpg";
import roofIllustration from "../../assets/images/landingPage/services/roof.jpg";
import kitchenIllustration from "../../assets/images/landingPage/services/kitchen.jpg";
import { LoadingAnimation } from "./loading-bar";



export default function ServicePage() {


  async function getData(baseUrl) {
    try {
      const response = await fetch(baseUrl);
      const newData = await response.json();
      return newData;
    } catch (err) {
      console.log("Error:", err);
    }
  }


  const serviceIllustrations = [
    plumbingIllustration,
    airConditionerIllustration,
    electronicsIllustration,
    kitchenIllustration,
    laundryIllustration,
    roofIllustration
  ];

    //const serviceItem = serviceObject[0];
    const [serviceItem, updateServiceItem] = useState(null);
    const title = window.location.href.split("=")[1];
    useEffect(function () {
      getData(`https://backend-phki.onrender.com/servicesApi/?title=${title}`).then(
        function (res) {
          console.log(res.id - 1);
          updateServiceItem(res);
        }
      );
    }, []);


    //manage sidemenu


    return (
      <div className="servicePage">
        <LandingNavBar />
        {serviceItem ?
        (
            <ServiceTemplate
              title={serviceItem.title}
              serviceImage={serviceIllustrations[serviceItem.id - 1]}
              description={serviceItem.description}
              covered={serviceItem.coverage.covered}
              unCovered={serviceItem.coverage.unCovered}
              totalClients={serviceItem.serviceStats.totalClients}
              satisfiedClients={serviceItem.serviceStats.satisfiedClients}
              repeatClients={serviceItem.serviceStats.repeatClients}
          />
        )
        :
        (
          <div>
            <LoadingAnimation style={{width: '20px'}}/> loading ...
          </div>
        )
        }
      </div>
    );
}
