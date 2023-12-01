// import mongoose from "mongoose";
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstname: { 
    type: String, 
    required: true },
  lastname: { 
    type: String, 
    required: true 
  },
  email: { type: String, 
    required: true, 
    unique: true },
  password: { type: String,
    Required: true,
    minlength: 6
  },
  selectedPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
  },
});

const userModel = model('User', userSchema);

module.exports = userModel;
