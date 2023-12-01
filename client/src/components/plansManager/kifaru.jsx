//kifaru test subscription payment page
// Kifaru Subscriptions create same button for kifaru and Ndovu
import React, { useEffect, useState } from "react";
import axios from 'axios';
import PaymentModalComponent from "../shared/postpaymentModal";
import selectPlan from "../../controllers/planSelector";


const Kifarubtn = () => {
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptionID, setSubscriptionID] = useState(null);
  const userId = window.location.href.split("=")[2];
  const kifaruPlanId  =  "64b2ab426bad9b2352c5cbb3";
  const handleModalClose = () => {
      setIsModalOpen(false);
      selectPlan(kifaruPlanId, userId);
      window.location = `/userdashboard/?user=${userId}`;
  };

  const handleModalShow = function (subscriptionID) {
    setIsModalOpen(true);
  }

  {/*getting the user id from the url and sedding it to the backend  plus the subscription id from the alert*/}
  //getting the user
  useEffect(() => {
    const fetchData = async () => {
      try{
        const userResponse = await axios.get(`http://localhost:3023/users/${userId}`);
        const user = userResponse.data;

        const subscriptionResponse = await axios.post('http://localhost:3023/data/subscription', {
          data: subscriptionID,
          user: user
        });

        console.log("Data sent to MongoDB successfully");
      } catch (err) {
        console.error("Error sending data to MongoDB:", err);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AT8JZsAtm4dBAWXQsbPhd4EYdTdyiPDBdF0zXTvza9TJuNh_9YIbj1_eRRUOl3kmQV-nWso5oeGvjrKs&vault=true"; // Replace with your actual client ID
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          style: {
            shape: 'pill',
            color: 'silver',
            layout: 'vertical',
            label: 'subscribe'
          },
          createSubscription: function (subscriptionData, actions) {
            return actions.subscription.create({
              plan_id: 'P-51Y58053W05632616MTO63MY',
            });
          },
          onApprove: function (data, actions) {
            console.log("Subscription approved");
            console.log(data);
            setSubscriptionData(data); // Store subscription data in state
            //replace alert with modal
            setSubscriptionData(data);
            setSubscriptionID(data.subscriptionID);
            //alert("You have successfully subscribed to " + data.subscriptionID);
            handleModalShow(data.subscriptionID);

            // Make the POST request to your backend
            axios.post('http://localhost:3023/data/subscription', {
                data: data,
            })
              .then((res) => {
                console.log("Data sent to MongoDB successfully");
              })
              .catch((err) => {
                console.error("Error sending data to MongoDB:", err);
              });
          },
          onError: function (err) {
            console.error("Create Subscription Api response error:");
            console.error(err);
          },
        })
        .render("#paypal-button-container");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="paypal-button-container">
    <div>{<PaymentModalComponent show={isModalOpen} onClose={handleModalClose} subscriptionID={subscriptionID}/>}</div>
  </div>;
};

export default Kifarubtn;