// authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../helper/generateSecret.js');
const nodemailer = require('nodemailer');
const ResetToken = require('../models/resetToken')

router.post('/register', async(req, res) => {
    const { firstname, lastname, email, password } = req.body;
    try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    // user svaed to the database
    await user.save();
    console.log(user)

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '12h' });
    //success response
    res.status(200).json({ message: "Registration successful", user: user._id });
  } catch (error) {
    res.status(500).json({ message: error.toString()});
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
 if(!email || !password) {
  return res.status(400).json({ message: "Email and password are required"})
 }
  try {
    const user = await User.findOne({ email });
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '12h' });
    if (!user) {
      return res.status(400).json({ message: 'User Not Found Create an Account' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.status(200).json({ message: 'Login successful', user: user._id, token });
    console.log(user)
  } catch (error) {
    res.status(500).json({ message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//get user by id
router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).populate('selectedPlan');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

//logout
router.get('/logout', async (req, res) => {
  try {
    res.status(200).json({ message: 'Logout successful', user: user._id });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

router.post('/reset-password', async (req, res) => {

})

router.get('/forgot-password', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User Not Found. Create an Account.' });
    }

    const currentTime = Date.now();
    const oneHourAgo = currentTime - 3600000; // One hour in milliseconds

    const findToken = await ResetToken.findOne({ userId: user._id, createdAt: { $gte: oneHourAgo } });
    if (findToken) {
      return res.json({
        error: "Can only generate one token per hour"
      });
    }

    // Generate a reset token
    const resetToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    // Save the reset token to the database
    const newResetToken = new ResetToken({
      userId: user._id,
      token: resetToken
    });
    await newResetToken.save();

    // Send an email with the reset token
    const transporter = nodemailer.createTransport({
      // Configure your email sending details here
    });

    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.json({
      message: "Reset token generated and email sent successfully"
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;