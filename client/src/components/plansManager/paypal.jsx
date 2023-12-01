import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

export default function PayPalForm(props) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  const parseCurrencyToNumber = (currencyString) => {
    //regex
    const numericString = currencyString.replace(/[^\d.-]/g, '');
    return parseFloat(numericString);
  };

  const KES_TO_USD_CONVERSION_RATE = 0.009;
  const userId = window.location.href.split("=")[1];

  useEffect(() => {
    axios
      .get(`https://backend-phki.onrender.com/plans/user/${userId}`)
      .then((res) => {
        setSelectedPlan(res.data.user.selectedPlan);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    if (selectedPlan) {
      axios
        .get(`https://backend-phki.onrender.com/plans/${selectedPlan}`)
        .then((res) => {
          setPlanDetails(res.data.plan);
          console.log("planDetails:", res.data.plan);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (planDetails) {
      setPaypalLoaded(true);
    }
  }, [planDetails]);

const createOrder = (data, actions) => {
  if (!planDetails || !planDetails.monthlyCost) {
    console.error("Invalid planDetails or monthlyCost.");
    return null;
  }

  try {
    const amountValueKES = parseCurrencyToNumber(planDetails.monthlyCost);
    console.log("amountValueKES:", amountValueKES);
    const amountValueUSD = Math.round(amountValueKES * KES_TO_USD_CONVERSION_RATE);
    console.log("amountValueUSD:", amountValueUSD);

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amountValueUSD,
            currency_code: "USD",
          },
        },
      ],
    }).then((orderID) => {return orderID;});
  } catch (err) {
    console.error("Error creating PayPal order:", err);
    return null;
  }
};

  const onApprove = (data, actions) => {
    console.log("Payment was approved. Payment details:", data);
    alert("Payment successful! Thank you for your purchase.");
    // window.location.href = "/dashboard";
    // Example: Redirect the user to a "Thank You" page
    // window.location.href = "/thank-you-page"; // Replace "/thank-you-page" with the actual URL of your "Thank You" page
  };

  if (!planDetails) {
    return <div className="text-center">Loading plan details...</div>;
  }

  return (
    <div className="id-paypal-form" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {paypalLoaded && (
        <PayPalScriptProvider options={{ clientId: "AdCO5t-DhgVOg5wVXVF4140rFNvvFpsO7mwoG4k-Jtwj60M8b20syhf5CvfV19wF008mc4rd-Hgl1K-M" }}>
          <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
        </PayPalScriptProvider>
      )}
    </div>
  );
}
