const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwtSecret = require('../helper/generateSecret')

const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || lastname || email || password) {
    return res.status(400).json({ message: "all fields are required"})
  }
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

    // Save the user to the database
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '12h' });
    // Return a success response
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration" });
  }
};

module.exports = register;