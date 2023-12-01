const express = require("express");
const Plan = require("../models/plan");
const planRoutes = express.Router();
const User = require("../models/user");
const ObjectId = require("mongoose").Types.ObjectId;
//create a new plan
planRoutes.post("/plans", async (req, res) => {
  const { plans } = req.body;
  const newPlan = new Plan({ plans });
  await newPlan.save();
  res.status(200).json({ message: "Plan saved successfully" });
});

//get all plans
planRoutes.get("/plans", async (req, res) => {
  const plans = await Plan.find();
  res.status(200).json({ plans });
});

//update a plan
planRoutes.put("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    const { plans } = req.body;
    plan.plans = plans;
    await plan.save();
    res.status(200).json({ message: "Plan updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//get Single plan
planRoutes.get("/plans/:individualPlanId", async (req, res) => {
  try {
    const individualPlan = await Plan.findOne(
      { "plans._id": req.params.individualPlanId },
      { "plans.$": 1 }
    );

    if (!individualPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.status(200).json({ plan: individualPlan.plans[0] });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//delete a  full plan
planRoutes.delete("/plans/:id", async (req, res) => {
  try {
    await Plan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//delete a single plan
planRoutes.delete("/plans/:individualPlanId", async (req, res) => {
  try {
    const individualPlan = await Plan.findOne(
      { "plans._id": req.params.individualPlanId },
      { "plans.$": 1 }
    );
    if (!individualPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    individualPlan.plans[0].remove();
    await individualPlan.save();
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//update user plan
planRoutes.put("/plans/:individualPlanId", async (req, res) => {
  try {
    const individualPlan = await Plan.findOne(
      { "plans._id": req.params.individualPlanId },
      { "plans.$": 1 }
    );
    if (!individualPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    const { plans } = req.body;
    individualPlan.plans[0] = plans;
    await individualPlan.save();
    res.status(200).json({ message: "Plan updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//choose a plan
planRoutes.post("/plans/:individualPlanId/:userId/select", async (req, res) => {
  try {
    const userId = req.params.userId;
    const individualPlanId = req.params.individualPlanId;

    // Find the user by ID and update their selectedPlan field with the individualPlanId
    const user = await User.findByIdAndUpdate(
      userId,
      { selectedPlan: individualPlanId },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Plan selected successfully", user});
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//get user + plan
planRoutes.get("/plans/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userId:", userId);

    // Find the user by ID and populate the selectedPlan field
    const user = await User.findById(userId)
    console.log("user:", {user});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Access the populated selectedPlan field of the user
    const selectedPlan = user.selectedPlan;
    console.log(`${user.firstname} you are currently using:`, selectedPlan);

    res.status(200).json({ user, selectedPlan });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});
//change plan on test mode not fully upadated
planRoutes.put("/plans/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { selectedPlan } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { selectedPlan }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Plan updated successfully", user });

  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});
module.exports = planRoutes;
