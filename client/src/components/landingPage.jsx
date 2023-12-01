import React from "react";
import LandingNavBar from "./landingPage/navbar";
import AboutUs from "./landingPage/about";
import Services from "./landingPage/services";
import FeaturesAndBenefits from "./landingPage/features";
import ChooseAPlan from "./landingPage/plans";
import RepairProcess from "./landingPage/repairs";
import ContactUsForm from "./landingPage/contact-form";
import "../assets/styles/landingPage/landingMain.scss";
import "bootstrap/dist/css/bootstrap.css";
import FixedProgressBar from "./landingPage/progress-bar";
import RepairProgress from "./landingPage/our-repair-process";
import { PageHero } from "./landingPage/pageHero";
import PageFooter from "./landingPage/pageFooter";
import FloatingChatButton from "./landingPage/floatingChatIcon";



export default function LandingPage() {
  const [showContactForm, setShowContactForm] = React.useState(false);
  function toggleForm () {
    setShowContactForm(oldVal => !oldVal);
  }
  return (
    <div style={{ fontSize: "14px" }}>
      <LandingNavBar />
      <FixedProgressBar />
      <PageHero />
      <AboutUs />
      <Services />
      <FeaturesAndBenefits />
      <ChooseAPlan />
      <RepairProcess />
      {
        showContactForm &&
        <ContactUsForm closeForm={toggleForm}/>
      }
      <FloatingChatButton handleChatButtonClick={toggleForm}/>
      <PageFooter />
    </div>
  );
}
