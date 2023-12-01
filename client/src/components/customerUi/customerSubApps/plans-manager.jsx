import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import ChooseAPlan from "../../landingPage/plans";
import getData from "../../../controllers/getData";

export default function PlansManager() {
  const userId = window.location.href.split("=")[1];
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isCurrentPlan, setIsCurrentPlan] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const userPlansResponse = await getData(`https://backend-phki.onrender.com/plans/user/${userId}`);
        const selectedPlanResponse = await getData(`https://backend-phki.onrender.com/plans/${userPlansResponse.selectedPlan}`);

        setSelectedPlan(selectedPlanResponse.plan.name);
        setIsCurrentPlan(true);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, [userId]);

  useEffect(() => {
    function updateBtnText() {
      const cards = document.querySelectorAll(".plan-card");
      cards.forEach((card) => {
        card.querySelector(".btn").innerHTML = `<a href=/checkout/?plan=${card.id}&user=${userId} rel=noopener class="text-white text-decoration-none">Choose Plan</a>`;
      });
    }

    if (isCurrentPlan) {
      updateBtnText();
    }
  }, [selectedPlan, userId, isCurrentPlan]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: '60px' }}>
        <ChooseAPlan />
        {isCurrentPlan && (
          <div className="container">
            <p className="current-plan-message text-primary text-center" style={{fontSize: "20px"}}>
              <b><i>Your current plan is: <span className="text-secondary">{selectedPlan} Plan</span></i></b>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
