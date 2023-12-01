const mongoose = require('mongoose');
const { Schema, model } = mongoose;
//payments model for payments made by users
const paymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        // ref: 'User',
        required: true,
    },
    selectedPlan: {
        type: String,
        required: true,
    }
});

const paymentModel = model('Payment', paymentSchema);
module.exports = paymentModel;
