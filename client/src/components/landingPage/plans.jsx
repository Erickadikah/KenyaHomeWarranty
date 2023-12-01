import React from "react";
import nyatiPlan from "../../controllers/nyatiDescriptor";
import kifaruPlan from "../../controllers/kifaruDescriptor";
import ndovuPlan from "../../controllers/ndovuDescriptor";
import PlanTree from "../shared/planTree";

export default function ChooseAPlan() {
  const khwPlans = [
    {
      title: "Nyati",
      charge: "Sh.2350/month",
      features: <PlanTree plan={nyatiPlan} varriant="card1" color={"#d1d1d1"}/>,
      redirectTo: "/authuser/signin/?plan=Nyati"
    },
    {
      title: "Kifaru",
      charge: "Sh. 2794/month",
      features: <PlanTree plan={kifaruPlan} varriant="card2" />,
      redirectTo: "/authuser/signin/?plan=Kifaru"
    },
    {
      title: "Ndovu",
      charge: "Sh. 4136/month",
      features: <PlanTree plan={ndovuPlan} varriant="card3" color={"#d1d1d1"} />,
      redirectTo: "/authuser/signin/?plan=Ndovu",
    },
  ];

  const plan = khwPlans.map((kplan, key) => {
    return (
      <div
        className={`shadow-sm plan-card card${key + 1}`}
        id={kplan.title}
        key={key}
      >
        <div>
          <p className="text-center"><b>{kplan.title}</b></p>
          <p className="text-center"><b>{kplan.charge}</b></p>
        </div>
        <p className="text-center">plan coverage</p>
        <div className="container" >
          <div >{kplan.features}</div>
        </div>
        <div>
          <button className="btn btn-primary"><a className="text-decoration-none text-light" href={kplan.redirectTo}>Get Started</a></button>
        </div>
      </div>
    );
  });

  return (
    <div className="choose-a-plan" id="ourPlans">
      <h1 className="text-center">Choose the right plan for your need</h1>
      <p className="text-center">Discover the perfect protection for your home</p>
      <div className="all-plans">{plan}</div>
    </div>
  );
}
