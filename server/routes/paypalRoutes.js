const express = require("express");
const paypalRoutes = express.Router();
const paypal = require("paypal-rest-sdk");
const {mongoClient } = require("mongodb");
const BillingAgreement = require("../models/billingAgreement");

paypal.configure({
    mode: "live", //sandbox or live
    client_id: 'ARYqhA5A2tlKwbzXKGsKc_89AWbfhRMyCLO3tvVL0bgfK40LgZm5aoIUGMVK09LT3iLGpjMAKniEeYnp',
    client_secret: 'EK78MfyQlD1xUDz0BExzImT_BsIagACzfNL0a2qvI3kq8F-HDawgsanH3AYYrnNqL624R0d2lqYYDq1X'
});

const billingPlanAttributes = [
  {
    name: 'Nyati Plan',
    description: 'Recurring payment for Nyati plan',
    type: 'INFINITE',
    payment_definitions: [
      {
        name: 'Regular Payment',
        type: 'REGULAR',
        frequency: 'MONTH',
        frequency_interval: '1',
        amount: {
          currency: 'USD',
          value: '2350'
        },
        cycles: '12'
      }
    ],
    merchant_preferences: {
      return_url: 'http://example.com/success',
      cancel_url: 'http://example.com/cancel'
    }
  },
  {
    name: 'Kifaru Plan',
    description: 'Recurring payment for Kifaru plan',
    type: 'INFINITE',
    payment_definitions: [
      {
        name: 'Regular Payment',
        type: 'REGULAR',
        frequency: 'MONTH',
        frequency_interval: '1',
        amount: {
          currency: 'USD',
          value: '2794'
        },
        cycles: '12'
      }
    ],
    merchant_preferences: {
      return_url: 'http://example.com/success',
      cancel_url: 'http://example.com/cancel'
    }
  },
  {
    name: 'Ndovu Plan',
    description: 'Recurring payment for Ndovu plan',
    type: 'INFINITE',
    payment_definitions: [
      {
        name: 'Regular Payment',
        type: 'REGULAR',
        frequency: 'MONTH',
        frequency_interval: '1',
        amount: {
          currency: 'USD',
          value: '4136'
        },
        cycles: '12'
      }
    ],
    merchant_preferences: {
      return_url: 'http://example.com/success',
      cancel_url: 'http://example.com/cancel'
    }
  }
];

//activate billing plan
const activateBillingPlan = (planId) => {
  const activateBillingPlanPatch = [
    {
      op: 'replace',
      path: '/',
      value: {
        state: 'ACTIVE'
      }
    }
  ];

  paypal.billingPlan.update(planId, activateBillingPlanPatch, (error, updatedPlan) => {
    if (error) {
      console.error('Error activating billing plan:', error);
    } else {
      console.log('Billing plan activated successfully:', updatedPlan.state);
    }
  });
};
// Function to create a billing agreement
const createBillingAgreement = (planId, customerEmail) => {
  const billingAgreementAttributes = {
    name: 'Billing Agreement',
    description: 'Recurring payment agreement for the customer',
    start_date: new Date().toISOString(),
    plan: {
      id: planId,
    },
    payer: {
      payment_method: 'paypal',
    },
  };

paypal.billingAgreement.create(billingAgreementAttributes, (error, billingAgreement) => {
    if (error) {
      console.error('Error creating billing agreement:', error);
    } else {
      console.log('Billing agreement created successfully:', billingAgreement.id);

      // Save the billing agreement details to MongoDB
      const newBillingAgreement = new BillingAgreement({
        agreementId: billingAgreement.id,
        customerEmail: customerEmail,
      });

      newBillingAgreement.save((saveError, savedAgreement) => {
        if (saveError) {
          console.error('Error saving billing agreement:', saveError);
        } else {
          console.log('Billing agreement details saved:', savedAgreement);
        }
      });

      // Redirect the customer to the approval URL to complete the agreement
      const approvalUrl = billingAgreement.links.find(link => link.rel === 'approval_url').href;
      console.log('Customer approval URL:', approvalUrl);
    }
  });
};

// Calling the function to create billing agreements for each plan
billingPlanAttributes.forEach((plan) => {
  paypal.billingPlan.create(plan, (error, billingPlan) => {
    if (error) {
      console.error('Error creating billing plan:', error);
    } else {
      console.log(`Billing plan created successfully: ${plan.name} - ${billingPlan.id}`);
      // Store the 'billingPlan.id' in your database or use it as needed
      activateBillingPlan(billingPlan.id);

      // Create billing agreement for each plan after it's activated
      createBillingAgreement(billingPlan.id, 'customer@example.com'); // Replace 'customer@example.com' with the customer's email
    }
  });
});

// Function to create billing plans
const createBillingPlans = (billingPlans) => {
  billingPlans.forEach((plan) => {
    paypal.billingPlan.create(plan, (error, billingPlan) => {
      if (error) {
        console.error('Error creating billing plan:', error);
      } else {
        console.log(`Billing plan created successfully: ${plan.name} - ${billingPlan.id}`);
        // Store the 'billingPlan.id' in your database or use it as needed
        activateBillingPlan(billingPlan.id);
      }
    });
  });
};


// Calling the function to create billing plans
createBillingPlans(billingPlanAttributes);
module.exports = paypalRoutes;
