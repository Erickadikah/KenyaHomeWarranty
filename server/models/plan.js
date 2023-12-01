const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const optionSchema = new Schema({
  name: String,
  included: Boolean
});

const categorySchema = new Schema({
  name: String,
  options: [optionSchema]
});

const planSchema = new Schema({
  plans: [
    {
      name: String,
      serviceCallFee: String,
      monthlyCost: String,
      annualCost: String,
      categories: [categorySchema]
    }
  ]
});

const Plan = model('Plan', planSchema);

module.exports = Plan;
