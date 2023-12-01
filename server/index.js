const dotenv = require("dotenv");
const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const register = require('./routes/authRoutes.js')
const authRoutes = require('./routes/authRoutes.js')
const router = require('./routes/authRoutes.js');
const serviceObject = require("./servicesPageApi.js");
const serviceRoutes = require('./routes/servicesRoutes.js')
const contactRoutes = require('./routes/contactRoutes.js')
const planRoutes = require('./routes/planRoutes.js')
const paypal = require('@paypal/checkout-server-sdk')
const paymentRoutes = require('./routes/paymentRoutes.js')
// const paypalRoutes = require('./routes/paypalRoutes.js')


dotenv.config();

const port = process.env.PORT;

// Initialize Express app
const app = express();

//connection to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connection established')
    })
    .catch((error) => {
        console.log('Database connection failed', error.toString())
    });

// Set up middleware
app.use(cors({
    origin: ['https://kenyahomewarranty.netlify.app', 'http://localhost:5173'],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
app.use('/register', authRoutes)
app.use('/', router);
app.use('/', serviceRoutes);
app.use('/', contactRoutes);
app.use('/', planRoutes);
app.use('/', paymentRoutes);
//paypal routes
// app.use('/', paypalRoutes);

app.post('/servicesApi', function(req, res) {
    const { title } = req.query;
    currentylViewedService = serviceObject.find(obj => obj.title === title) || { message: "Not found" }
    res.json({ message: "visitor viewed " + title + " services" }).end();
});

app.get('/servicesApi', function(req, res) {
    const {title} = req.query;
    const response = serviceObject.find(obj => obj.title === title);
    res.json(response);
});

// Start the server

app.listen(port, () => {
    console.log("Listening to port ", port);
});
