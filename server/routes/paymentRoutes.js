const express = require('express')
const paymentRoutes = express.Router()
const Payment = require('../models/payment')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId

//creating payment
paymentRoutes.post('/payments', async (req, res) => {
    const { user, selectedPlan } = req.body
    const newPayment = new Payment({ user, selectedPlan})
    await newPayment.save()
    res.status(200).json(newPayment)
});


paymentRoutes.get('/payments', async (req, res) => {
    const payments = await Payment.find()
    res.status(200).json({ payments })
});

//payments by user
paymentRoutes.get('/payments/:id', async (req, res) => {
    const payment = await Payment.findById(req.params.id)
    res.status(200).json({ payment })
});

module.exports = paymentRoutes