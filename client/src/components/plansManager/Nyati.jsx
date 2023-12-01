//Name: Nyati Subscriptions
import axios from 'axios';
import {useState, useEffect } from 'react';
import PaymentModalComponent from '../shared/postpaymentModal';
import selectPlan from '../../controllers/planSelector';

const Nyatibtn = () => {
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptionID, setSubscriptionID] = useState(null);
  const userId = window.location.href.split("=")[2];
  //id from db
  const nyatiPlanId =   "64b2ab426bad9b2352c5cb93";
  const handleModalClose = () => {
    setIsModalOpen(false);
    //patch userId here
    selectPlan(nyatiPlanId, userId);
    window.location = `/userdashboard/?user=${userId}`;
  };

  const handleModalShow = function (subscriptionID) {
    setIsModalOpen(true);
  }

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
              plan_id: 'P-4DM94658Y7674382VMTO67WQ',
            });
          },
          onApprove: function (data, actions) {
            console.log("Subscription approved");
            console.log(data);
            setSubscriptionData(data); // Store subscription data in state
            setSubscriptionID(data.subscriptionID);
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

export default Nyatibtn;