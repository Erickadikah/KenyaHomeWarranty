//contact us for more information about the product
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const contactModel = model('Contact', contactSchema);
module.exports = contactModel;