const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
    PropertyName: { 
        type: String, 
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now() 
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }

});

const serviceModel = model('Service', serviceSchema);

module.exports = serviceModel;