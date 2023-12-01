import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Testpaypal(props) {
  const onApprove = (data, actions) => {
    // Subscription created successfully
    console.log('Subscription created:', data.subscriptionID);
    // You can add additional logic here after a successful subscription
  };

  const onCancel = (data) => {
    // Subscription creation canceled
    console.log('Subscription canceled:', data.subscriptionID);
    // You can add additional logic here if the subscription creation is canceled
  };

  const onError = (err) => {
    // Error occurred during subscription creation
    console.error('Subscription error:', err);
    // You can add error handling logic here if needed
  };

  return (
    <PayPalScriptProvider options={{ clientId: "AdCO5t-DhgVOg5wVXVF4140rFNvvFpsO7mwoG4k-Jtwj60M8b20syhf5CvfV19wF008mc4rd-Hgl1K-M" }}>
      <PayPalButtons
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: 'P-XXXXXX', // Replace with your subscription plan ID
          });
        }}
        onApprove={onApprove}
        onCancel={onCancel}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
